import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <div>
    <h1>{data.wordpressWpEvents.title}</h1>
    <img
      src={
        data.wordpressWpEvents.featured_media &&
        data.wordpressWpEvents.featured_media.source_url
      }
      alt={data.wordpressWpEvents.title}
    />
    <div dangerouslySetInnerHTML={{ __html: data.wordpressWpEvents.content }} />
    <Link to="/">All events</Link>
  </div>
)

export const eventQuery = graphql`
  query EventQuery($id: String!) {
    wordpressWpEvents(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
      }
    }
  }
`
