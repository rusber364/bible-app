import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

import css from './LinksChapterView.module.css'

const LinksChapter = ({ abbrev, keysChapters }) => {
  return (
    <nav className={css.main}>
      {keysChapters.map(num => (
        <Link key={num} to={`/${abbrev}/${+num + 1}`}>
          <Button type="dashed" className={css.chapter}>
            {+num + 1}
          </Button>
        </Link>
      ))}
    </nav>
  )
}

export default LinksChapter
