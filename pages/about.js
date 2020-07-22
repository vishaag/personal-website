import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      
    </Layout>
  )
}
