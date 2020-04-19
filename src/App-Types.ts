import { IMovie } from './routes/movie/Movie-Types'

export interface IGenreMovies {
  name: string
  idMovies: string[]
}

export interface IMovies {
  movies: IMovie[]
}
