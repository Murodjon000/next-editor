import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders Footer component', () => {
    const { footerWrapper } = shallowSetup()
    expect(footerWrapper.find('#test-f-text').text()).toEqual('© 2021, NextEditor')
  })
})
