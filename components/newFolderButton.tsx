import React, { FC } from 'react'
import { Pane, Icon, Tooltip, PlusIcon } from 'evergreen-ui'

const NewFolderButton: FC<{ onClick: any; tooltip?: string; size?: number }> = ({ onClick, tooltip, size }) => {
  return (
    <Tooltip content={tooltip}>
      <Pane onClick={onClick}>
        <Icon icon={PlusIcon} size={size} cursor="pointer" />
      </Pane>
    </Tooltip>
  )
}

NewFolderButton.defaultProps = {
  tooltip: 'New Folder',
  size: 42,
}

export default NewFolderButton
