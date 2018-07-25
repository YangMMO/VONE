import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import './index.css';
import './nav.css';
import './iconfont/iconfont.css';
import { NAV_LISTS, FUNCS, FOLLOW } from '../../data/nav-data';
import { FOOTER_LISTS } from '../../data/footer-data';

import Home from '../home/index';
import Plate from '../plate/index';

import Footer from './footer/index';

export default class App extends Component {

  render() {
    const nav_lists = JSON.parse(NAV_LISTS);
    const funcs = JSON.parse(FUNCS);
    const footer_lists = JSON.parse(FOOTER_LISTS);
    const follow = JSON.parse(FOLLOW);

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
                  <li key={i} className="nav-item-block">
                    <NavLink to={ item.pathname }>{ item.title }</NavLink>
                    <div className="nav-item-container">
                      <ul>
                        { item.lists.map((navItem, i) => {
                          if(navItem.lists) {
                            return(
                              <li key={ i } className="nav-more">
                                <a href={ navItem.pathname }>
                                  { navItem.title }
                                  <i className="nav-more-icon"></i>
                                </a>
                                <div className="nav-item-more-container">
                                  <a href={ navItem.pathname }>
                                    <h1>
                                      <i className="iconfont icon-jiantou"></i>系统概览
                                    </h1>
                                  </a>
                                  <ul>
                                    { navItem.lists.map((listItem, i) => {
                                      return(
                                        <li key={ i }>
                                          <a href={ navItem.pathname }>
                                            <i className={ listItem.icon }></i>
                                            { listItem.title }
                                          </a>
                                        </li>
                                      )
                                    })
                                    }
                                  </ul>
                                </div>
                              </li>
                            )
                          }

                          return(
                            <li key={ i } className="nav-not-more">
                              <a href={ navItem.pathname }>
                                { navItem.title }
                              </a>
                            </li>
                          )
                        })
                      }</ul>
                    </div>
                  </li>
              )}) }
            </ul>

            <ul className="nav-funcs">
              { funcs.map((item, i) => {
                if (item.isfollow) {
                  return(
                    <li key={i}>
                    <i className={ item.icon }></i>
                    { item.title }
                  
                      <ul>
                        { follow.map((item, i) => {
                          return(
                            <li key= {i} funcs="follow">
                              <a href={item.link}>
                                <i className={item.icon}></i>
                                {item.title}
                              </a>
                            </li>
                          )
                        }) }
                        <li funcs="set"><a>设为首页</a></li>
                        <li funcs="set"><a>加入收藏</a></li>
                      </ul>
                  </li>
                  )
                }

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
          <Route path="/product" component={Plate}/>
          <Route path="/program" component={Plate} />
          <Route path="/news" component={Plate} />
          <Route path="/jobs" component={Plate} />
          <Route path="/client" component={Plate} />
          <Route path="/about" component={Plate} />

          <Footer data={ footer_lists }/>
        </div>
      </BrowserRouter>
    )
  }
}
