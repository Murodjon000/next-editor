import { shallowSetup } from './user.spec'

describe('With Enzyme', () => {
  it('renders PostPreview component', () => {
    const { postPreviewWrapper, props } = shallowSetup()
    expect(postPreviewWrapper.find('#test-post-title').text()).toEqual(props.post.title)
    expect(postPreviewWrapper.find('#test-post-para').text()).toEqual(props.post.summary)
  })
})
