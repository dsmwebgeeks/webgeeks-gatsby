import React from 'react'

export default ({ data }) => (
  <div>
    <h1>{data.wordpressWpEvents.title}</h1>
  </div>
)

export const eventQuery = graphql`
  query EventQuery($id: String!) {
    wordpressWpEvents(id: { eq: $id }) {
      title
    }
  }
`
