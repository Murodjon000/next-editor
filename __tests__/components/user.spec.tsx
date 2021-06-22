import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import User from '../../components/user'
import Logo from '../../components/logo'
import Hero from '../../components/hero'
import HomeNav from '../../components/homeNav'
import Footer from '../../components/footer'
import FolderPane from '../../components/folderPane'
import DocPane from '../../components/docPane'
import FolderList from '../../components/folderList'
import PostPreview from '../../components/postPreview'
import FeautureSection from '../../components/feautureSection'

configure({ adapter: new Adapter() })

export const shallowSetup = () => {
  const props = {
    user: {
      id: '125',
      name: 'John',
      email: 'john@gmail.com',
      image: 'https://image.com',
    },
    content: {
      title: 'Next editor',
      body: 'Make your life easy with NextEditor',
    },
    links: [{ name: 'Blog', link: '/blog' }],
    folder: { name: 'Daily', _id: '1452' },
    doc: { name: 'Doc1', _id: '452', folder: '1452' },
    docs: [{ name: 'Doc1', _id: '452', folder: '1452' }],
    folders: [{ name: 'Daily', _id: '1452' }],
    post: {
      title: 'Test post',
      slug: 'test-post',
      summary: 'good for testing',
    },
    feature: {
      title: 'Next title',
      body: 'Next body',
      image: '/doc.png',
      invert: 1 % 2 == 0,
    },
  }

  const userWrapper = shallow(<User user={props.user} />).dive()
  const aboutWrapper = shallow(<Logo />).dive()
  const heroWrapper = shallow(<Hero content={props.content} />).dive()
  const navWrapper = shallow(<HomeNav links={props.links} />)
  const footerWrapper = shallow(<Footer />)
  const folderPaneWrapper = shallow(<FolderPane folder={props.folder} docs={props.docs} />).dive()
  const docPaneWrapper = shallow(<DocPane folder={props.folder} doc={props.doc} />).dive()
  const folderListWrapper = shallow(<FolderList folders={props.folders} />).dive()
  const postPreviewWrapper = shallow(<PostPreview post={props.post} />).dive()
  const feautureSectionWrapper = shallow(<FeautureSection {...props.feature} />).dive()

  return {
    props,
    userWrapper,
    aboutWrapper,
    heroWrapper,
    navWrapper,
    footerWrapper,
    folderPaneWrapper,
    folderListWrapper,
    docPaneWrapper,
    postPreviewWrapper,
    feautureSectionWrapper,
  }
}

test('should render User component', () => {
  const { userWrapper } = shallowSetup()

  expect(userWrapper.find('#test-u-pop').hasClass('user-pop')).toBe(true)
  expect(userWrapper.find('#test-u-img').hasClass('user-image')).toBe(true)
})
