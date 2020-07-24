import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTop3rem}`}>
        <h2 className={utilStyles.headingMd}>hi! 👋</h2>
        <p>I'm a computer science engineer with a focus on front-end engineering. I love working with the latest front-end tools and keeping myself updated with the ecosystem. I'm actively looking for my next role, so if you're hiring, you can <a href="/VishaagSuriyanarayananResume.pdf" target="_blank">checkout my resume.</a></p>
      </section>
      
    </Layout>
  )
}
