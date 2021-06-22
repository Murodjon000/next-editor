import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders FolderListcomponent', () => {
    const { folderListWrapper, props } = shallowSetup()
    expect(folderListWrapper.find('#test-fl-name').text()).toEqual(props.folder.name)
  })
})
