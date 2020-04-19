import styled from 'styled-components'
import { Col } from 'antd'

export const StyledMovieContent = styled(Col)`
  flex: 1 50%;
  display: flex;
  flex-flow: column wrap;
`

export const StyledMovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledMovieSubHeader = styled.div`
  margin: 10px 0;
`

export const StyledMovieTitle = styled.div`
  font-size: 18px;
`

export const StyledMovieDescriptionLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
`

export const StyledMovieRate = styled.div`
  width: 140px;
`
