import { IMovie } from '../movie/Movie-Types'
import { IGenreMovies } from '../../App-Types'

export interface IMoviesProps {
  genresMovies: IGenreMovies[]
  findMovie: (idMovie: string) => IMovie
}
