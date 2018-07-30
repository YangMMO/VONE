import React, { Component } from 'react';

import './index.css';

export default class Template1 extends Component {
  render() {
    const data = this.props.data;

    return(
      <main>
        <ul>
          { data.map((item, i) => {
            return(
              <li key={i} className="news-item-block">
                <a href="">
                  <div className="news-img-container">
                    <img src="" alt=""/>
                  </div>
                  <div className="news-msg-container">
                    <h1>{ item.title }</h1>
                    <span>{ item.description }</span>
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
