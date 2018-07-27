import React, { Component } from 'react';

import './index.css';

export default class Article extends Component {
  render() {
    const data = this.props.data;

    return(
      // 文章组件
      <article className="article-block">
        <h1>{ data.title }</h1>
        <div 
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="article-container">
        </div>
      </article>
    )
  }
}

