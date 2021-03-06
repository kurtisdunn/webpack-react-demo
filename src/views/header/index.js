import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../components/icon';

const $ = window.$;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  componentDidMount(){
    let lastScrollTop = 0;
    window.addEventListener('scroll', function(){
     var st = window.pageYOffset || document.documentElement.scrollTop;
     if (st > lastScrollTop){
        if(st >= 300){
          $('.fixed-top').addClass('scrolled');
        }
     }
     if(st <= 300){$('.fixed-top').removeClass('scrolled'); }
     lastScrollTop = st <= 0 ? 0 : st;
   }, false);
  setTimeout(() => {
    $('header').addClass('animated fadeInDown');
    $('header').css('display', 'block');
  }, 700);

  }
  scrollTo(e, elem) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(`#${elem}`).offset().top
    }, 700);
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand navbar-light fixed-top" data-toggle="affix">
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
            <a className="navbar-brand" href="/"><Icon /></a>
            <div className="collapse navbar-collapse text-center" style={{float: 'right'}}>
              <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href={''} onClick={(e) => this.scrollTo(e, 'about') }>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={''} onClick={(e) => this.scrollTo(e, 'recent') }>Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href={''} onClick={(e) => this.scrollTo(e, 'contact') }>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
