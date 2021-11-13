import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import logo from '../images/jittery-logo.png'
import BackgroundSection from '../components/Globals/BackgroundSection'

export default function Home({ data }) {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="jittery coffee shop"
        styleClass="default-background"
      >
        <div>
          <img className="logo-landing" src={logo} alt="logo-landing" />
        </div>
        <h2>Welcome to Jittery!</h2>
        <h5>A shot of jitters to feed your focus.</h5>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Jittery Coffee Shop</title>
          </Helmet>
        </div>
      </BackgroundSection>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
