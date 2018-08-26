import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../components/icon';

const $ = window.$;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log('componentDidMount');
    setTimeout(() => {
      $('header').addClass('animated fadeInDown');
      $('header').css('display', 'block');
    }, 700);
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light" data-toggle="affix">
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
              <a className="navbar-brand" href="/"><Icon /></a>
              <div className="text-center" id="navbarsExample11">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#work">Work</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
