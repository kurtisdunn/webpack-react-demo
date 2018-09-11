import React from 'react';
import styles from './index.scss';

import GetGists from '../../api/gist/get';
import GetRepos from '../../api/git/get';

import Button from '../../components/button';
import Icon from '../../components/icon';


const $ = window.$;

function fileName(files) {
  for (var i in files) {
    return i;
  }
}

export default class Gits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gists: null,
      repos: null
    };
  }
  componentWillMount(){
    GetGists().then(r => this.setState({gists: r}));
    GetRepos().then(r => this.setState({repos: r}));
  }
  render() {
    return (
      <section id="gits">
        <div className={'container'}>
          <h2>My Github</h2>
          <div className={'row'}>
            <div className="col">
              { this.state.repos ? (<h4 className="animated bounceInRight">Latest Repositries</h4>) : null }
              <ul className="gists mx-auto list-unstyled">
                { this.state.repos ? this.state.repos.map((r, i) => (
                  <li className="animated bounceInLeft" key={i} style={{display: 'block'}}>
                    <a href={ r.html_url }>{ r.name }</a>
                    <div className="pull-right"><span>{ r.language }</span></div>
                    <br />{ r.description }
                  </li>
                )) : null }
              </ul>
             </div>
          </div>
          <div className={'row'}>
            <div className="col">
            { this.state.gists ? (<h4 className="animated bounceInRight">Latest Gists</h4>) : null }
            <ul className="repos list-unstyled">
              { this.state.gists ? this.state.gists.map((r, i) => (
                <li className="animated bounceInRight" key={i} style={{display: 'block'}}>
                  <a href={ r.url }>{ fileName(r.files) }</a>
                  <div className="pull-right"><span>{ r.files[fileName(r.files).toString()].language }</span></div>
                  <br />{ r.description }
                </li>
              )) : null }
            </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
