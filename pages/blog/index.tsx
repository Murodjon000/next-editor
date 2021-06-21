import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import orderby from 'lodash.orderby'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import PostPreview from '../../components/postPreview'

const Blog = ({ posts }) => {
  return (
    <Pane>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container paddingX={majorScale(2)}>
          {posts.map((post) => (
            <Pane key={post.title} marginY={majorScale(5)}>
              <PostPreview post={post} />
            </Pane>
          ))}
        </Container>
      </main>
    </Pane>
  )
}

export function getStaticProps() {
  const postPath = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postPath)
  const filePosts = fileNames.map((file) => {
    const fullPath = path.join(postPath, file)
    return fs.readFileSync(fullPath, 'utf-8')
  })

  const posts = orderby(
    [...filePosts].map((post) => {
      const { data } = matter(post)
      return data
    }),
    ['publishedOn'],
    ['desc'],
  )

  return {
    props: { posts: posts },
  }
}

export default Blog
