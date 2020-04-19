import React from 'react'
import { Link } from 'react-router-dom'

import { IGenreMoviesPostersProps } from './GenreMoviesPosters-Types'
import { StyledScrollingWrapper } from './GenreMoviesPosters-Styles'
import { StyledPoster } from '../../../../common/styles/Poster-Styles'

export function GenreMoviesPosters(props: IGenreMoviesPostersProps) {
  const { idMovies, findMovie } = props

  return(
    <StyledScrollingWrapper>
      {
        idMovies.map((idMovie, index) => {
          const movie = findMovie(idMovie)

          return !!movie ? (
            <Link to={`/movies/${idMovie}`} key={index}>
              <StyledPoster src={movie.poster} />
            </Link>
          ) : (
            <div>No movie found</div>
          )
        })
      }
    </StyledScrollingWrapper>
  )
}
