import React from 'react'

import { IMoviesProps } from './Movies-Types'
import { GenreMovies } from './genreMovies'

export function Movies(props: IMoviesProps) {
  const { genresMovies, findMovie } = props

  return (
    <div>
      {
        genresMovies.length ? (
          genresMovies.map((genreMovies, index) => (
            <GenreMovies key={index} genreMovies={genreMovies} findMovie={findMovie} />
          ))
        ) : (
          <div>No movies found</div>
        )
      }
    </div>
  )
}
