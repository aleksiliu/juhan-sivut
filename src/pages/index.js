import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/blog/">Blog</Link>
  </>
)

export default IndexPage
