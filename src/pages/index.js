import React from "react"

import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import Slideshow from "../components/slideshow"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Slideshow />
  </Layout>
)

export default IndexPage
