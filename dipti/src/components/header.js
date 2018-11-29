import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        'margin-left': '20px',
        padding: '1%',
      }}
    >
      <Link
        to="/"
        style={{
          marginLeft: '10%',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>

      <Link
        style={{
          marginLeft: '50%',
          color: 'white',
          textDecoration: 'none',
        }}
        to="/contact/"
      >
        Contact
      </Link>
    </div>
  </div>
)

export default Header
