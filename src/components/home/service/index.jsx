import React, { Component } from 'react';
import './index.css';

export default class Service extends Component {
  render() {
    return(
      // 服务栏目组件
      <div className="page-center service-gird">
        {
          this.props.data.map((data, i) => {
            return (
              <article key={i}>
                <a href={ data.pathname }>
                  <img src={require(`../../../images/${data.image}`)} alt=""/>
                  <h1>{ data.title }</h1>
                  <p>{ data.content }</p>
                  <span>
                    { data.activeText }
                    <i className="iconfont icon-jiantou"></i>  
                  </span>
                </a>
              </article>
            )
          })
        }
      </div>
    )
  }
}