import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Dakota Hourie`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Dakota</strong> who lives and works in Edmonton, AB and writes about random things.{' '}
          <a href="https://www.linkedin.com/in/dakotahourie/">
            You should add him on Linkedin
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
