import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <>
        <li>
          <a href={this.props.filmLink}>{this.props.filmName}</a>
        </li>
      </>
    )
  }
}

export default Film;