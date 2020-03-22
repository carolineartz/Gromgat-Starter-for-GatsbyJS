import React from "react"
import { Footer, Box, Text } from "grommet"
import { Twitter, Facebook, Instagram } from "grommet-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Container from "../../utils/container"
import Logo from "../logo"

export default () => (
  <Footer>
    <Container pad={{"vertical": "large", "horizontal": "12px"}}>
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
