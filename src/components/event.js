import React from 'react'
import Link from 'gatsby-link'
import styles from './event.module.css'
import moment from 'moment'

export default ({ event, ...props }) => (
  <div className={props.className}>
    <img
      className={styles.thumbnail}
      src={event.featured_media.source_url}
      alt={event.title}
    />
    <div className={styles.meta}>
      <h3 className={styles.title}>
        <Link to={`/events/${event.slug}`}>{event.title}</Link>
      </h3>
      <p className={styles.date}>
        {getDateObjectFromEvent(event).format('LLL')}
      </p>
    </div>
  </div>
)

export function getDateObjectFromEvent(event) {
  const {
    acf: { event_date: date, event_time: time },
  } = event
  return moment(`${date} ${time}`, 'YYYYMMDD h:mma')
}
