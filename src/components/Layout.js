import React from 'react'
import { Helmet } from 'react-helmet'

import css from './Layout.module.css'

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet title={title} />
      <div className={css.main}>{children}</div>
    </>
  )
}

export default Layout
