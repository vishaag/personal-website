import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  console.log(allPostsData)

  return (
    <Layout blog>
      <Head>
        <title>Blog - {siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTop3rem}`}>
        <h2 className={utilStyles.headingMd}>things I've been writing about..</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a className={utilStyles.featherColor}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
