import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/Home/Info'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid}
    title="about us" styleClass="about-background"
    />
    <Info/>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: {eq: "dog on bad.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
  


export default AboutPage


