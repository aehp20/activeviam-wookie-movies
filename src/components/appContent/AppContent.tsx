import React from 'react'

import { StyledAppContent } from './AppContent-Styles'
import { IAppContent } from './AppContent-Types'

export function AppContent(props: IAppContent) {
  return (
    <StyledAppContent>
      {props.children}
    </StyledAppContent>
  )
}
