import '../../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { HashRouter as Router, Route, Switch, IndexRoute, hashHistory } from 'react-router-dom';

import Home from '../../views/home';
import Layout from '../../layouts';




ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
);
