import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import './index.css';
import './nav.css';
import './footer.css';
import './iconfont/iconfont.css';
import { NAV_LISTS, FUNCS } from '../../data/nav-data';
import { FOOTER_LISTS } from '../../data/footer-data';

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
    let footer_lists = JSON.parse(FOOTER_LISTS);

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

          <footer className="footer-block">
            <div className="back-to-top">
              <div className="page-center">
                <i></i>
                <h5>返回顶部</h5>
              </div>
            </div>
            <div className="footer-container">
              <div className="page-center">
                <h5>XXXXX科技有限公司</h5>
                <ul className="footer-gird">
                    {
                      footer_lists.map((item, i) => {
                        return(
                          <li key={ i } className="footer-gird-item">
                            <h1>
                              <a href={ item.pathname }>{ item.title }</a>
                            </h1>
                            <ul>
                              {
                                item.list.map((link, i) => {
                                  return(
                                    <li key={ i }>
                                      <a href={ link.pathname }>{ link.text }</a>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </li>
                        )
                      })
                    }
                </ul>
              </div>
            </div>
            <div className="copyright">
              <div className="page-center">
                <a>Copyright © 2014 - 2018 XXXXX科技有限公司 XXXX 版权所有.</a>
                <a href="http://www.vonechina.com/index.php?r=admini/public/login">Powered by XXXXXXXXX.com Version 1.0.0</a>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}
