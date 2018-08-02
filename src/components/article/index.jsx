import React, { Component } from 'react';
import Scaffold from 'mmo-adam';

import './index.css';

import PlateHeader from '../plate/plate_header/index';


export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      articleData: [],
      showData: [],
      showArticle: 0,
      page: 0,
      curPage: 1,
      showNum: 4,
      imageHeight: 0
    }
  }

  componentWillMount() {
    const newsDate = require(`../../data/article/news-data.js`);
    const articleData = JSON.parse(newsDate.ARTICLEDATA);
    const total = articleData.length;
    const page = Math.ceil(total / this.state.showNum);

    const showData = articleData.slice(0, this.state.showNum)

    this.setState({ 
      data: require(`../../data/plate/news-data.js`),
      articleData: articleData,
      showArticle: articleData[0],
      showData: showData,
      page: page
    })
  }

  componentDidMount() {


    this._resizeChange()

    window.addEventListener('resize', Scaffold.debounce((event) => {
      this._resizeChange()
    }, 0))
  }

  _resizeChange() {
    let imageBlock = this.imageBlock;
    if (!imageBlock.current) {
      return
    }
    
    const width = imageBlock.current.offsetWidth;
    const height = width * 0.66;

    this.setState({
      imageHeight: height
    })

  }

  /**
   * 上一页
   * @memberof ArticleList
   */
  handleonClickPagePrev() {
    const state = this.state;
    const articleData = state.articleData;
    const page = state.page;
    const showNum = state.showNum;
    const curPage = state.curPage;

    if(curPage > 1) {
      const showData = articleData.slice(curPage * showNum - showNum * 2, curPage * showNum - showNum);
      this.setState({ 
        curPage: curPage - 1,
        showData: showData
      })
    }

  }

  /**
   * 下一页
   * @memberof ArticleList
   */
  handleonClickPageNext() {
    const state = this.state;
    const articleData = state.articleData;
    const page = state.page;
    const showNum = state.showNum;
    const curPage = state.curPage;

    if(curPage < page) {
      const showData = articleData.slice(showNum * curPage, showNum * (curPage + 1));
      this.setState({ 
        curPage: curPage + 1,
        showData: showData
      })
    }
  }

  handleShowDate(data) {
    console.log(data)
  }

  render() {
    const state = this.state;
    const data = state.data;
    const show = state.showArticle;
    const showData = state.showData;
    const headerData = JSON.parse(data.HEADER);

    return(
        // 文章页面模板
        <div className="pale_block">
          <PlateHeader data={ headerData }/>
          <div className="article-template">
            <article className="page-center article-template-container item-show-wdith">
              <h1>{show.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: show.content }}></div>
            </article>
            <div className="page-center article-lists">
              <h1>
                <button onClick={this.handleonClickPagePrev.bind(this)}>
                  <i className="iconfont icon-jiantou1"></i>
                </button>
                近期资讯
                <button onClick={this.handleonClickPageNext.bind(this)}>
                  <i className="iconfont icon-jiantou1"></i>
                </button>
              </h1>
              <ul className="clearfix">
                { showData.map((item, i) => {
                  return (
                    <li key={ i }>
                      <a href="">
                        <div 
                          ref={ this.imageBlock = React.createRef()}
                          className={item.image ? '' : 'template1-item-not-show'}
                          style={{
                            backgroundImage: item.image ? `url(${require(`../../images/article/${item.image}`)})` : '',
                            height: state.imageHeight ? state.imageHeight : 0
                          }}></div>
                        <h5>{item.title}</h5>
                        <span>详细内容<i className="iconfont icon-jiantou"></i></span>
                      </a>
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