import React, { FC } from 'react'
import { Pane, Heading, Paragraph, majorScale } from 'evergreen-ui'

const Hero: FC<{ content: { title: string; body: string } }> = ({ content }) => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      paddingX={majorScale(2)}
      paddingY={majorScale(8)}
      height={`calc(100vh - ${majorScale(9)})`}
    >
      <Pane>
        <Heading
          id="test-h-title"
          fontSize="clamp(2rem,8vw,6rem)"
          lineHeight="clamp(2rem,8vw,6rem)"
          marginBottom={majorScale(8)}
        >
          {content.title}
        </Heading>
        <Paragraph id="test-h-para" fontSize="clamp(1.2rem, 4vw, 1.5rem)" lineHeight="clamp(1.2rem, 4vw, 2rem)">
          {content.body}
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default Hero
