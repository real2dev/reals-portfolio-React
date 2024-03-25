import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>real's portfolio</title>
        <meta property="og:title" content="real's portfolio" />
      </Helmet>
    </div>
  )
}

export default Home
