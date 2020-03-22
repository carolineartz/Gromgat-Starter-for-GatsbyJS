import React from "react"
import { Accordion, AccordionPanel, Box, Text } from "grommet"
import { NewWindow } from "grommet-icons"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default props => {
  return (
    <Accordion animate={true} activeIndex={props.passedState.index}>
      <AccordionPanel header={<></>}>
        <Box
          direction="column"
          gap="large"
          overflow="auto"
          align="center"
          margin={{ top: "large" }}
        >
          {props.passedPages.map(page => (
            <Link
              to={page.path}
              key={page.label}
              css={`
                text-decoration: none;
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
            href="https://github.com/djbatt/Gromgat-Starter-for-GatsbyJS"
            css={`
              text-decoration: none;
              height: max-content;
              margin: auto 0;
            `}
          >
            <Box direction="row" gap="xsmall" background="brand" pad="small">
              <NewWindow />
              <Text color="text">Use this starter</Text>
            </Box>
          </OutboundLink>
        </Box>
      </AccordionPanel>
    </Accordion>
  )
}
