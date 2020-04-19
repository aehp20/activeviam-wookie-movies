import { useState, useEffect } from 'react'
import Tree from 'splaytree'

import api from './common/services/api'
import { API_MOVIES_URL } from './App-Constants'
import { HTTP_REQUEST_OK } from './common/constants/http-codes'
import { IMovies, IGenreMovies } from './App-Types'
import { IMovie } from './routes/movie/Movie-Types'

export function useAppController() {
  const [filterText, setFilterText] = useState('')
  const [moviesTree, setMoviesTree] = useState<Tree<string, IMovie>>(new Tree())
  const [genresMovies, setGenresMovies] = useState<IGenreMovies[]>([])

  function searchMovies(q: string) {
    api
      .get(`${API_MOVIES_URL}?q=${q}`)
      .then((response) => {
        if (response.status === HTTP_REQUEST_OK) {
          handleMovies(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleMovies(data: IMovies) {
    const { movies } = data
    const moviesTree = new Tree<string, IMovie>()
    const genresMovies: IGenreMovies[] = []

    const addGenreMovies = (item: IGenreMovies) => {
      genresMovies.push(item)
    }

    const findGenreMovies = (name: string) => {
      return genresMovies.find((genreMovies) => genreMovies.name === name)
    }

    movies.forEach((movie) => {
      const { genres } = movie

      genres.forEach((genre) => {
        const genreMovies = findGenreMovies(genre)

        if (genreMovies) {
          genreMovies.idMovies = [...genreMovies.idMovies, movie.id]
        } else {
          addGenreMovies(
            {
              name: genre,
              idMovies: [movie.id]
            }
          )
        }
      })

      return moviesTree.add(movie.id, movie)
    })

    setMoviesTree(moviesTree)
    setGenresMovies(genresMovies)
  }

  function findMovie(idMovie: string): IMovie {    
    const node = moviesTree.find(idMovie)
    return node?.data
  }

  useEffect(() => {
    searchMovies('')
    // eslint-disable-next-line
  }, [])

  return {
    filterText,
    setFilterText,
    searchMovies,
    genresMovies,
    findMovie
  }
}
