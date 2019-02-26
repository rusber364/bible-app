import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Button, Icon, Popover } from 'antd'
import LinksChapter from 'components/LinksChapter/LinksChapterView'

import css from './NavBooksView.module.css'

const NavBooksView = ({ abbrev, keysChapters }) => {
  const [isShowBooks, setShowBooks] = useState(false)
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
  }

  const books = (
    <div className={css.books}>
      {allBibleJson.edges.map(({ node }) => (
        <Link to={`/${node.abbrev}/1`}>
          <Button type="ghost" className={css.book}>
            {node.ruName}
          </Button>
        </Link>
      ))}
    </div>
  )

  return (
    <section className={css.main}>
      <Popover placement="topRight" content="Книги">
        <a href="/" onClick={handleShowBooks} className={css.changeBook}>
          <Icon type="book" />
        </a>
      </Popover>
      {isShowBooks ? (
        books
      ) : (
        <LinksChapter abbrev={abbrev} keysChapters={keysChapters} />
      )}
    </section>
  )
}

export default NavBooksView
