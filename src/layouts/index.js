import './index.scss';
import React from 'react';

import About from '../views/about';
import Home from '../views/home';
import Header from '../views/header';

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
      </div>
    );
  }
}
