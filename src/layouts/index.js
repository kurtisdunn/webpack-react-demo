import './index.scss';
import React from 'react';

import About from '../views/about';
import Home from '../views/home';
import Header from '../views/header';
import Recent from '../views/recent';
import Gits from '../views/gits';
import Contact from '../views/contact';

export default class Mainlayout extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Mainlayout extends React.Component: ', props);
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Recent />
        <Gits />
        <Contact />
      </div>
    );
  }
}
