import React from 'react'
import { Layout, Row } from 'antd'

import { AppTitle } from '../appTitle'
import { AppSearch } from '../appSearch'
import { StyledColLeft, StyledColRight } from './AppHeader-Styles'
import { IAppHeaderProps } from './AppHeader-Types'

export function AppHeader(props: IAppHeaderProps) {
  const { Header } = Layout
  const { filterText, setFilterText, searchMovies} = props

  return (
    <Header>
      <Row>
        <StyledColLeft flex={2}>
          <AppTitle />
        </StyledColLeft>
        <StyledColRight flex={3}>
          <AppSearch
            filterText={filterText}
            setFilterText={setFilterText}
            searchMovies={searchMovies}
          />
        </StyledColRight>
      </Row>      
    </Header>
  )
}
