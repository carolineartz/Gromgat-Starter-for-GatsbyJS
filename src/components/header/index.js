import React, { useState } from "react"
import { Link } from "gatsby"
import { Header, Box, Nav, Text, defaultProps } from "grommet"
import { NewWindow } from "grommet-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Logo from "../logo"
import Container from "../../utils/container"
import MobileButtons from "./mobileButtons"
import Accordion from "./accordion"
import Pages from "../pages"

const HideWhenSmall = `
  display: none;
  @media (min-width: ${defaultProps.theme.global.breakpoints.small.value}px) {
    display: flex;
  }
`

const HideWhenBigger = `
  display: flex;
  @media (min-width: ${defaultProps.theme.global.breakpoints.small.value}px) {
    display: none;
  }
`

export default () => {
  //Accordion activeIndex is set to 1 because the first panel is 0 in the array. We change it to 0 when we want to show it!
  const [state, setState] = useState({ visible: false, index: 1, tabIndex: 0 })

  const Open = () => {
    setState({ visible: true, index: 0 })
    document.body.style.overflow = "hidden"
  }

  const Close = () => {
    setState({ visible: false, index: 1 })
    document.body.style.overflow = "unset"
  }

  return (
    <Header
      css={`
        width: 100%;
        padding: 12px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        z-index: 25;
      `}
      background="light-1"
    >
      <Container direction="column">
        <Box direction="row" justify="between" fill>
          <Logo />
          <Nav
            direction="row"
            pad={{ horizontal: "12px" }}
            gap="medium"
            css={HideWhenSmall}
          >
            {Pages.map(page => (
              <Link
                to={page.path}
                key={page.label}
                css={`
                  text-decoration: none;
                  height: max-content;
                  margin: auto 0;
                `}
              >
                <Box direction="row" gap="xsmall">
                  {page.icon}
                  <Text color="text">{page.label}</Text>
                </Box>
              </Link>
            ))}

            <OutboundLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.gatsbyjs.org"
              css={`
                text-decoration: none;
                height: max-content;
                margin: auto 0;
              `}
            >
              <Box direction="row" gap="xsmall" background='brand' pad='xsmall'>
                <NewWindow />
                <Text color="text">Use this starter</Text>
              </Box>
            </OutboundLink>
          </Nav>
          <Box css={HideWhenBigger}>
            <MobileButtons
              passedState={state}
              passedSetState={setState}
              open={Open}
              close={Close}
            />
          </Box>
        </Box>
        <Accordion passedState={state} passedPages={Pages} />
      </Container>
    </Header>
  )
}
