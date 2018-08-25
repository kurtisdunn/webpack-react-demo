import React from 'react';
import './index.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <button
          onClick = { this.props.onClick ? this.props.onClick : undefined }
          type={ this.props.type ? this.props.type : 'button' }
          style={ this.props.style ? this.props.style : null }
          className={ `btn  ${this.props.class ? this.props.class : 'btn-primary'}` }>
          { this.props.title ? this.props.title : 'Submit' }
        </button>
    );
  }
}
