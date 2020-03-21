import React from "react"
import { Accordion, AccordionPanel, Box, Text } from "grommet"
import { Link } from "gatsby"

export default props => {
  return (
    <Accordion animate={true} activeIndex={props.passedState.index}>
      <AccordionPanel header={<></>}>
        <Box direction="column" gap="large" overflow="auto" align='center' margin={{"top": "large"}}>
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
        </Box>
      </AccordionPanel>
    </Accordion>
  )
}
