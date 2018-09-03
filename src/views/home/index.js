import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';

const $ = window.$;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="home">
        <div className={'home-center'}>
          <div className={'animated fadeInDownBig'}>
            <Icon />
          </div>
          <h1 className="title animated fadeInLeftBig">Kurtis J. Dunn</h1>
          <p className="desc animated fadeInRightBig">Full Stack Developer on the Mid North Coast.<br />
          Let's build something together.</p>
          <br />
          <Button class="btn-cyan btn-bit-bigger animated fadeInUpBig" title="Hire me"/>
        </div>
      </section>
    );
  }
}
