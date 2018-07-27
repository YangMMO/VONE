import React, { Component } from 'react';
import './index.css';

import { HOME_DATA, HOME_SERVICE } from '../../data/home-data';
import { FOLLOW } from '../../data/nav-data';


import PlateItem from './plate_item/index';
import Service from './service/index';
import Advisory from './advisory/index';

export default class Home extends Component {
  render() {
    const home_data = JSON.parse(HOME_DATA);
    const home_service = JSON.parse(HOME_SERVICE);
    const home_follow = JSON.parse(FOLLOW);

    return(
      <div>
        {/* 自定义首页栏目顺序及组件添加 */}
        { home_data.map((data, i) => {
          switch(i) {
            case 0: 
              return (
                <div key={ i } className="item-block">
                  <PlateItem data={ data } index={ i }/>
                  {/* 新组件栏目 */}
                  <Service data={ home_service } />
                </div>
              )
            default:
              return (
                <div key={ i } className="item-block">
                  <PlateItem data={ data } key={ i } index={ i }/>
                </div>
              )
          }
        }) }
        {/* 咨询组件 */}
        <Advisory data={home_follow}/>
      </div>
    )
  }
} 