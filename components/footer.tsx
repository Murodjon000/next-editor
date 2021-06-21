import React from 'react'
import { Pane, majorScale, Heading } from 'evergreen-ui'

const Footer = () => (
  <Pane background="white" paddingY={majorScale(2)}>
    <Heading size={600} display="flex" color="#47B881" justifyContent="center">
      © 2021, NextEditor
    </Heading>
  </Pane>
)

export default Footer
