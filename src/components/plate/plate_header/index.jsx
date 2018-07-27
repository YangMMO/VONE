import React, { Component } from 'react';
import Scaffold from 'mmo-adam';

import './index.css';

export default class PlateHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rigthImageWidth: 0,
    }
  }

  // 初始化
  componentDidMount() {
    const offsetLeft = this.imageBlock.current.offsetLeft;
    const bodyClientWidth = document.body.clientWidth;

    this.setState({
      rigthImageWidth: bodyClientWidth - offsetLeft,
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
  // _resizeChange() {
  //   const img = this.imageBlock;
  //   const bodyClientWidth = document.body.clientWidth;
  //   let offsetLeft;

  //   if(!img) {
  //     return
  //   }

  //   offsetLeft = img.img.offsetLeft.current;

  //   this.setState({
  //     rigthImageWidth: bodyClientWidth - offsetLeft,
  //   })
  // }
  

  render() {
    const data = this.props.data;
    const state = this.state;

    return(
      <div style={{backgroundColor: `${data.color}`}}>
        <div className="page-center item-grid">
          <div className="item-container-block">
              <div className="container-block">
                { data.header.icon ? <i className={`container-icon ${data.header.icon}`}></i> : '' }
                { data.header.title ? <h1>{data.header.title}</h1> : '' }
                <article>
                  <h2>{ data.title }</h2>
                  <p>{ data.content }</p>
                </article>
              </div>
          </div>

          <div 
            className="item-image-block"
            ref={this.imageBlock = React.createRef()}>
            <div 
              style={{
                right: 0,
                width: state.rigthImageWidth
              }}
              className="image-block">
              <img src={require(`../../../images/plate/${data.image}`)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}