import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

import { StyledBreadcrumb } from './AppBreadcrumb-Styles'

export function AppBreadcrumb() {
  return (
    <StyledBreadcrumb>
      <Breadcrumb.Item>
        <Link to="/movies">
          <HomeOutlined /> Movies
        </Link>
      </Breadcrumb.Item>
    </StyledBreadcrumb>
  )
}
