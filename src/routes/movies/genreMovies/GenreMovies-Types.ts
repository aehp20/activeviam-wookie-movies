import { IGenreMovies } from '../../../App-Types'
import { IMovie } from '../../movie/Movie-Types'

export interface IGenreMoviesProps {
  genreMovies: IGenreMovies
  findMovie: (idMovie: string) => IMovie
}
