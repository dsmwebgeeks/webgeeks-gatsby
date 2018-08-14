import React from 'react'
import Event, { getDateObjectFromEvent } from '../components/event'
import styles from './index.module.css'
import moment from 'moment'

export default ({ data }) => {
  const upcoming = upcomingEvents(data.allWordpressWpEvents.edges)
  const past = pastEvents(data.allWordpressWpEvents.edges)

  return (
    <div>
      {upcoming.length && (
        <div>
          <h2 className={styles.heading}>Upcoming Events</h2>

          <div>
            {upcoming.map(({ node }, index) => (
              <Event className={styles.event} key={index} event={node} />
            ))}
          </div>
        </div>
      )}

      {past.length && (
        <div>
          <h2 className={styles.heading}>Past Events</h2>

          <div>
            {past.map(({ node }, index) => (
              <Event className={styles.event} key={index} event={node} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function upcomingEvents(events) {
  const today = moment().startOf('day')
  return events
    .filter(event => getDateObjectFromEvent(event.node).startOf('day') >= today)
    .sort((a, b) => a.node.acf.event_date - b.node.acf.event_date)
}

function pastEvents(events) {
  const today = moment().startOf('day')
  return events.filter(
    event => getDateObjectFromEvent(event.node).startOf('day') < today
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
