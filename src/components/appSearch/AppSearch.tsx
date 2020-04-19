import React from 'react'
import { useHistory } from 'react-router-dom'

import { StyledSearch } from './AppSearch-Styles'
import { IAppSearchProps } from './AppSearch-Types'

export function AppSearch(props: IAppSearchProps) {
  const { filterText, setFilterText, searchMovies } = props
  const history = useHistory()

  function handleFilterText(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterText(event.target.value)
  }

  function handleSearch(value: string) {    
    history.push('/')
    setFilterText(value)
    searchMovies(value)
  }

  return (
    <div>
      <StyledSearch
        placeholder="Search a movie"
        onSearch={handleSearch}
        allowClear
        value={filterText}
        onChange={handleFilterText}
      />
    </div>
  )
}
