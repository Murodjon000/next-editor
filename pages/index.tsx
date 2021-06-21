import React, { FC } from 'react'
import { Pane } from 'evergreen-ui'
import Container from '../components/container'
import HomeNav from '../components/homeNav'
import Hero from '../components/hero'
import { home } from '../content'
import FeatureSection from '../components/feautureSection'
import Footer from '../components/footer'

const Home: FC<{ content: { hero: any; features: any[] } }> = ({ content }) => {
  return (
    <Pane>
      <header>
        <HomeNav />
        <Container>
          <Hero content={content.hero} />
        </Container>
      </header>
      <main>
        {content.features.map((f, i) => (
          <FeatureSection key={f.title} title={f.title} body={f.body} image="/docs.png" invert={i % 2 == 0} />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </Pane>
  )
}

export function getStaticProps() {
  return {
    props: { content: home.published },
  }
}

export default Home
