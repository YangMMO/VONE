import React, { Component } from 'react';

import './index.css';

import PlateHeader from './plate_header/index';
import Article from './article/index';
import ArticleList from './article_list/index';


export default class Plate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      mark: ''
    }
  }

  componentWillMount() {
    const path = this.props.match.path.substring(1);
    this.setState({ 
      data: require(`../../data/plate/${path}-data.js`),

    })
  }

  /**
   * handeleChangeCase 选中类目设置mark
   * @param {String} mark
   * @memberof Plate
   */
  handleChangeCase(mark) {
    if(mark) {
      this.setState({
        mark: mark
      })
    }
  }

  /**
   * handleSwitchCase 读取选中类目数据类型返回相应类型模块
   * @param {String} mark
   * @returns Component: Article ArticleList
   * @memberof Plate
   */
  handleSwitchCase(mark) {
    const pathname = window.location.pathname;
    const sorts = JSON.parse(this.state.data.SORTS);
    let index = '';
    let curIndex = '';

    if (sorts.length > 1) {
      index = sorts[0].lists[0]
    }

    sorts.forEach(sort => {
      sorts.length > 1 ? index = sorts[0].lists[0] : index = sort.lists[0]
      sort.lists.forEach(item => {
          if(item.mark === mark) {
            curIndex = item;
        }
      })
    })


    if(!this.state.mark) {
      const data = this.handlePullArticle(index.type, pathname, index);
      switch(index.type) {
        case 'article':
          return <Article data={ data } />;
        case 'lists':
          return <ArticleList data={ data } />;
      }
      return
    }

    const data = this.handlePullArticle(curIndex.type, pathname, curIndex);
    
    switch(curIndex.type) {
      case 'article':
        return <Article data={ data } />;
      case 'lists':
        return <ArticleList data={ data } />;
    }
  }

  /**
   * handlePullArticle 拉取文章数据
   * @param {String} pathname
   * @param {Object} cur
   * @returns {Object}
   * @memberof Plate
   */
  handlePullArticle(type, pathname, cur) {
    let ret =  {};
    let data;

    switch(type) {
      case 'article':
        const ARTICLE = require(`../../data/article${pathname}-data.js`).ARTICLE;
        const article = JSON.parse(ARTICLE);
        data = article;
        break;
      case 'lists':
        const ARTICLELIST = require(`../../data/article${pathname}-data.js`).ARTICLELIST;
        const articleList = JSON.parse(ARTICLELIST);
        data = articleList
        break;
    }

    data.forEach(item => {
      if(item.mark === cur.mark) {
        ret = item
      }
    })
    return ret
  }

  render() {
    const state = this.state;
    const data = state.data;
    const headerData = JSON.parse(data.HEADER);
    const sorts = JSON.parse(data.SORTS);

    return(
        // 板块页面模板
        <div>
          <PlateHeader data={ headerData }/>
          <main className="page-center main-gird">
            <section className="section-container">
              {sorts.map((data, i) => {
                switch(data.template) {
                  case 1:
                    return (
                      <div className="sort-container" key={ i } data-template="1">
                        { data.sortTitle ? <h1>{ data.sortTitle }</h1> : ''}
                        <ul>
                          { data.lists.map((item, i) => {
                            return(
                              <li key={ i }>
                                <a onClick={this.handleChangeCase.bind(this, item.mark)}>
                                  <i className={ item.icon }></i>
                                  { item.title }
                                </a>
                              </li>
                            )
                          }) }
                        </ul>
                      </div>
                    )
                  case 2:
                    return (
                      <div className="sort-container" key={ i } data-template="2">
                      { data.sortTitle ? <h1>{ data.sortTitle }</h1> : ''}
                      <ul>
                        { data.lists.map((item, i) => {
                          return(
                            <li key={ i }>
                              <a onClick={this.handleChangeCase.bind(this, item.mark)}>
                                { item.title }
                              </a>
                            </li>
                          )
                        }) }
                      </ul>
                    </div>
                    )
                }
              })}
            </section>

            { this.handleSwitchCase(state.mark) }

          </main>
        </div>

    )
  }
}