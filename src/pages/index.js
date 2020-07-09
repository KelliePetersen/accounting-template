import React from "react"

import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import Features from "../components/features"
import Slideshow from "../components/slideshow"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Features />
    <Slideshow />
  </Layout>
)

export default IndexPage
