import React from 'react'
import Layout from 'components/Layout'
import Buttons from 'components/Buttons/ButtonsView'
import NavBooks from 'components/NavBooks/NavBooksView'

import css from './ChapterTemplate.module.css'

const ChapterTemplate = props => {
  const { name, numChapter, chapter, keysChapters, abbrev } = props.pageContext

  return (
    <Layout>
      <section className={css.main}>
        <h1 className={css.header}>
          {name} - {numChapter}
        </h1>
        <NavBooks abbrev={abbrev} keysChapters={keysChapters} />
        <Buttons
          abbrev={abbrev}
          numChapter={numChapter}
          keysChapters={keysChapters}
        />
        <ol className={css.voices}>
          {chapter.map((voice, index) => (
            <li key={index}>{voice}</li>
          ))}
        </ol>
        <Buttons
          abbrev={abbrev}
          numChapter={numChapter}
          keysChapters={keysChapters}
        />
      </section>
    </Layout>
  )
}

export default ChapterTemplate
