import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Box, Heading, Paragraph, Text } from "grommet"
import { Catalog } from "grommet-icons"
import Img from "gatsby-image"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto"],
  large: ["auto"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["600px"],
  medium: ["500px"],
  large: ["500px"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [{ name: "hero", start: [0, 0], end: [0, 0] }],
  medium: [{ name: "hero", start: [0, 0], end: [0, 0] }],
  large: [{ name: "hero", start: [0, 0], end: [0, 0] }],
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "noaa-sDCG1hTV8mI-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Box background="accent-1" direction="column">
      <Responsive
        columns={columns}
        rows={rows}
        areas={fixedGridAreas}
        css={`
          position: relative;
        `}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Hero Image"
          css={`
            opacity: 0.3;
          `}
        />
        <Box
          gridArea="hero"
          direction="column"
          justify="center"
          fill
          css={`
            position: absolute;
          `}
        >
          <Container>
            <Box pad="large">
              <Heading level={1} color="text">
                GatsbyJS Starter with Grommet
              </Heading>
              <Box width="large">
                <Paragraph color="text" size="large" fill>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo metus. Ut velit felis, ultrices fringilla arcu sed, aliquam porta ex. Nulla fermentum dui ligula, nec auctor nulla ultricies faucibus. In auctor magna tortor, sed aliquet ligula tempus id.
                </Paragraph>
              </Box>
              <Link to="/about" css={`text-decoration: none;`}>
                <Box
                  direction="row"
                  gap="small"
                  border={{
                    color: "text",
                    size: "medium",
                    style: "solid",
                    side: "all",
                  }}
                  width="fit-content"
                  pad="small"
                >
                  <Catalog color='text' />
                  <Text color='text'>About this starter</Text>
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>
      </Responsive>
    </Box>
  )
}
