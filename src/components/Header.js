import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage  } from "gatsby-plugin-image"

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
        <StaticImage
            src="../images/EH_logo.png"
            alt=""
            placeholder="blurred"
            className="eh-logo" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Eric Ho</h1>
        <p>
            An electrical engineer with a passion for <em>machine learning</em>, <em>computer vision</em> and <em>data science</em>.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('timeline')
            }}
		  >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
