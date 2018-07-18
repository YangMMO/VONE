import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Scaffold from 'mmo-adam';

import './index.css';

import Product from '../../product/index';
import history from 'history';

class PlateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftImageWidth: 0,
      rigthImageWidth: 0,
      containerWidth: 0,
      imageLeft: 0
    }
  }

  componentDidMount() {
    let offsetLeft = this.imageBlock.current.offsetLeft;
    let imageClientWidth = this.imageBlock.current.clientWidth;
    let containerClientWidth = this.containerBlock.current.clientWidth;
    let bodyClientWidth = document.body.clientWidth;

    this.setState({
      leftImageWidth: offsetLeft + imageClientWidth,
      rigthImageWidth: bodyClientWidth - offsetLeft,
      containerWidth: containerClientWidth - 8,
      imageLeft: offsetLeft
    })
    
    window.addEventListener('resize', Scaffold.debounce((event) => {
      offsetLeft = this.imageBlock.current.offsetLeft;
      imageClientWidth = this.imageBlock.current.clientWidth;
      containerClientWidth = this.containerBlock.current.clientWidth;
      bodyClientWidth = document.body.clientWidth;

      this.setState({
        leftImageWidth: offsetLeft + imageClientWidth,
        rigthImageWidth: bodyClientWidth - offsetLeft,
        ContainerWidth: containerClientWidth,
        imageLeft: offsetLeft
      })
    }, 0))
  }

  render() {
    let data = this.props.data;
    let itemIndex = this.props.index;
    let state = this.state;

    return(
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
              <img src={require(`../../../images/banner/${data.image}`)}/>
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
    )
  }
}

export default withRouter(PlateItem);