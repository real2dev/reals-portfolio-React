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
      <span className="home-text">
        <span className="home-text01">hello, i&apos;m real</span>
        <br></br>
      </span>
      <span className="home-text03">
        <span className="home-text04">
          you managed to find my portfolio before it&apos;s complete.
        </span>
        <br className="home-text05"></br>
        <span className="home-text06">
          in the meantime, check out my temporary one
        </span>
        <br className="home-text07"></br>
        <span className="home-text08">here&apos;s the link</span>
        <br className="home-text09"></br>
      </span>
    </div>
  )
}

export default Home
