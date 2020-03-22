import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"
import Img from "gatsby-image"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto", "50%"],
  large: ["auto", "50%"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["calc(100vh - 59px)", "medium"],
  medium: ["calc(100vh - 59px)"],
  large: ["calc(100vh - 59px)"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [0, 1], end: [0, 1] },
  ],
  medium: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
  ],
  large: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
  ],
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kevin-chinchilla-0BRFhDeLeNE-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Responsive columns={columns} rows={rows} areas={fixedGridAreas} gap="none">
      <Box gridArea="content-0" direction="column" pad="large" justify="center" background='brand'>
        <Heading level={1} color="text">
          Gromgat Features
        </Heading>
        <Paragraph color="text" fill size='xlarge'>
          SEO, Grommet based theming, and a powerful grid system.
        </Paragraph>
      </Box>
      <Box
        gridArea="content-1"
        css={`
          position: relative;
        `}
        background="light-1"
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Flag Image"
        />
      </Box>
    </Responsive>
  )
}
