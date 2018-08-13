import React from 'react'

export default ({ event }) => (
  <div>
    <img src={event.featured_media.source_url} alt={event.title} />
    <h3>{event.title}</h3>
    <p>{event.acf.event_date}</p>
  </div>
)
