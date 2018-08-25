import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../icon';
// import Logo from '../../images/bg-logo@2x.png';

const $ = window.$;

function chooseDefaultColor(){
  const hash = window.location.hash;
  const pathname = window.location.pathname;
  // console.log(hash);
  if(hash == '#/'){
    console.log(hash);
    $('.navbar-brand').addClass('logo-sm');
    $('.nav-item').toggleClass('py-sm-2 py-sm-4');
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    const body = document.getElementsByTagName('body')[0];
    const y = window.innerHeight|| window.clientHeight|| body.clientHeight;
    // $(window).scroll(function(){
    //   $('.navbar-brand').toggleClass('logo-sm', $(this).scrollTop() > y / 2);
    //   $('.nav-item').toggleClass('py-sm-2', $(this).scrollTop() > y / 2);
    //   $('.nav-item').toggleClass('py-sm-4 bigger', $(this).scrollTop() < y / 2);
    //   $('.fixed-top').toggleClass('scrolled', $(this).scrollTop() > y / 2);
    // });
  }

  render() {
    // chooseDefaultColor();
    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-dark scrolled">
        <div className="container">
        <a className="navbar-brand animated" href="#">
          <img src={ 'https://d2m4mr1mh7r6fk.cloudfront.net/bg-logo@2x.png' } alt="Kurt D Photography" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link" exact={true} to="/" >Home</NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link" to="/about">Portfolio</NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <span className="navbar-text" style={{fontSize:'6px', color:'rgba(139, 140, 141, 1.000)' }}>
                <Icon type="circle" />
              </span>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link nav-icon" to="">
                <Icon type="facebook" />
              </NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link nav-icon" to="">
                <Icon type="instagram" />
              </NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link nav-icon" to="/shop/cart">
                <Icon type="shopping-cxcxcart"  />
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}
