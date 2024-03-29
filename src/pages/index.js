import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/Home/Info'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="Guri Web Shop"
    />
    <Info/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "woodog.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
  


export default IndexPage


