import React from 'react'

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
          <div key={index}>
            <img src={node.featured_media.source_url} alt={node.title} />
            <h3>{node.title}</h3>
            <p>{node.acf.event_date}</p>
          </div>
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
