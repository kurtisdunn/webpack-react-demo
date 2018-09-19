import './index.scss';
import React from 'react';

import About from '../views/about';
import Contact from '../views/contact';
import Footer from '../views/footer';
import Gits from '../views/gits';
import Header from '../views/header';
import Home from '../views/home';
import Recent from '../views/recent';

export default class Mainlayout extends React.Component {
  constructor(props) {
    super(props);
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
        <Footer />
      </div>
    );
  }
}
