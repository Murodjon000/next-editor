import React, { useState } from 'react'
import { Dialog, TextInput } from 'evergreen-ui'

const NewFolderDialog = ({ onNewFolder, close, ...props }) => {
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)

  const handleNewFolder = async () => {
    setSaving(true)
    await onNewFolder(name)
    setSaving(false)
    setName('')
    close()
  }

  return (
    <Dialog
      {...props}
      title="New folder"
      confirmLabel="Create"
      intent="success"
      onConfirm={handleNewFolder}
      isConfirmLoading={saving}
      onCancel={close}
      onCloseComplete={close}
    >
      <TextInput width="100%" value={name} onChange={(e) => setName(e.target.value)} placeholder="Folder name" />
    </Dialog>
  )
}

export default NewFolderDialog
