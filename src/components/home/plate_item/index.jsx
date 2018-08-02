import React, { Component } from 'react';
import Scaffold from 'mmo-adam';

import './index.css';

export default class PlateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftImageWidth: 0,
      rigthImageWidth: 0,
      containerWidth: 0,
      imageLeft: 0,
      bodyClientWidth: 0
    }
  }

  // 初始化
  componentDidMount() {
    const img = this.imageBlock.current;
    const cont = this.containerBlock.current;

    const offsetLeft = img.offsetLeft;
    const imageClientWidth = img.clientWidth;
    const containerClientWidth = cont.clientWidth;
    const bodyClientWidth = document.body.clientWidth;

    this.setState({
      leftImageWidth: bodyClientWidth > 980 ? offsetLeft + imageClientWidth : '100%',
      rigthImageWidth: bodyClientWidth > 980 ? bodyClientWidth - offsetLeft : '100%',
      containerWidth: containerClientWidth - 8,
      imageLeft: bodyClientWidth > 980 ? offsetLeft : 0,
      bodyClientWidth: bodyClientWidth
    })

    window.addEventListener('resize', Scaffold.debounce((event) => {
      this._resizeChange()
    }, 0))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {})
  }

  /**
   * _resizeChange 图片位置大小函数，并设置state
   * @memberof PlateHeader
   */
  _resizeChange() {
    const img = this.imageBlock.current;
    const cont = this.containerBlock.current;

    if(!img & !cont) {
      return;
    }

    const offsetLeft = img.offsetLeft;
    const imageClientWidth = img.clientWidth;
    const containerClientWidth = cont.clientWidth;
    const bodyClientWidth = document.body.clientWidth;

    this.setState({
      leftImageWidth: bodyClientWidth > 980 ? offsetLeft + imageClientWidth : '100%',
      rigthImageWidth: bodyClientWidth > 980 ? bodyClientWidth - offsetLeft : '100%',
      ContainerWidth: containerClientWidth,
      imageLeft: bodyClientWidth > 980 ? offsetLeft : 0,
      bodyClientWidth: bodyClientWidth
    })
  }

  render() {
    const data = this.props.data;
    const itemIndex = this.props.index;
    const state = this.state;

    return(
      <a href={ data.pathname } className="item-link">
        <div style={{backgroundColor: `${data.color}`}}>
          <div className="page-center item-grid">
            <div 
              className="item-image-block"
              ref={this.imageBlock = React.createRef()}>
              <div 
                style={{
                  width: itemIndex % 2 ? state.rigthImageWidth : state.leftImageWidth,
                  left: itemIndex % 2 ? 0 : -state.imageLeft
                }}
                className="image-block">
                <img src={require(`../../../images/banner/${data.image}`)} />
              </div>
            </div>
            
            <div 
              className="item-container-block"
              ref={this.containerBlock = React.createRef()}>
                <div className="container-block">
                  { data.header.icon ? <i className={`container-icon ${data.header.icon}`}></i> : '' }
                  { data.header.title ? <h1>{data.header.title}</h1> : '' }
                  <article>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                    <span>了解详情<i className="iconfont icon-jiantou"></i></span>
                  </article>
                </div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}