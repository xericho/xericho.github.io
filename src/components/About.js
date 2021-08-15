import React from 'react'
import { Grid, Row, Col  } from "react-flexbox-grid";
import pic from '../images/profile_pic.jpg'


export default function ContactForm() {

    return (
        <Grid>
          <h2 className="major">About</h2>
          <Row>
            <Col lg={4}>
                <img src={pic} alt=""
                style={{width: "100%", maxHeight: "20rem", borderRadius: "5px", marginBottom: "1rem"}}/>
            </Col>
            <Col lg={8}>
              <p style={{marginBottom: "1rem"}}>
                Hello! My name is Eric Ho and I'm an machine learning engineer
                based in San Diego. I went to University of California, San Diego
                where I got my Masters and Bachelors degree in Electrical Engineering.
                During my academic years, I <a href="https://ieeexplore.ieee.org/document/8328848" target="_blank"
                rel="noreferrer"> published a paper</a> in object recognition to help children with autism and I
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
          <ul className="icons">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://linkedin.com/in/xericho/"
                className="icon fa-linkedin"
              >
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/xericho"
                className="icon fa-github"
              >
              </a>
            </li>
          </ul>
        </Grid>
    )
}
