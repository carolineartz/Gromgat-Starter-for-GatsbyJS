import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import { AssistListening, Ascend, Announce } from "grommet-icons"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

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
  <Container pad="large">
    <Responsive
      columns={columns}
      rows={rows}
      areas={fixedGridAreas}
      gap="large"
    >
      <Box gridArea="content-0" direction="column" justify="start" fill>
        <Box direction="row" gap="medium">
          <AssistListening
            color="#C677E6"
            size="large"
            css={`
              margin: auto 0;
            `}
          />
          <Heading level={2} color="text">
            Lipsum I
          </Heading>
        </Box>
        <Paragraph color="text" fill>
          Nulla facilisi. Phasellus a erat porta, bibendum ligula quis, auctor
          urna. Integer id ultrices ligula, quis bibendum est. Vivamus gravida
          ligula a viverra dignissim. Vestibulum vel sodales orci, nec dapibus
          nibh. Aliquam scelerisque, dui in posuere elementum, enim justo
          placerat massa, nec ullamcorper lectus enim eu sapien. Duis fermentum
          est neque. Donec hendrerit leo lectus, a ultrices nulla laoreet quis.
          Ut a hendrerit mauris. Quisque eu condimentum ex. Etiam id blandit
          metus, ac finibus velit. Etiam elementum mattis sapien, sit amet
          laoreet arcu sollicitudin ut.
        </Paragraph>
      </Box>
      <Box gridArea="content-1" direction="column" justify="start" fill>
        <Box direction="row" gap="medium">
          <Ascend
            color="#67A9F7"
            size="large"
            css={`
              margin: auto 0;
            `}
          />
          <Heading level={2} color="text">
            Lipsum II
          </Heading>
        </Box>
        <Paragraph color="text" fill>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          dapibus, ipsum congue imperdiet fringilla, ipsum erat molestie magna,
          ut rutrum arcu ipsum in est. Pellentesque sit amet gravida elit. Morbi
          aliquam nunc felis, eget condimentum libero eleifend in. Etiam ex
          mauris, consectetur ac auctor et, consequat sed diam. Etiam lorem
          lectus, scelerisque et orci vel, ultrices tincidunt turpis. In hac
          habitasse platea dictumst. In hac habitasse platea dictumst. Nulla
          facilisi. Aliquam varius at neque sit amet molestie. In hac habitasse
          platea dictumst. Sed leo libero, sodales eu sapien id, dapibus
          dignissim enim.
        </Paragraph>
      </Box>
      <Box gridArea="content-2" direction="column" justify="start" fill>
        <Box direction="row" gap="medium">
          <Announce
            color="#38C2A3"
            size="large"
            css={`
              margin: auto 0;
            `}
          />
          <Heading level={2} color="text">
            Lipsum III
          </Heading>
        </Box>
        <Paragraph color="text" fill>
          Cras sed feugiat massa, sit amet blandit urna. Integer augue mauris,
          elementum nec velit a, ullamcorper sodales metus. Sed id neque finibus
          turpis dapibus dictum eu ac lacus. Nullam sit amet leo aliquet,
          pellentesque libero et, viverra risus. Integer porta neque quis
          aliquet vulputate. Morbi sed mollis lacus. Aliquam vel libero at elit
          mattis venenatis sed sed ligula. Mauris placerat felis eget mollis
          iaculis. Vestibulum eget dui eu metus mollis aliquam. Donec sed
          tincidunt turpis.
        </Paragraph>
      </Box>
    </Responsive>
  </Container>
)
