import React, { Component } from 'react';
import Film from './Film'

class FilmList extends Component {
  render() {
    const filmsArray = this.props.filmsList.map(film => {
      return (
        <Film filmName={film.name} filmLink={film.url} />
      )
    })
    return (
      <>
        {filmsArray}
      </>
    )
  }
}

export default FilmList;