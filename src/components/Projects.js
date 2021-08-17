import React from 'react'
import { Grid, Row, Col  } from "react-flexbox-grid";


export default function Projects() {

    return (
        <Grid>
          <h2 className="major">Projects</h2>
          <Row>
            <Col lg={12}>
              <p style={{marginBottom: "1rem"}}>
                Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
                eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
                erat volutpat. Praesent urna nisi, fringila lorem et vehicula
                lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
                Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
                Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
                amet.
              </p>
            </Col>
          </Row>
        </Grid>
    )
}
