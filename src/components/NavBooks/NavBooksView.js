import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Button, Icon, Popover } from 'antd'
import LinksChapter from 'components/LinksChapter/LinksChapterView'

import css from './NavBooksView.module.css'
import classNames from 'classnames'

const NavBooksView = ({ abbrev, keysChapters }) => {
  const [isShowBooks, setShowBooks] = useState(false)
  const [isShowChapters, setShowChapters] = useState(false)

  const { allBibleJson } = useStaticQuery(graphql`
    query {
      allBibleJson(sort: { fields: id }) {
        edges {
          node {
            ruName
            abbrev
          }
        }
      }
    }
  `)

  const handleShowBooks = event => {
    event.preventDefault()
    setShowBooks(!isShowBooks)

    if (isShowChapters) {
      setShowChapters(false)
    }
  }

  const handleShowChapters = event => {
    event.preventDefault()
    setShowChapters(!isShowChapters)

    if (isShowBooks) {
      setShowBooks(false)
    }
  }

  const getBooks = () => (
    <div className={css.books}>
      {allBibleJson.edges.map(({ node }) => (
        <Link to={`/${node.abbrev}/1`} key={node.abbrev}>
          <Button type="ghost" className={css.book}>
            {node.ruName}
          </Button>
        </Link>
      ))}
    </div>
  )

  return (
    <section
      className={classNames(
        css.main,
        isShowChapters || isShowBooks ? '' : css.mainDeleteBottom
      )}
    >
      <div className={css.changeBookMenu}>
        <Popover placement="topRight" content="Главы">
          <a
            href="/"
            onClick={handleShowChapters}
            className={css.changeBookItem}
          >
            <Icon type="bars" />
          </a>
        </Popover>
        <Popover placement="topRight" content="Книги">
          <a href="/" onClick={handleShowBooks} className={css.changeBookItem}>
            <Icon type="read" />
          </a>
        </Popover>
      </div>

      {isShowBooks && getBooks()}
      {isShowChapters && (
        <LinksChapter abbrev={abbrev} keysChapters={keysChapters} />
      )}
    </section>
  )
}

export default NavBooksView
