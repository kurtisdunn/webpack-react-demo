import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

library.add(faLaptopCode);

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <FontAwesomeIcon icon={this.props.type} />
    );
  }
}
