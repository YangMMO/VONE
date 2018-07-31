import React, { Component } from 'react';

import './index.css';

export default class Template1 extends Component {
  render() {
    const data = this.props.data;

    return(
      // 列表模板1
      <main className="show-lists-block">
        { data.length === 0 ? <h5>内容完善中...</h5> : ''}
        <ul>
          { data.map((item, i) => {
            return(
              <li key={i} className="template1-item-block">
                <a href="">
                  <div className="template1-item-container">
                    <h1>{ item.title }</h1>
                    <div className="template1-item-description clearfix">
                      <div 
                        className={item.image ? '' : 'template1-item-not-show'}
                        style={{ 
                          backgroundImage: item.image ? `url(${require(`../../../images/article/${item.image}`)})` : ''
                        }}></div>
                      <span>{ item.description }</span>
                      <div className="template1-item-detail">
                        <i>详细内容</i>
                        <i className="iconfont icon-jiantou"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}
