import React from 'react'

import { IGenreMoviesProps } from './GenreMovies-Types'
import { StyledGenreMovies, StyledName } from './GenreMovies-Styles'
import { GenreMoviesPosters } from './genreMoviesPosters'

export function GenreMovies(props: IGenreMoviesProps) {
  const { genreMovies, findMovie} = props

  return (
    <StyledGenreMovies>
      <StyledName>{genreMovies.name}</StyledName>
      <GenreMoviesPosters idMovies={genreMovies.idMovies} findMovie={findMovie} />
    </StyledGenreMovies>
  )
}
