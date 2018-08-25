import React from 'react';
import styles from './index.scss';
import config from '../../utils/config';

import GetPortfolio from '../../api/portfolio/get';

import About from '../../components/about';
import FullscreenJumbotron from '../../components/jumbotron/fullscreen';
import Gallery from '../../components/gallery';
import Modal from '../../components/modal';

const $ = window.$;

// Static for now. Needs to in config and editable from admin
const tagsToFilter = [1,2,3,5];


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const that = this;
    GetPortfolio().then(r => that.setState({images: r}));
  }
  render() {
    return (
      <div className="home">

        <FullscreenJumbotron />
                <About />
        { this.state.images ? <Gallery tagLinks={tagsToFilter} images={this.state.images}/> : null }
      </div>
    );
  }
}
