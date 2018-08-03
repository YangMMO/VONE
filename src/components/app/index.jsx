import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Scaffold from 'mmo-adam';

import './index.css';
import './nav.css';
import './iconfont/iconfont.css';
import { NAV_LISTS, FUNCS, FOLLOW } from '../../data/nav-data';
import { FOOTER_LISTS } from '../../data/footer-data';

import Home from '../home/index';
import Plate from '../plate/index';
import Article from '../article/index';

import Footer from './footer/index';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      width: 0
    }
  }

  componentWillMount() {
    this.setState({ width: document.body.clientWidth });
    window.addEventListener('resize', Scaffold.debounce((event) => {
      this.setState({ width: document.body.clientWidth });
    }, 0))
  }

  handleActiveNav () {
    if (this.state.width > 980) {
      return
    }
    this.setState({ active: !this.state.active })
  }

  render() {
    const nav_lists = JSON.parse(NAV_LISTS);
    const funcs = JSON.parse(FUNCS);
    const footer_lists = JSON.parse(FOOTER_LISTS);
    const follow = JSON.parse(FOLLOW);

    return(
      <BrowserRouter>
        <div>
          {/* {nav 导航列表} */}
          <nav className="nav-block page-center" id="nav">
            {this.state.active ? <h1>菜单</h1> : ''}
            <i className="iconfont icon-caidan" onClick={this.handleActiveNav.bind(this)}></i>
            {/* {logo} */}
            <NavLink to="/" style={{ display: this.state.active ? 'none' : 'block'}}>
              <div className="nav-logo">
                <img src={require('../../images/LOGO.png')} alt="index"/>
              </div>
            </NavLink>
            {/* 一级菜单 */}
            <div className={this.state.active ? 'active-block' : ''} >
              <ul className={`nav-lists  ${this.state.active ? 'active-nav' : ''}`}>
                { nav_lists.map((item, i) => {
                  return (
                    <li key={i} className="nav-item-block">
                      <NavLink to={ item.pathname } onClick={this.handleActiveNav.bind(this)}>{ item.title }</NavLink>
                      <div className="nav-item-container">
                        {/* 二级菜单 */}
                        <ul>
                          { item.lists.map((navItem, i) => {
                            // 三级菜单判断
                            if(navItem.lists) {
                              // 三级菜单有列表
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
                                    {/* 三级菜单 */}
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

                            // 三级菜单无列表
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
           
            {/* 功能菜单 */}
            <ul className={ `nav-funcs ${this.state.active ? 'active-nav' : ''}` }>
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
            </div>
          </nav> 
          <Route exact path="/" component={Home}/>
          <Route path="/product" component={Plate}/>
          <Route path="/program" component={Plate} />
          <Route path="/news" component={Plate} />
          <Route path="/jobs" component={Plate} />
          <Route path="/client" component={Plate} />
          <Route path="/about" component={Plate} />

          <NavLink to="/article"></NavLink>
          <Route path="/article" component={Article} />

          <Footer data={ footer_lists }/>
        </div>
      </BrowserRouter>
    )
  }
}
