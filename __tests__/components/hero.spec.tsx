import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders Hero component', () => {
    const { heroWrapper, props } = shallowSetup()
    expect(heroWrapper.find('#test-h-title').text()).toEqual(props.content.title)
    expect(heroWrapper.find('#test-h-para').text()).toEqual(props.content.body)
  })
})
