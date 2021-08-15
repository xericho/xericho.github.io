import React from 'react'
import { VerticalTimeline, VerticalTimelineElement  }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    const educationColor = "rgb(38 46 62)"
    const workColor = "rgb(63 71 87)"

    return (
        <div>
          <h2 className="major">Experience</h2>
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
        </div>
    )
}