import React, { Component } from 'react';

import './index.css';

import PlateHeader from '../plate/plate_header/index';


export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      articleData: [],
      showDate: [],
      showArticle: 0,
      page: 0,
      cur: 0,
      showNum: 4
    }
  }

  componentWillMount() {
    const newsDate = require(`../../data/article/news-data.js`);
    const articleData = JSON.parse(newsDate.ARTICLEDATA);
    const total = articleData.length;
    const page = Math.ceil(total / this.state.showNum);

    const showDate = articleData.slice(0, this.state.showNum)

    this.setState({ 
      data: require(`../../data/plate/news-data.js`),
      articleData: articleData,
      showArticle: articleData[0],
      shiowData: showDate,
      page: page
    })
  }

  render() {
    const state = this.state;
    const data = state.data;
    const show = state.showArticle;
    const shiowData = state.shiowData;
    const headerData = JSON.parse(data.HEADER);


    return(
        // 文章页面模板
        <div>
          <PlateHeader data={ headerData }/>
          <div className="article-template">
            <article className="page-center article-template-container">
              <h1>{show.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: show.content }}></div>
            </article>
            <div className="page-center article-lists">
              <h1>
                <button><i className="iconfont icon-jiantou1"></i></button>
                近期资讯
                <button><i className="iconfont icon-jiantou1"></i></button>
              </h1>
              <ul className="clearfix">
                { shiowData.map((item, i) => {
                  return (
                    <li key={ i }>
                      <article>
                        <div 
                          className={item.image ? '' : 'template1-item-not-show'}
                          style={{
                            backgroundImage: item.image ? `url(${require(`../../images/article/${item.image}`)})` : ''
                          }}></div>
                        <h5>{item.title}</h5>
                        <span>详细内容<i className="iconfont icon-jiantou"></i></span>
                      </article>
                    </li>
                  )
                }) }
              </ul>
            </div>
          </div>
        </div>

    )
  }
}