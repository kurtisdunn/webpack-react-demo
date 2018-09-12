import React from 'react';
import assign from 'object-assign';
import emit from '../../utils/emit';
import Alert from '../../components/alert';
import validate from '../../utils/validator/form';

const $ = window.$;

function emitResponse (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response });
  };
}

function emitSuccess (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response.toString(), responseType: 'success' });
  };
}

function emitError (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response.toString(), responseType: 'danger' });
  };
}

function serialize(elem) {
  elem.querySelector(('button[type="submit"]')).setAttribute('disabled', 'true');

  return $(elem).serializeArray().reduce(function(prev, curr) {
    var selects = [].slice.call(elem.querySelectorAll('select'));
    let selectArray;

    if (selects.length > 0) {
      selectArray = selects.reduce(function(prev, curr) {
        if (prev.hasOwnProperty(curr.id)) {
          if (Array.isArray(prev[curr.id])) {
            prev[curr.id].push(curr.value);
          } else {
            prev[curr.id] = [prev[curr.name], curr.value];
          }
        } else {
          prev[curr.id] = curr.value;
        }
        return prev;
      }, {});
    }

    if (prev.hasOwnProperty(curr.name)) {
      if (Array.isArray(prev[curr.name])) {
        prev[curr.name].push(curr.value);
      }
    } else {
      prev[curr.name] = curr.value;
    }

    const result = assign({}, prev, selectArray);
    return result;

  }, {});
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      erros: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.recursiveCloneChildren = this.recursiveCloneChildren.bind(this);
  }

  handleSubmit(event) {
    const that = this;
    const form = event.target;
    const handler = this.props.method;

    form.querySelector(('button[type="submit"]')).removeAttribute('disabled');

    if (handler) {
     event.preventDefault();
    }

    validate(event.target, function (field, errors) {

    }, function (form, errors) {
      that.setState({
        errors: errors
      });
      if (!handler || errors.length) {
        return;
      }
      handler(serialize(form))
        .then(emitResponse(form, that))
        .then(emitSuccess(form, that))
        .catch(emitError(form, that));
    });
  }

  recursiveCloneChildren(children) {
    const that = this;
    return React.Children.map(children, child => {
      var childProps = {};
      if (React.isValidElement(child)) {
        childProps = { errors: that.state.errors };
      }
      if (child.props) {
        childProps.children = this.recursiveCloneChildren(child.props.children);
        return React.cloneElement(child, childProps);
      }
      return child;
    });
  }
  render() {
    return (
      <div>
        { this.state.response ? <Alert type={ this.state.responseType } message={ this.state.response }/> : null}
        <form onSubmit={this.handleSubmit} >
          { this.recursiveCloneChildren(this.props.children) }
        </form>
      </div>
    );
  }
}
