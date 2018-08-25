import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icon';

const $ = window.$;


export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    // chooseDefaultColor();
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className={'container'}>
            <a className="navbar-brand" href="#">The CV</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
