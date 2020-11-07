import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../images/about.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />

    {/* <div style={{ width: '100%' }}>

      <img src={About} style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%" }} />
    </div> */}

    {/* <div style={{ top: '17%', left: 0, bottom: 10, height: "auto", position: "absolute", width: '100%' }}>
      <img src={About} style={{ width: '100%', height: 700 }} />
    </div> */}
    {/* <div>
      <h1>MAKE IT COUNT</h1>
    </div> */}

    <div style={{ marginTop: '20%', marginBottom: '20%' }}>

    </div>


    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage
