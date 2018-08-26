import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" id="code" viewBox="0 0 1920 1896.0833" ><path d="M617 1399l-50 50q-10 10-23 10t-23-10L55 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L224 960l393 393q10 10 10 23t-10 23zm591-1067L835 1623q-4 13-15.5 19.5T796 1645l-62-17q-13-4-19.5-15.5T712 1588l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/></svg>
    );
  }
}
