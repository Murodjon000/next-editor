import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders DocPane component', () => {
    const { docPaneWrapper, props } = shallowSetup()
    expect(docPaneWrapper.find('#test-doc-name').text()).toEqual(`${props.folder.name}/`)
    expect(docPaneWrapper.find('#test-doc-fname').text()).toEqual(`<Link />${props.doc.name}`)
  })
})
