import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders FolderPane component', () => {
    const { folderPaneWrapper, props } = shallowSetup()
    expect(folderPaneWrapper.find('#test-fp-title').text()).toEqual(props.folder.name)
    expect(folderPaneWrapper.find('#test-fp-btn').text()).toEqual(props.docs[0].name)
  })
})
