import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Layout } from 'antd'

import { AppFooter } from './components/appFooter'
import { Movies } from './routes/movies'
import { Movie } from './routes/movie'
import { StyledLayoutContent } from './App-Styles'
import { AppContent } from './components/appContent'
import { AppHeader } from './components/appHeader'
import { AppBreadcrumb } from './components/appBreadcrumb'
import { useAppController } from './App-Controller'
import { AppPageNotFound } from './components/appPageNotFound'

function App() {
  const {
    filterText,
    setFilterText,
    searchMovies,
    genresMovies,
    findMovie
  } = useAppController()

  return (
    <div>
      <Router>
        <Layout className='layout'>
          <AppHeader
            filterText={filterText}
            setFilterText={setFilterText}
            searchMovies={searchMovies}
          />
          <AppContent>
            <AppBreadcrumb />
            <StyledLayoutContent>
              <Switch>
                <Route exact path="/">
                  <Movies genresMovies={genresMovies} findMovie={findMovie} />
                </Route>
                <Route exact path='/movies'>
                  <Movies genresMovies={genresMovies} findMovie={findMovie} />
                </Route>
                <Route exact path='/movies/:id'>
                  <Movie findMovie={findMovie} />
                </Route>
                <Route path="*">
                  <AppPageNotFound />
                </Route>
              </Switch>
            </StyledLayoutContent>
          </AppContent>
          <AppFooter />
        </Layout>
      </Router>
    </div>
  )
}

export default App
