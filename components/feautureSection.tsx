import React, { FC } from 'react'
import { Pane, Heading, Paragraph, majorScale } from 'evergreen-ui'
import Image from 'next/image'
import Container from './container'

const FeatureSection: FC<{ invert?: boolean; title: string; body: string; image: string }> = ({
  title,
  image,
  body,
  invert,
}) => {
  const Left = () => (
    <Pane>
      <Heading size={900}>{title}</Heading>
      <Paragraph size={500}>{body}</Paragraph>
    </Pane>
  )

  const Right = () => (
    <Pane textAlign={invert ? 'left' : 'right'} border elevation={1}>
      <Image src={image} width={1200} height={600} layout="responsive" quality={100} loading="lazy" />
    </Pane>
  )

  const children = invert ? [Right, Left] : [Left, Right]

  return (
    <Pane
      minHeight="70vh"
      background={invert ? 'greenTint' : 'white'}
      paddingY={majorScale(8)}
      paddingX={majorScale(2)}
      borderTop
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <Container height="100%">
        <Pane display="flex" alignItems="center" className="feauture-section" justifyContent="space-between">
          {children.map((Child, i) => (
            <Pane key={i} width="50%" paddingX={majorScale(3)} className="feauture-section-childs">
              <Child />
            </Pane>
          ))}
        </Pane>
      </Container>
    </Pane>
  )
}

export default FeatureSection
