import { IMovie } from '../../../movie/Movie-Types'

export interface IGenreMoviesPostersProps {
  idMovies: string[]
  findMovie: (idMovie: string) => IMovie
}
