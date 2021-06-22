import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders FolderPane component', () => {
    const { feautureSectionWrapper } = shallowSetup()
    expect(feautureSectionWrapper.find('#test-fl-pane').hasClass('feauture-section')).toBe(true)
  })
})
