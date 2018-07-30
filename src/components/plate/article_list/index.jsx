import React, { Component } from 'react';

import './index.css';

import Template1 from '../template/template1';
// import Template2 from '../template/template2';

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
  
  handleonChangePage(event) {
    const value = event.target.value;
    if(!isNaN(value) && value !== ' ') {
      this.setState({ pageVal: value });
    }
  }

  handleonClickPagePrev() {
    const curPage = this.state.curPage;
    if(curPage > 1) {
      this.setState({ curPage: curPage - 1 })
    }
  }

  handleonClickPageNext() {
    const page = this.state.page;
    const curPage = this.state.curPage;
    if(curPage < page) {
      this.setState({ curPage: curPage + 1 })
    }
  }

  handleSwitchCase(template) {
    const dataList = this.props.data.lists;
    const state = this.state
    const show = state.showNum * state.curPage;
    const offset = show - state.showNum;
    let showData;

    showData = dataList.slice(offset, show)

    switch(template) {
      case 1:
        return <Template1 data={ showData }/>
      case 2:
        return <div>456</div>
    }
  }


  render() {
    const data = this.props.data;
    const state = this.state;

    return(
      // 文章列表组件
      <div className="article-list-block">
        {/* // 页数 */}
        <div className="article-list-page-block clearfix">
          <button onClick={ this.handleonClickPagePrev.bind(this) }>
            <i className="iconfont icon-jiantou1"></i>
          </button>
          <input 
            type="text" 
            onChange={this.handleonChangePage.bind(this)} 
            value={state.pageVal}
            placeholder={ state.page ? `${state.curPage}/${state.page}` : '0/0' }/>
          <button onClick={ this.handleonClickPageNext.bind(this) }>
            <i className="iconfont icon-jiantou1"></i>
          </button>
        </div>

        {/* 内容列表 */}
        { this.handleSwitchCase(data.template) }


        {/* // 页数 */}
        <div className="article-list-page-block clearfix">
          <button onClick={ this.handleonClickPagePrev.bind(this) }>
            <i className="iconfont icon-jiantou1"></i>
          </button>
          <input 
            type="text" 
            onChange={this.handleonChangePage.bind(this)} 
            value={state.pageVal}
            placeholder={ state.page ? `${state.curPage}/${state.page}` : '0/0' }/>
          <button onClick={ this.handleonClickPageNext.bind(this) }>
            <i className="iconfont icon-jiantou1"></i>
          </button>
        </div>
      </div>
    )
  }
}

