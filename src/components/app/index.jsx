import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import './index.css';
import './nav.css';
import './iconfont/iconfont.css';
import { NAV_LISTS, FUNCS } from '../../data/nav-data';

import Home from '../home/index';
import Product from '../product/index';
import Program from '../program/index';
import News from '../news/index';
import Jobs from '../jobs/index';
import Client from '../client/index';
import About from '../about/index';

export default class App extends Component {
  render() {
    let nav_lists = JSON.parse(NAV_LISTS);
    let funcs = JSON.parse(FUNCS);

    return(
      <BrowserRouter>
        <div>
          <nav className="nav-block page-center">
            <NavLink to="/">
              <div className="nav-logo">
                <img src={require('../../images/LOGO.png')} alt="index"/>
              </div>
            </NavLink>
            <ul className="nav-lists">
              { nav_lists.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink to={ item.pathname }>{ item.title }</NavLink>
                  </li>
                )
              }) }
            </ul>
            <ul className="nav-funcs">
              { funcs.map((item, i) => {
                return (
                  <li key={i}>
                    <i className={ item.icon }></i>
                    { item.title }
                  </li>
                )
              }) }
            </ul>
          </nav> 
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/program" component={Program} />
          <Route path="/news" component={News} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/client" component={Client} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}
