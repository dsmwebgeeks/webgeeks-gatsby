import React from 'react'
import Event from '../components/event'

export default ({ data }) => {
  return (
    <div>
      <h1>What events are coming up?</h1>

      <div
        style={{
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
        }}
      >
        {data.allWordpressWpEvents.edges.map(({ node }, index) => (
          <Event key={index} event={node} />
        ))}
      </div>
    </div>
  )
}

export const eventsQuery = graphql`
  query eventsQuery {
    allWordpressWpEvents {
      totalCount
      edges {
        node {
          id
          title
          content
          date
          modified
          slug
          status
          featured_media {
            source_url
          }
          acf {
            location_name
            location_address
            event_date
            event_time
          }
        }
      }
    }
  }
`
