import PropTypes from 'prop-types'
import React from 'react'
import { BsCodeSlash  } from 'react-icons/bs';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
        <BsCodeSlash
            className="icon"
            size="2.5rem"
            color="#fff"
            style={{top: "1rem"}}
        />
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
            Timeline
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
