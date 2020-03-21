import React from "react"
import Layout from "../utils/templates/layout"
import SEO from "../utils/seo"
import PageContent from '../components/index'

export default () => {
  return (
    <Layout>
      <SEO
        description="Meta Description"
        title="Page Title | Salon Richmond, VA"
      />
      <PageContent/>
    </Layout>
  )
}
