import React, { Component } from 'react';
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";

import './index.css';

import PlateHeader from './plate_header/index';
import Article from './article/index';


export default class Plate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      mark: ''
    }
  }

  componentWillMount() {
    const path = this.props.match.path.substring(1);
    this.setState({ 
      data: require(`../../data/plate/${path}-data.js`)
    })
  }

  handleChangeCase(mark) {
    if(mark) {
      this.setState({
        mark: mark
      })

    }
  }

  handleSwitchCase(mark) {
    if(!mark) {
      return
    }

    const sorts = JSON.parse(this.state.data.SORTS);

    sorts.forEach(sort => {
      sort.lists.forEach(item => {
          if(item.mark === mark) {
            switch(item.type) {
              case 'article':
                console.log('article')

                break;
              case 'lists':
                console.log('lists')

                break;
            }
        }
      })
    })


  }


  render() {
    const state = this.state;
    const data = this.state.data;
    const headerData = JSON.parse(data.HEADER);
    const sorts = JSON.parse(data.SORTS);

    return(

        <div>
          <PlateHeader data={ headerData }/>
          <main className="page-center main-gird">
            <section className="section-container">
              {sorts.map((data, i) => {
                return (
                  <div className="sort-container" key={ i }>
                    { data.sortTitle ? <h1>{ data.sortTitle }</h1> : ''}
                    <ul>
                      { data.lists.map((item, i) => {
                        return(
                          <li key={ i }>
                            {/* <Link to={ item.path }> */}
                            <a onClick={this.handleChangeCase.bind(this, item.mark)}>
                              <i className={ item.icon }></i>
                              { item.title }
                            </a>
                            {/* </Link> */}
                          </li>
                        )
                      }) }
                    </ul>
                  </div>
                )
              })}
            </section>
            <div className="article-block">
              { this.handleSwitchCase(state.mark) }
            </div>
          </main>
        </div>

    )
  }
}