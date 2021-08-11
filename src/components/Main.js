import PropTypes from 'prop-types'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement  }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    const educationColor = "rgb(38 46 62)"
    const workColor = "rgb(63 71 87)"

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="timeline"
          className={`${this.props.article === 'timeline' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', width: '70rem' }}
        >
          <h2 className="major">Timeline</h2>
			<VerticalTimeline
                layout="1-column-left"
            >
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: workColor, color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid '+workColor }}
				iconStyle={{ background: workColor, color: '#fff', paddingLeft: '11px 0px 0px 11px'}}
				icon={ <i className="fa fa-briefcase timeline-icon work-icon"></i> }
			  >
                <p className="vertical-timeline-element-date">March 2019 - Present</p>
				<h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
				<h4 className="vertical-timeline-element-subtitle">Trabus Technologies</h4>
                <ul className="timeline-list">
                    <li>Developed a travel time model that predicts the ETA of two points on the US waterway using gradient boosting which achieved 22% MAPE, and deployed using Docker containers on AWS EC2 instances</li>
                    <li>Built a GraphQL webserver for a river information system commercial application to advise mariners of ETAs, potential delays, and hazardous conditions (patent pending)</li>
                    <li>Implemented a management system that allows users to oversee the work progress of their clients and auto-generates Tableau workbooks by parsing/analyzing text files using AWS S3 buckets, Django, and PostgreSQL</li>
                    <li>Pioneered an EDI to exchange invoice documents between barge companies with a REST API and a full stack website to replace outdated exchange system</li>
                    <li>Designed a dashboard to analyze and monitor hourly AIS data feeds to maintain data integrity and detect anomalies</li>
                </ul>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: workColor, color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid '+workColor }}
				iconStyle={{ background: workColor, color: '#fff', paddingLeft: '11px 0px 0px 11px'}}
				icon={ <i className="fa fa-briefcase timeline-icon work-icon"></i> }
			  >
                <p className="vertical-timeline-element-date">June 2018 - September 2018</p>
				<h3 className="vertical-timeline-element-title">Platform/Machine Learning Intern</h3>
				<h4 className="vertical-timeline-element-subtitle">Brain Corporation</h4>
                <ul className="timeline-list">
                 <li>Created point clouds visualizations to analyze the effects of LIDAR scans on glass walls</li>
                 <li>Implemented a synthetic environment to model glass walls and to collect data</li>
                 <li>Trained a LSTM and multilayer perceptron (MLP) to detect glass walls using Keras with <b>85%</b> accuracy</li>
                 <li>Developed unit tests with pytest to ensure reliability and reproducibility</li>
                </ul>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: educationColor, color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid '+educationColor }}
				iconStyle={{ background: educationColor, color: '#fff', paddingLeft: '11px 0px 0px 11px'}}
				icon={ <i className="fa fa-graduation-cap timeline-icon"></i> }
			  >
                <p className="vertical-timeline-element-date">December 2018</p>
				<h3 className="vertical-timeline-element-title">M.S Electrical Engineering</h3>
				<h4 className="vertical-timeline-element-subtitle">University of California, San Diego</h4>
				<p>
                  Specialty: Machine Learning and Data Science
				</p>
				<p style={{marginTop: "0px"}}>
				  GPA: 3.6
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: workColor, color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid '+workColor }}
				iconStyle={{ background: workColor, color: '#fff', paddingLeft: '11px 0px 0px 11px'}}
				icon={ <i className="fa fa-briefcase timeline-icon work-icon"></i> }
			  >
                <p className="vertical-timeline-element-date">November 2017 - June 2018</p>
				<h3 className="vertical-timeline-element-title ">LabVIEW/Matlab Consultant</h3>
				<h4 className="vertical-timeline-element-subtitle ">LinOptix, LLC</h4>
                <ul className="timeline-list">
                   <li>Converted software to control a digital micromirror device (DMD) from C++ to LabVIEW and Matlab</li>
                   <li>Synced a charged-coupled device (CCD) with a DMD to take an image at 30kHz</li>
                   <li>Applied object oriented analysis and design principles to create a modular set of VIs</li>
                </ul>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: educationColor, color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid '+educationColor }}
				iconStyle={{ background: educationColor, color: '#fff', paddingLeft: '11px 0px 0px 11px'}}
				icon={ <i className="fa fa-graduation-cap timeline-icon"></i> }
			  >
                <p className="vertical-timeline-element-date">June 2017</p>
				<h3 className="vertical-timeline-element-title">B.S Electrical Engineering</h3>
				<h4 className="vertical-timeline-element-subtitle">University of California, San Diego</h4>
				<p>
                  Specialty: Machine Learning and Controls
				</p>
				<p style={{marginTop: "0px"}}>
				  GPA: 3.58
				</p>
			  </VerticalTimelineElement>
			</VerticalTimeline>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
