import React, { Component } from 'react';

import './index.css';

import Template1 from '../template/template1';
import Template2 from '../template/template2';

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: '',
      showNum: 5,
      page: 0,
      curPage: 0,
      pageVal: ''
    }
  }

  componentWillMount() {
    this._countPage()
  }

  componentDidUpdate() {
    if (this.props.data.mark === this.state.mark) {
      return
    }

    this._countPage()
  }

  /**
   * 初始化列表页数
   * @memberof ArticleList
   */
  _countPage() {
    const data = this.props.data;
    const total = data.lists.length;
    const page = Math.ceil(total / this.state.showNum);

    this.setState({
      mark: data.mark,
      page: page,
      curPage: 1
    })
  }
  
  /**
   * 页数输入框change
   * @param {Object} event
   * @memberof ArticleList
   */
  handleonChangePage(event) {
    const value = event.target.value;
    if(!isNaN(value) && value !== '' && value !== '0') {
      this.setState({ pageVal: value !== '0' ? value : '1'});
    }
  }

  /**
   * 回车事件
   * @param {Object} event
   * @memberof ArticleList
   */
  handleonKeyUpPage(event) {
    const keyCode = event.keyCode;

    if (keyCode === 13 &&
        this.state.pageVal !== '' &&
        this.state.pageVal < this.state.page) {
      this.setState({ 
        curPage: this.state.pageVal,
        pageVal: ''
      })
    } else if (this.state.pageVal > this.state.page) {
      this.setState({ pageVal: this.state.page})
    }
  }

  /**
   * 输入框失去焦点
   * @memberof ArticleList
   */
  handleonBlurPage() {
    if (this.state.pageVal !== '' &&
        this.state.pageVal < this.state.page) {
      this.setState({ curPage: this.state.pageVal})
    }
    this.setState({ pageVal: ''})
  }

  /**
   * 上一页
   * @memberof ArticleList
   */
  handleonClickPagePrev() {
    const curPage = this.state.curPage;
    if(curPage > 1) {
      this.setState({ curPage: curPage - 1 })
    }
  }

  /**
   * 下一页
   * @memberof ArticleList
   */
  handleonClickPageNext() {
    const page = this.state.page;
    const curPage = this.state.curPage;
    if(curPage < page) {
      this.setState({ curPage: curPage + 1 })
    }
  }

  /**
   * 返回模板
   * @param {Number|String} template
   * @returns Template
   * @memberof ArticleList
   */
  handleSwitchCase(template) {
    const data = this.props.data;
    const dataList = data.lists;
    const state = this.state
    const show = state.showNum * state.curPage;
    const offset = show - state.showNum;
    let showData;

    switch(template) {
      case 1:
        showData = dataList.slice(offset, show)
        return <Template1 data={ showData }/>
      case 2:
        showData = dataList.slice(offset, 8)
        return <Template2 data={ showData } typeName={ data.title }/>
    }
  }


  render() {
    const data = this.props.data;
    const state = this.state;

    return(
      // 文章列表组件
      <div className="article-list-block" id="page-block">
        {/* // 页数 */}
        <div className="article-list-page-block clearfix">
          <a href="#page-block">
            <button onClick={ this.handleonClickPagePrev.bind(this) }>
              <i className="iconfont icon-jiantou1"></i>
            </button>
          </a>
          <input 
            type="text"
            onChange={this.handleonChangePage.bind(this)}
            onKeyUp={this.handleonKeyUpPage.bind(this)}
            onBlur={this.handleonBlurPage.bind(this)}
            value={state.pageVal}
            placeholder={ state.page ? `${state.curPage}/${state.page}` : '0/0' }/>
          <a href="#page-block">
            <button onClick={ this.handleonClickPageNext.bind(this) }>
              <i className="iconfont icon-jiantou1"></i>
            </button>
          </a>
        </div>

        {/* 内容列表 */}
        { this.handleSwitchCase(data.template) }


        {/* // 页数 */}
        <div className="article-list-page-block clearfix">
          <a href="#page-block">
            <button onClick={ this.handleonClickPagePrev.bind(this) }>
              <i className="iconfont icon-jiantou1"></i>
            </button>
          </a>
          <input 
            type="text"
            onChange={this.handleonChangePage.bind(this)}
            onKeyUp={this.handleonKeyUpPage.bind(this)}
            onBlur={this.handleonBlurPage.bind(this)}
            value={state.pageVal}
            placeholder={ state.page ? `${state.curPage}/${state.page}` : '0/0' }/>
          <a href="#page-block">
            <button onClick={ this.handleonClickPageNext.bind(this) } href="">
              <i className="iconfont icon-jiantou1"></i>
            </button>
          </a>
        </div>
      </div>
    )
  }
}

