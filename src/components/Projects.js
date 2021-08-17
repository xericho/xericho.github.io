import React from 'react'
import { Grid, Row, Col  } from "react-flexbox-grid";


export default function Projects() {

    return (
        <Grid>
          <h2 className="major">Projects</h2>
          <Row>
            <Col lg={12}>
              <h4 style={{marginBottom: "0.5rem", color: "gray"}}>
                March 2018
              </h4>
              <h3 style={{textTransform: "none"}}>
                Classical Music Generator
              </h3>
              <ul>
                <li>Designed a character-level LSTM RNN with PyTorch that can generate classical music in ABC music notation</li>
                <li>Optimized the RNN by using GRU units, dropout layers, and adaptive learning rates via RMSprop</li>
                <li>Implemented a "temperature" parameter that changes how random/structured the generated music is</li>
              </ul>

              <h4 style={{marginBottom: "0.5rem", color: "gray"}}>
                March 2018
              </h4>
              <h3 style={{textTransform: "none"}}>
                Doppelganger Face Generation using DC-GAN
              </h3>
              <ul>
                <li>Created a Deep Convolutional General Adversarial Network (DC-GAN) that generated realistic human faces</li>
                <li>Found the closest face by using various similarity metrics such as Euclidean and Minkowski distances</li>
                <li>Applied feature extraction using principal component analysis (PCA) and discrete cosine transform (DCT)</li>
              </ul>

              <h4 style={{marginBottom: "0.5rem", color: "gray"}}>
                December 2018
              </h4>
              <h3 style={{textTransform: "none"}}>
                Bayesian Classifier with Gaussian Mixtures
              </h3>
              <ul>
                <li>Segmented an image of a cheetah into the foreground (cheetah) and background by classifying each pixel using Bayes decision rule</li>
                <li>Found the maximum likelihood parameter estimates of Gaussian mixtures using the expectation maximization (EM) algorithm</li>
                <li>Achieved 4.6% probability of error with 64 Gaussian components densities</li>
              </ul>
            </Col>
          </Row>
        </Grid>
    )
}
