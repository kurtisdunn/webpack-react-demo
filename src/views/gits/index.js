import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';


const $ = window.$;


export default class Gits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="gits">
        <h1>Gits</h1>
      </section>
    );
  }
}
