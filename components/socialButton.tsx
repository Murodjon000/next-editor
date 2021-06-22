import React from 'react'
import { Pane, Card } from 'evergreen-ui'
import GithubIcon from './githubIcon'

const icons = { github: GithubIcon }
const SocialButton = ({ type, onClick }) => {
  const Icon = icons[type] || GithubIcon

  return (
    <Card
      is="button"
      elevation={1}
      paddingY="14px"
      paddingX="17px"
      width="100%"
      maxWidth="345px"
      background={type === 'Google' ? 'white' : '#121212'}
      style={{ border: ' 0px solid' }}
      color={type === 'Google' ? 'black' : 'white'}
      onClick={onClick}
      cursor="pointer"
    >
      <Pane display="flex" alignItems="center" justifyContent="space-evenly" fontSize="20px">
        <Icon />
        <span style={{ fontSize: '1.2rem' }}>
          <strong>Continue with {type}</strong>
        </span>
      </Pane>
    </Card>
  )
}

export default SocialButton
