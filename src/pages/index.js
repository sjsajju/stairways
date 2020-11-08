import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import three_m from "../images/3msafetyicon.png"
import sun_control from "../images/sun_control_film.png"
import cnc_icon from "../images/cnc-icon.png"
import chemical_icon from "../images/chemical-icon.png"
import energy_icon from "../images/energy-icon.png"
import oil_icon from "../images/oil-icon.png"
import material_icon from "../images/material-icon.png"
import { Button } from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    <div style={{ flexGrow: 1, marginBottom: 120, marginTop: 50, width: '70%' }}>
      <Grid container spacing={3} style={{ marginLeft: '20%' }}>
        <Grid item xs={5} style={{ textAlign: "center" }}>
          <h2 style={{ marginTop: '15%' }}>Services & Solutions</h2>
        </Grid>
        <Grid item xs={7}>
          <p style={{ borderLeft: "1px solid #838383", padding: "40px 41px", fontSize: 18 }}>Our services includes 3M window films, 3M wraps, matting, traction control, car tints, car wraps, Paint protections films,glass architectural hardware & Diamond Fusion Coatings etc.</p>
        </Grid>
      </Grid>
    </div>

    <div style={{ width: '70%' }}>
      <Grid container spacing={5} justify="space-evenly" style={{ marginLeft: '17%' }}>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link>
            <img src={three_m} />
            <h5>3M SAFETY & SECURITY FILMS</h5>
            <p>We offer full range of 3M Safety & Security Films with installation.</p>
            <Button buttonSize="btn--small">Read More</Button>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link style={{ textAlign: "center" }}>
            <img src={sun_control} />
            <h5>3M SUN CONTROL FILMS</h5>
            <p>Safe Solutions offer 3m SUN  with installation.</p>
            <Button buttonSize="btn--small">Read More</Button>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link style={{ textAlign: "center" }}>
            <img src={cnc_icon} />
            <h5>3M AUTOMOTIVE FILMS</h5>
            <p>3M Automotive Films are also installed anddistributed all across nation.</p>
            <Button buttonSize="btn--small">Read More</Button>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link style={{ textAlign: "center" }}>
            <img src={chemical_icon} />
            <h5>3M NOMAD ENTERANCE MATTING</h5>
            <p>We also hold distrivution of 3M Nomad Matting used commercially & in resedential areas.</p>
            <Button buttonSize="btn--small">Read More</Button>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link style={{ textAlign: "center" }}>
            <img src={energy_icon} />
            <h5>3M TRACTION SYSTEMS</h5>
            <p>We deal in various 3M Traction Systems in corporate & resedential projects.</p>
            <Button buttonSize="btn--small">Read More</Button>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link style={{ textAlign: "center" }}>
            <img src={oil_icon} />
            <h5>DFI WATER REPELLENT COATINGS</h5>
            <p>We have different DFI Repellant Coatings which are installed.</p>
            <Button buttonSize="btn--small">Read More</Button>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Link style={{ textAlign: "center" }}>
            <img src={material_icon} />
            <h5>GCC ARCHITECTURAL GLASS FITTINGS</h5>
            <p>Safe Solutions offers GCC Architectural Glass Fittings across.</p>
            <Button buttonSize="btn--small"><Link to="/about">Read More</Link></Button>
          </Link>
        </Grid>
      </Grid>
    </div>

    {/* <div className="container">
      <div className="row">
        <div className="head-section wdt-100">
          <div className="col-lg-5 col-md-6 col-sm-4 col-xs-12">
            <h3>Services & Solutions</h3>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12">
            <p classNAme="fnt-18">Our services includes 3M window films, 3M wraps, matting, traction control, car tints, car wraps, Paint protections films,glass architectural hardware & Diamond Fusion Coatings etc.</p>
          </div>
        </div>
      </div>
    </div> */}


    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site Sajjad.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
