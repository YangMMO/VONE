import React, { Component } from 'react';

import './index.css';

export default class Template2 extends Component {
  render() {
    const data = this.props.data;
    const typeName = this.props.typeName;

    return(
      // 列表模板2
      <main className="show-lists-block">
        { data.length === 0 ? <h5>内容完善中...</h5> : ''}
        <table className="template2-table-block">
          <thead>
            <tr>
              <th>职位名称</th>
              <th>职位类别</th>
              <th>人数</th>
              <th>发布时间</th>
            </tr>
          </thead>
          <tbody>
            { data.map((item, i) => {
              return(
                <tr key={i}>
                  <td>
                    { typeName !== '' ? `[${typeName}]` : '' }&nbsp;
                    <a href="">
                      { item.job }
                    </a>
                  </td>
                  <td>{ item.class }</td>
                  <td>{ item.num }</td>
                  <td>{ new Date(item.date).toLocaleDateString() }</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    )
  }
}
