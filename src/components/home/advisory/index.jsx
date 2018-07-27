import React, { Component } from 'react';
import './index.css';

export default class Advisory extends Component {
  render() {
    const data = this.props.data;

    return(
      // 咨询组件
      <div className="page-center advisory-block clearfix">
        <h1>体验咨询</h1>
        <div className="advisoty-container">
          <ul>
            <li>
              <div>
                <h5>你的名字</h5>
                <input type="text"/>
              </div>
            </li>
            <li>
              <div>
                <h5>电子邮箱地址</h5>
                <input type="text"/>
              </div>
            </li>
            <li>
              <div>
                <h5>电话号码</h5>
                <input type="text"/>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <h5>你的公司</h5>
                <input type="text"/>
              </div>
            </li>
            <li>
              <div>
                <h5>你的需求</h5>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </li>
          </ul>
        </div>
        <div className="follow chearfix">
          <h5>关注我们：</h5>
          <ul>
            {
              data.map((item, i) => {
                return (
                  <li key={ i }>
                    <a>
                      <span>
                        <i className={item.icon}></i>
                        { item.title }
                      </span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <button>
            提交
          </button>
        </div>
      </div>
    )
  }
}