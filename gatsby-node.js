const Promise = require('bluebird')
const slash = require('slash')
const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressWpEvents {
            edges {
              node {
                id
                slug
                status
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const eventTemplate = path.resolve('./src/templates/event.js')
      result.data.allWordpressWpEvents.edges.forEach(edge => {
        createPage({
          path: `events/${edge.node.slug}/`,
          component: slash(eventTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
}
