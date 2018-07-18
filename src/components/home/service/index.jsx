import React, { Component } from 'react';

export default class Service extends Component {
  render() {
    return(
      <div className="page-center">
        {
          this.props.data.map((data, i) => {
            console.log(data)
            return (
              <div>
                {data.title}
                {/* todo */}
              </div>
            )
          })
        }
      </div>
    )
  }
}