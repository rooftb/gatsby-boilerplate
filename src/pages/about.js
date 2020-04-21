import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <p>
          I currently work full time as a web developer for the Soldier Support
          Institute at Ft. Jackson, South Carolina.
        </p>
        <Link to="/contact">Contact</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
