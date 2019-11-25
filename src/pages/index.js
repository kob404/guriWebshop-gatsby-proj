import React from "react"
import { Link } from "gatsby"
import logo from '../images/boneLogo.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <img src={logo} alt="Logo"/>
  </Layout>
)

export default IndexPage
