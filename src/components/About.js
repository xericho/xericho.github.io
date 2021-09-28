import React from 'react'
import { Grid, Row, Col  } from "react-flexbox-grid";
import Icons from './Icons'
import { StaticImage  } from "gatsby-plugin-image"
import PDFResume from '../assets/2021_Eric_Ho_Resume.pdf'

export default function About() {

    return (
        <Grid>
          <h2 className="major">About</h2>
          <Row>
            <Col lg={4}>
                <StaticImage
                    src="../images/profile_pic.jpg"
                    alt=""
                    placeholder="blurred"
                    style={{width: "100%", borderRadius: "5px", marginBottom: "1rem"}}/>
            </Col>
            <Col lg={8}>
              <p style={{marginBottom: "1rem"}}>
                Hello! My name is Eric Ho and I'm an machine learning engineer
                based in San Diego. I went to University of California, San Diego
                where I got my Masters and Bachelors degree in Electrical Engineering.
                During my academic years, I <a href="https://ieeexplore.ieee.org/document/8328848" target="_blank"
                rel="noreferrer"> published a paper</a> in object recognition to help children with autism and
                worked at Brain Corporation as a ML engineer intern to improve autonomous cleaning vehicles.
                Currently, I work at Trabus Technologies as a ML engineer, developing models to
                forecast estimated time of arrivals (ETA) for ships on the U.S. inland waterways.
              </p>
            </Col>
          </Row>
          <p>
            In my freetime, I like to automate things to make my life easier using my 3D printer
            and various microcontrollers. I love to learn new technologies and apply them in practical ways
            such as learning ReactJS to build this website!
          </p>
          <p><a
            download="2021_Eric_Ho_Resume.pdf"
            target="_blank"
            href={PDFResume}
            style={{borderBottom: 'none'}}
          >
            <button>Download Resume</button>
          </a></p>
          <Icons />
        </Grid>
    )
}
