import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Form from '../../components/form';
import Icon from '../../components/icon';
import Input from '../../components/input';
import Textarea from '../../components/textarea';


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
