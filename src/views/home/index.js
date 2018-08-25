import React from 'react';
import styles from './index.scss';

import Icon from '../../components/icon';


const $ = window.$;

// Static for now. Needs to in config and editable from admin
const tagsToFilter = [1,2,3,5];


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const that = this;
  }
  render() {
    return (
      <div className="home">
        <div className={'home-center'}>
          <Icon type={'laptop-code'} />
          <h1>Kurtis J. Dunn</h1>
          <p>Full Stack Developer in the Mid North Coast.<br />
          Let's build something together.</p>
        </div>
      </div>
    );
  }
}
