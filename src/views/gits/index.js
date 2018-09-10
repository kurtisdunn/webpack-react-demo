import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';


const $ = window.$;


export default class Gits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
      gits: null
    };
  }
  componentWillMount(){

  }
  renderGits(){

  }
  render() {
    return (
      <section id="gits">
        <div className={'container'}>
          <h2>My Github</h2>
          <div className={'row'}>
            <div className="col-md">
              <ul className="repos list-unstyled">
                <li className="animated bounceInRight" style={{display: 'block'}}>
                  <a href="https://github.com/kurtisdunn/webpack-react-demo">webpack-react-demo</a>
                  <div className="pull-right"><span>JavaScript</span></div>
                  <br />Demo resume/cv site free for all.
                </li>
                <li className="animated bounceInRight" style={{display: 'block'}}>
                  <a href="https://github.com/kurtisdunn/electron-express-react-webpack">electron-express-react-webpack</a>
                  <div className="pull-right"><span>JavaScript</span></div><br />Demo Electron App using React + Webpack
                </li>
                <li className="animated bounceInRight" style={{display: 'block'}}>
                  <a href="https://github.com/kurtisdunn/React-Shopping-Cart">React-Shopping-Cart</a>
                  <div className="pull-right"><span>JavaScript</span></div><br />A paginated shopping cart using React &amp; Bootstrap.
                </li>
              </ul>
            </div>
            <div className="col-md">
              <ul className="gists list-unstyled">
              <li className="animated bounceInLeft" style={{display: 'block'}}>
                <a href="https://gist.github.com/4635054a60716dc95652c20b2cbdf552">desc.md</a>
                <div className="pull-right">
                  <span>Markdown</span>
                </div>
                <br />Scroll To Function JS
              </li>
              <li className="animated bounceInLeft" style={{display: 'block'}}>
                <a href="https://gist.github.com/0218198f0bfb8b222fb4109d866770fd">desc.md</a>
                <div className="pull-right"><span>Markdown</span></div><br />React Form Component
              </li>
              <li className="animated bounceInLeft" style={{display: 'block'}}>
                <a href="https://gist.github.com/06c4406d670a77c14909fe19d04ae51c">active_directory.md</a>
                <div className="pull-right"><span>Markdown</span></div><br />active_directory.ps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
