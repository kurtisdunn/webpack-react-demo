import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';

const $ = window.$;

const recentExamples = [
  {
    title:  'Kurt D Photography',
    description: 'A personal project for my other business. Kurt D Photography is a ReactJS Application using Webpack.',
    url: 'http://s3.ap-southeast-2.amazonaws.com/images.kurtd/kdp.jpg',
  },
  {
    title:  'Vital Consult',
    description: 'Working with the Head Desinger @ Shiny Ideas, I did both the front-end and the WordPress backend back end for this project.',
    url: 'http://s3.ap-southeast-2.amazonaws.com/images.kurtd/vitalconsult.jpg',
  },
  {
    title:  'Pilbara for Purpose',
    description: 'The website need to be mobile friendly, fast and utilise multiple API\'s such as the Instagram API and the OpenWeather API. Starting with a responsive base of Twitter BootStrap, I used a Wordpress & pure JavaScript.',
    url: 'http://s3.ap-southeast-2.amazonaws.com/images.kurtd/pilbaraforpurpose.jpg',
  }
];

export default class Recent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'recent': recentExamples,
      'selected': 0
    };
    this.selectedExample = this.selectedExample.bind(this);
  }
  selectedExample(){
    const example = this.state.recent.filter((r, i) => this.state.selected == i);
    return example.map(r => (
      <div key={r} >
        <h4>{ r.title }</h4>
        <a href="#">
          <img src={r.url} />
        </a>
        <p>{ r.description }</p>
      </div>
    ));
  }
  render() {
    return (
      <section id="recent">
        <div className={'container'}>
          <h2>Recent Work</h2>
          <div className={'recent-titles'}>
            {
              this.state.recent.map((r, i) => (
                <Button class={`btn-recent ${ i == this.state.selected ? 'btn-recent-active' : null}`} key={i} title={r.title} onClick={ () => { this.setState({ selected: i }); } } />
              ))
            }
          </div>
          <div className={'recent-example'}>
            { this.selectedExample() }
          </div>
        </div>
      </section>
    );
  }
}
