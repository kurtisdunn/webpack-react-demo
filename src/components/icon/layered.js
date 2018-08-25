import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

export default class LayeredIcon extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <span className="fa-layers fa-fw">
          <i className={`fa fa-${this.props.type}`}></i>
          <span className="fa-layers-counter" style={{ 'background': 'Tomato' }}>{this.props.count}</span>
        </span>
      </div>
    );
  }
}
