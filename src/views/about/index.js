import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';


const $ = window.$;


export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    const that = this;
  }
  render() {
    return (
      <section id="about">
        <div className={'container'}>
          <div className="row">
            <div className="col-md-8">
              <h2>About Kurtis</h2>
              <img className ="rounded-circle float-right" src="https://s3.ap-southeast-2.amazonaws.com/images.kurtd/me3.jpg" />
              <p>I began my developers journey in the 90's when Javascript bust onto the scene thanks to Netscape. Many years later web development is still my passion, from project requirements, design, through QA and product launch. Now days I'm all about Micro-services and improving business process through a simplified functional approach..</p>
              <p>I have completed projects in WordPress, Symfony, Drupal, Laravel, Grails and other platforms. I also have experience using modern Javascript Frameworks like Node, Webpack, React, Skate and Express. Lately I've been looking at React Native, AWS DevOps, as well as building skills with GraphQL API Building.</p>
              <p>Currently, I am looking for my next Project or collaboration. </p>
              <h3>
                What Else?
              </h3>
              <p>
                Besides my full time work, I also work as a consultant and photographer for smaller projects. - <a href="">contact me</a> for information about my rates and availabilty.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3>About this site</h3>
                  <p>This site was designed to be a single page application and to run independently through the browser. It was developed with Webpack, React, Sass and plain 'ol vanilla Javascipt.</p>
                  <p>Fonts come from Google Fonts. Bree Serif (serif) for headings and Roboto (sans-serif) for body text.</p>
                  <p>This site is hosted on <a href="">Github Pages</a> - feel free to checkout the source</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
