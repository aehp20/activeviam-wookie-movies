import React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Rate } from 'antd'

import { StyledPoster } from '../../common/styles/Poster-Styles'
import {
  StyledMovieContent,
  StyledMovieHeader,
  StyledMovieSubHeader,
  StyledMovieTitle,
  StyledMovieDescriptionLabel,
  StyledMovieRate
} from './Movie-Styles'
import { IMovieProps } from './Movie-Types'
import { getFullYear } from '../../common/functions/date'

export function Movie(props: IMovieProps) {
  const { id: idMovie } = useParams()
  const { findMovie } = props
  const movie = findMovie(idMovie!)

  return !!movie ? (
    <div>
      <Row>
        <Col flex='200px'>
          <StyledPoster
            width='200px'
            height='280px'
            src={movie.poster}
          />
        </Col>
        <StyledMovieContent>
          <StyledMovieHeader>
            <StyledMovieTitle>
              {movie.title} (Rating: {movie.imdb_rating})
            </StyledMovieTitle>
            <StyledMovieRate>
              <Rate allowHalf disabled defaultValue={movie.imdb_rating / 2} />
            </StyledMovieRate>
          </StyledMovieHeader>
          <StyledMovieSubHeader>
            <div>
              {getFullYear(movie.released_on)} | {movie.length} | {movie.director.toString()}
            </div>
            <div>
              Cast: {movie.cast.toString()}
            </div>
          </StyledMovieSubHeader>
          <div>
            <StyledMovieDescriptionLabel>Decription</StyledMovieDescriptionLabel>
            <div>{movie.overview}</div>
          </div>
        </StyledMovieContent>
      </Row>
    </div>
  ) : (
    <div>No movie found</div>
  )
}
