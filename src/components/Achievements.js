import React from 'react'
import { StaticImage  } from "gatsby-plugin-image"
import { Grid, Row, Col  } from "react-flexbox-grid";


export default function Achievements() {

    return (
        <Grid>
          <h2 className="major">Achievements</h2>
          <h3 className="major">Certifications</h3>
          <Row>
            <Col lg={4}>
              <StaticImage
                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/39247619"
                alt=""
                placeholder="blurred"
                style={{width: "100%", borderRadius: "5px", marginBottom: "1rem"}}/>
            </Col>
            <Col lg={8}>
              <h4 style={{marginBottom: "0.5rem", color: "gray"}}>
                September 2021 • TensorFlow Certficate Program
              </h4>
              <h3 style={{textTransform: "none"}}>
                TensorFlow Developer Certificate
              </h3>
              <p style={{marginBottom: "1rem"}}>Credential ID: 39247619</p>
              <p><a
                style={{marginBottom: "2rem"}}
                href="https://api.accredible.com/v1/credential/generate_certificate_pdf?credential_id=39247619&mode=pdf"
                target="_blank"
                rel="noreferrer">
                See credential
              </a></p>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <StaticImage
                src="../images/DeepLearning.AI_TF_Developer.jpg"
                alt=""
                placeholder="blurred"
                style={{width: "100%", borderRadius: "5px", marginBottom: "1rem"}}/>
            </Col>
            <Col lg={8}>
              <h4 style={{marginBottom: "0.5rem", color: "gray"}}>
                September 2021 • DeepLearning.AI
              </h4>
              <h3 style={{textTransform: "none"}}>
                DeepLearning.AI TensorFlow Developer
              </h3>
              <p><a
                style={{marginBottom: "2rem"}}
                href="https://coursera.org/share/6786f60d16c4a8e0081e4467da529d2f"
                target="_blank"
                rel="noreferrer">
                See credential
              </a></p>
            </Col>
          </Row>

          <h3 className="major" style={{marginTop: "2rem"}}>Publications</h3>
          <Row>
            <Col lg={12}>
              <h4 style={{marginBottom: "0.5rem", color: "gray"}}>
                March 2018 • IEEE Transactions on Cognitive and Developmental Systems
              </h4>
              <h3 style={{textTransform: "none"}}>
                Quantifying Gaze Behavior during Real World Interactions using Automated Object, Face, and Fixation Detection
              </h3>
              <ul style={{marginBottom: "1rem"}}>
                <li>Utilized Faster R-CNN with Caffe framework to detect and locate specific objects with 77% accuracy</li>
                <li>Implemented a face recognition and object recognition system with eye tracking glasses</li>
                <li>Lead a 5 student team in creating and labeling training and test sets in Matlab</li>
              </ul>
              <p><a
                style={{marginBottom: "2rem"}}
                href="https://ieeexplore.ieee.org/document/8328848/"
                target="_blank"
                rel="noreferrer">
                See publication
              </a></p>
            </Col>
          </Row>

        </Grid>
    )
}
