const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allBibleJson {
        edges {
          node {
            ruName
            chapters
            abbrev
          }
        }
      }
    }
  `)

  return data.allBibleJson.edges.forEach(book => {
    createPage({
      path: `/${book.node.abbrev}`,
      component: path.resolve(`src/templates/BookTemplate.js`),
      context: book.node.chapters,
    })

    book.node.chapters.forEach((chapter, idx) => {
      const numChapter = idx + 1

      const configPage = {
        path: `/${book.node.abbrev}/${numChapter}`,
        component: path.resolve(`src/templates/ChapterTemplate.js`),
        context: {
          chapter,
          numChapter,
          abbrev: book.node.abbrev,
          keysChapters: Object.keys(book.node.chapters),
          name: book.node.ruName,
        },
      }

      if (book.node.abbrev === 'gn' && numChapter === 1) {
        createPage({ ...configPage, path: '/' })
      }

      createPage(configPage)
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true,
    },
  })
}
