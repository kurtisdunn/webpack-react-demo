import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';


const $ = window.$;


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    const that = this;
  }
  render() {
    return (
      <section id="contact">
        <h1>Contact</h1>
      </section>
    );
  }
}
