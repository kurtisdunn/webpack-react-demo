import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Icon from '../../components/icon';

const $ = window.$;

const recentExamples = [
  {
    title:  'Kurt D Photography',
    description: 'The guys from Shiny Ideas Co came to me for the development of their new Adobe Business Catalyst project. The website need to be mobile friendly, fast and utilise multiple API\'s such as the Instagram API and the OpenWeather API. Starting with a responsive base of Twitter BootStrap and to give an asynchronous feel the site, I used a FullStack JavaScript approach. The stack comprises of RequireJS, Backbone.js, Underscore.js and JQuery.',
    url: 'http://s3.ap-southeast-2.amazonaws.com/images.kurtd/kdp.jpg',
  },
  {
    title:  'Vital Consult',
    description: 'The guys from Shiny Ideas Co came to me for the development of their new Adobe Business Catalyst project. The website need to be mobile friendly, fast and utilise multiple API\'s such as the Instagram API and the OpenWeather API. Starting with a responsive base of Twitter BootStrap and to give an asynchronous feel the site, I used a FullStack JavaScript approach. The stack comprises of RequireJS, Backbone.js, Underscore.js and JQuery.',
    url: 'http://s3.ap-southeast-2.amazonaws.com/images.kurtd/vitalconsult.jpg',
  },
  {
    title:  'Pilbara for Purpose',
    description: 'The guys from Shiny Ideas Co came to me for the development of their new Adobe Business Catalyst project. The website need to be mobile friendly, fast and utilise multiple API\'s such as the Instagram API and the OpenWeather API. Starting with a responsive base of Twitter BootStrap and to give an asynchronous feel the site, I used a FullStack JavaScript approach. The stack comprises of RequireJS, Backbone.js, Underscore.js and JQuery.',
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
//
// <section id="work" class="site-section bg-white text-center">
//   <div class="container"><h2>Recent Work</h2>
//   <ul class="list-reset md:flex md:inline-flex work-pills mb-8">
//     <li><label class="active">
//       <input type="radio" value="vct">Vancouver Civic Theatres
//                         </label></li> <li><label class=""><input type="radio" value="cdirect">
//                             Credential Direct
//                         </label></li> <li><label class=""><input type="radio" value="ipom">
//                             In Pursuit of More
//                         </label></li> <li><label class=""><input type="radio" value="sf">
//                             Samuel French
//                         </label></li></ul> <div class="lg:flex work-list flex-wrap"><div aria-hidden="false" class="fadeIn readable-p block-center" style=""><h4>Vancouver Civic Theatres</h4> <a href="https://vancouvercivictheatres.com/" class="work-list__image-link"><img src="vct-min.0e3e0bcbbc6d6ffa8a89.png" data-src="vct-min.0e3e0bcbbc6d6ffa8a89.png" alt="Vancouver Civic Theatres" class="shadow-lg mb-8"></a> <p>Beautifully designed at Engine Digital, this project was front-end only. As the lead developer for this <a href="https://vancouvercivictheatres.com/">VCT</a> project, I handled all of the usual suspects in the front end: HTML, CSS, and JavaScript. This includes some complex tools like a venue availability calendar and rental estimator.</p></div> <div aria-hidden="true" class="fadeIn readable-p block-center" style="display: none;"><h4>Credential Direct</h4> <a href="https://credentialdirect.com/" class="work-list__image-link"><img src="credential-min.a332a6988527ad89a1d5.png" data-src="credential-min.a332a6988527ad89a1d5.png" alt="Credential Direct" class="shadow-lg mb-8"></a> <p>Another Engine Digital project, <a href="https://credentialdirect.com/">Credential Direct</a> was a top-to-bottom WordPress build. As the lead developer, I built out the front-end, as well as the WordPress integration, including JavaScript features using the WordPress REST API.</p></div> <div aria-hidden="true" class="fadeIn readable-p block-center" style="display: none;"><h4>Samuel French</h4> <a href="https://www.samuelfrench.com/" class="work-list__image-link"><img src="sf-min.a779a4d0706ba6635809.png" data-src="sf-min.a779a4d0706ba6635809.png" alt="Samuel French" class="shadow-lg mb-8"></a> <p>The leader of the front-end team for this project for Engine Digital, I was responsible for the front-end on this e-commerce project for <a href="https://www.samuelfrench.com/">Samuel French</a>. Most notable was the complex Vue integration managing user logins, comment systems, shopping carts, and the vast product catalog.</p></div> <div aria-hidden="true" class="fadeIn readable-p block-center" style="display: none;"><h4>In Pursuit of More</h4> <a href="http://inpursuitofmore.com/" class="work-list__image-link"><img src="ipom-min.a3c3aade01259119c20a.png" data-src="ipom-min.a3c3aade01259119c20a.png" alt="In Pursuit of More" class="shadow-lg mb-8"></a> <p>A consulting project for a fantastic food and lifestyle blog, <a href="http://inpursuitofmore.com/">IPOM</a> was a total rebuild - with a new design, I did both the front-end and the WordPress back-end, greatly improving load times and overall site speed.</p></div></div></div></section>
