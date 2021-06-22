import React, { FC } from 'react'
import { Pane, majorScale, Menu, FolderCloseIcon } from 'evergreen-ui'
import { useRouter } from 'next/router'

const FolderList: FC<{ folders: any[] }> = ({ folders }) => {
  const router = useRouter()
  return (
    <Pane padding={majorScale(2)} background="tint2">
      <Menu>
        {folders.map((folder) => (
          <Menu.Item
            id="test-fl-name"
            key={folder._id}
            icon={FolderCloseIcon}
            onClick={() => router.push(`/app/${folder._id}`)}
          >
            {folder.name}
          </Menu.Item>
        ))}
      </Menu>
    </Pane>
  )
}

FolderList.defaultProps = {
  folders: [],
}

export default FolderList
