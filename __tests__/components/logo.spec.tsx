import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders Logo component"', () => {
    const { aboutWrapper } = shallowSetup()
    expect(aboutWrapper.find('strong').text()).toEqual('NextEditor')
  })
})
