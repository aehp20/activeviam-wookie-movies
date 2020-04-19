export interface IAppHeaderProps {
  filterText: string
  setFilterText: (filterText: string) => void
  searchMovies: (q: string) => void
}
