import React from 'react'
import { Grid, Row, Col  } from "react-flexbox-grid";
import pic03 from '../images/pic03.jpg'


export default function ContactForm() {

    return (
        <Grid>
          <h2 className="major">About</h2>
          <Row>
            <Col lg={6}>
                <img src={pic03} alt="" style={{width: "100%", height: "300px"}}/>
            </Col>
            <Col lg={6}>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
        </Grid>
    )
}
