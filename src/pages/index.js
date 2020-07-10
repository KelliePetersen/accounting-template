import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import Features from "../components/features"
import Slideshow from "../components/slideshow"
import Contact from '../components/Contact'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Features />
    <Slideshow />
    <Contact />
  </Layout>
)

export default IndexPage
