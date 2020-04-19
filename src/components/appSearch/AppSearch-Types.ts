export interface IAppSearchProps {
  filterText: string
  setFilterText: (filterText: string) => void
  searchMovies: (q: string) => void
}
