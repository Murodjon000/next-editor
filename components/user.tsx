import React, { FC } from 'react'
import { Pane, Position, Avatar, Popover, Menu, LogOutIcon, majorScale, Text } from 'evergreen-ui'
import { signOut } from 'next-auth/client'
import { UserSession } from '../types'

const User: FC<{ user: UserSession }> = ({ user }) => {
  return (
    <Pane position="fixed" id="test-u-pop" className="user-pop" top={20} right={20}>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Pane>
            <Pane background="tint1" padding={majorScale(2)}>
              <Pane>
                <Text>{user.name}</Text>
              </Pane>
              <Pane>
                <Text color="muted">{user.email}</Text>
              </Pane>
            </Pane>
            <Pane background="white">
              <Menu>
                <Menu.Item
                  icon={LogOutIcon}
                  intent="danger"
                  onSelect={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sign out
                </Menu.Item>
              </Menu>
            </Pane>
          </Pane>
        }
      >
        <Pane
          elevation={3}
          background="white"
          borderRadius="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar src={user.image} id="test-u-img" className="user-image" size={48} cursor="pointer" />
        </Pane>
      </Popover>
    </Pane>
  )
}

export default User
