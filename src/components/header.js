import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#efefef',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            border: 0,
            backgroundImage: 'none',
          }}
        >
          <img
            src="http://www.dsmwebgeeks.com/app/uploads/2016/05/webgeeks.png"
            alt="Web Geeks logo"
            style={{ maxHeight: '50px', marginBottom: 0 }}
          />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
