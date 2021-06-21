import React, { FC } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
// import { posts } from '../../content'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }

  return (
    <Pane>
      <Head>
        <title>{`NextEditor Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem,8vw,6rem)" lineHeight="clamp(2rem,8vw,6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

export function getStaticPaths() {
  const postsPath = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsPath)
  const slugs = fileNames.map((file) => {
    const filePath = path.join(postsPath, file)
    const postFile = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(postFile)
    return data
  })

  return {
    paths: slugs.map((s) => ({
      params: {
        slug: s.slug,
      },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const postsPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`)
  let post = fs.readFileSync(postsPath, 'utf-8')

  const { data } = matter(post)
  const mdxSource = await renderToString(post, { scope: data })
  return {
    props: { source: mdxSource, frontMatter: data },
  }
}

export default BlogPost
