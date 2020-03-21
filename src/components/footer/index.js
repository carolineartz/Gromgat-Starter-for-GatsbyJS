import React from "react"
import { Footer, Box, Text } from "grommet"
import { Twitter, Facebook, Instagram } from "grommet-icons"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"
import Pages from "../pages"
import Logo from "../logo"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["auto", "auto", "auto"],
  medium: ["auto"],
  large: ["auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [0, 1], end: [0, 1] },
    { name: "content-2", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
    { name: "content-2", start: [2, 0], end: [2, 0] },
  ],
  large: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
    { name: "content-2", start: [2, 0], end: [2, 0] },
  ],
}

export default () => (
  <Footer>
    <Container pad="large">
      <Box direction="column" gap='medium' margin={{"bottom": "medium"}}>
        <Logo />

        <Box direction="row" gap="medium">
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com"
          >
            <Twitter />
          </OutboundLink>
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com"
          >
            <Instagram />
          </OutboundLink>
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com"
          >
            <Facebook />
          </OutboundLink>
        </Box>
      </Box>
      <Box>
        <Text size="xsmall">
          © {new Date().getFullYear()} Content provided via github is licensed
          under MIT license.
        </Text>
        <Text size="xsmall">
          Made with ♥ by{" "}
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://sourcerva.com"
            css={`text-decoration: none;`}
          >
            <Text color="text" size="xsmall">
              Source
            </Text>
          </OutboundLink>
          .
        </Text>
      </Box>
    </Container>
  </Footer>
)
