import React from 'react'

import css from './Layout.module.css'

const Layout = props => {
  return <div className={css.main}>{props.children}</div>
}

export default Layout
