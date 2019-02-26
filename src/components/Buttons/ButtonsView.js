import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import css from './ButtonsView.module.css'

const ButtonsView = ({ abbrev, numChapter, keysChapters }) => (
  <div className={css.main}>
    <Link to={`/${abbrev}/${numChapter - 1 > 0 ? numChapter - 1 : numChapter}`}>
      <Button type="default" disabled={!(numChapter - 1)}>
        Предыдущая глава
      </Button>
    </Link>
    <Link
      to={`/${abbrev}/${
        numChapter + 1 <= keysChapters.length ? numChapter + 1 : numChapter
      }`}
    >
      <Button type="default" disabled={numChapter === keysChapters.length}>
        Следующая глава
      </Button>
    </Link>
  </div>
)

export default ButtonsView
