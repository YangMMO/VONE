import React, { Component } from 'react';
import './index.css';

import { HOME_DATA, HOME_SERVICE } from '../../data/home-data';

import PlateItem from './plate_item/index';
import Service from './service/index';

export default class Home extends Component {
  render() {
    let home_data = JSON.parse(HOME_DATA);
    let home_service = JSON.parse(HOME_SERVICE);

    return(
      <div>
        { home_data.map((data, i) => {
          switch(i) {
            case 0: 
              return (
                <div key={ i } className="item-block">
                  <PlateItem data={ data } index={ i }/>
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
      </div>
    )
  }
} 