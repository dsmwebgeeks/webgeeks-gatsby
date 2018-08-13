import React from 'react'
import styles from './event.module.css'

export default ({ event, ...props }) => (
  <div className={props.className}>
    <img
      className={styles.thumbnail}
      src={event.featured_media.source_url}
      alt={event.title}
    />
    <div className={styles.meta}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.date}>{event.acf.event_date}</p>
    </div>
  </div>
)
