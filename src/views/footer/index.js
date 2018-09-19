import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';

const $ = window.$;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const date =  new Date();

    return (
      <footer id="footer">
        <div className={'container'}>
          <div className="pull-left">
            <Icon />
             ©{ (new Date()).getFullYear() } Kurtis Dunn
          </div>
          <div className="pull-right">
            <a href="www.github.com//kurtisdunn"><span className="fa fa-github"></span></a>
            <a href="www.linkedin.com/in/kurtis-dunn"><span className="fa fa-linkedin"></span></a>
            <a href="www.instagram.com/kurtdphotography"><span className="fa fa-instagram"></span></a>
          </div>
        </div>
      </footer>
    );
  }
}
