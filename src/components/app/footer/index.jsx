import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  render() {
    const footer_lists = this.props.data;
    
    return(
      <footer className="footer-block">
        <div className="back-to-top">
          <div className="page-center">
            <i></i>
            <h5>返回顶部</h5>
          </div>
        </div>
        <div className="footer-container">
          <div className="page-center">
            <h5>珠海市泛网科技有限公司</h5>
            <ul className="footer-gird">
                {
                  footer_lists.map((item, i) => {
                    return(
                      <li key={ i } className="footer-gird-item">
                        <h1>
                          <a href={ item.pathname }>{ item.title }</a>
                        </h1>
                        <ul>
                          { item.list.map((link, i) => {
                            return(
                              <li key={ i }>
                                <a href={ link.pathname }>{ link.text }</a>
                              </li>
                            )
                          }) }
                        </ul>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="page-center">
            <a>Copyright © 2014 - 2018 珠海市泛网科技有限公司 VONE 版权所有.</a>
            <a href="http://www.vonechina.com/index.php?r=admini/public/login">Powered by vonechina.com Version 1.0.0</a>
          </div>
        </div>
      </footer>
    )
  }
}
