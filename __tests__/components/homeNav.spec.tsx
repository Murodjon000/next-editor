import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders HomeNav component', () => {
    const { navWrapper, props } = shallowSetup()
    expect(navWrapper.find('#test-nav-text').text()).toEqual(props.links[0].name)
  })
})
