import styled from 'styled-components'

export const StyledPoster = styled.img`
  width: ${props => props.width ? props.width : '150px'};
  height: ${props => props.height ? props.height : '180px'};
  border-style: solid;
  border-color: #a2a3a5;
  border-width: 1px;
  margin-right: 10px;
  flex: 0 0 auto;
`
