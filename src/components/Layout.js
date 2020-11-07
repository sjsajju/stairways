/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Button } from "./Button"
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from "../images/logo.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        {/* <footer style={{width: '100%'}}>
          <div style={{ background: "red", padding: "20px 0px 21px", textAlign: "center" }}>
            <div style={{ width: 1170, padding: 0 }}>
              <h5>Reach Out To Us For Any Solution</h5>
            </div>
          </div>
        </footer> */}

        {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
      <footer style={{ marginTop: '5%' }}>
        {/* <div style={{ background: "red", padding: "20px 0px 15px", textAlign: 'center' }}>
          <h2 style={{ marginTop: '1%' }}>Reach Out To Us For Any Solution &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button buttonSize="btn--large">Contact</Button></h2>
        </div> */}

        <div style={{ width: '100%', padding: '80px 0px 0px', background: 'black' }}>
          <Grid container spacing={3} justify="center" style={{ paddingBottom: "3%", borderBottom: "1px solid rgb(55, 55, 55)" }}>
            <Grid item xs={4} style={{ textAlign: "center", borderRight: "1px solid rgb(55, 55, 55)" }}>
              <LocationOnIcon style={{ color: "#3d8cd1" }} />
              <p style={{ color: "white" }}>Lane 3, Apartment G-9, Near Maryam Memorial Hospital <br /> Rawalpindi, Pakistan</p>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center", borderRight: "1px solid rgb(55, 55, 55)" }}>
              <PhoneIcon style={{ color: "#3d8cd1" }} />
              <p style={{ color: "white" }}>+92 3234900291 <br /> +92 3084020525</p>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <EmailIcon style={{ color: "#3d8cd1" }} />
              <p style={{ color: "white" }}>info@safesolution.com.pk</p>
            </Grid>
          </Grid>

          <div style={{ width: '80%', marginLeft: '15%' }}>
            <Grid container spacing={2} style={{ marginTop: "5%", paddingBottom: "3%", borderBottom: "1px solid rgb(55, 55, 55)" }}>
              <Grid item xs={4}>
                <h5 style={{ color: "white" }}>About Us</h5>
                <p style={{ color: "white" }}>Safe Solutions Pakistan emerged from the need of providing the best quality products that meet the growing market demand of dependable products that are battle tested and ready for installation in an easy way. Our team includes people with sound professional backgrounds that understand the potential of their products and have overseen many successful deliveries of such projects.</p>
                <Button buttonSize="btn--small">Read More</Button>
              </Grid>
              <Grid item xs={3} style={{ color: "white" }}>
                <h5 style={{ color: "white" }}>Our Solutions</h5>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>3M Safety & Security Films</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>3M Sun Control Films</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>3M Automotive Films</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>3M Nomad Enterance Matting</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>3M Traction Systems</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>DFI Water Repellent Coatings</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>GCC Architectural Glass Fittings</Link>
              </Grid>
              <Grid item xs={2}>
                <h5 style={{ color: "white" }}>Quick Links</h5>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>About Us</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Services</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Products</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link> <br />
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Request A Quote</Link>
              </Grid>
              <Grid item xs={3}>
                <h5 style={{ color: "white" }}>Follow Us</h5>
                <a href="#">
                  <FacebookIcon style={{ color: "white", marginRight: '2%' }} />
                </a>
                <a href="#">
                  <TwitterIcon style={{ color: "white", marginRight: '2%' }} />
                </a>
                <a href="#">
                  <InstagramIcon style={{ color: "white", marginRight: '2%' }} />
                </a>
                <a href="#">
                  <LinkedInIcon style={{ color: "white" }} />
                </a>
                <img src={Logo} />
              </Grid>
            </Grid>
          </div>

          <div style={{ width: '80%', marginLeft: '15%' }}>
            <p style={{ color: "rgb(129, 129, 129)", marginTop: '3%', paddingBottom: '2%', display: 'inline-block' }}>Copyright © 2020 Safe Solutions.</p>
            <p style={{ color: "rgb(129, 129, 129)", display: 'inline-block', marginLeft: '65%' }}>Made with <span style={{ color: "#e25555" }}>&hearts;</span> in Pakistan</p>
          </div>
        </div>

      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
