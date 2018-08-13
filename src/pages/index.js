import React from 'react'
import Event from '../components/event'
import styles from './index.module.css'

export default ({ data }) => {
  return (
    <div>
      <h1 className={styles.heading}>What events are coming up?</h1>

      <div>
        {data.allWordpressWpEvents.edges.map(({ node }, index) => (
          <Event className={styles.event} key={index} event={node} />
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
