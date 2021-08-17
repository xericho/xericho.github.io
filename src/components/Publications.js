import React from 'react'
import { Grid, Row, Col  } from "react-flexbox-grid";


export default function Publications() {

    return (
        <Grid>
          <h2 className="major">Publications</h2>
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
