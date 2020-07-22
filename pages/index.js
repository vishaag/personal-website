import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTop3rem}`}>
         <h2 className={utilStyles.headingMd}>things I've been working on..</h2>
         <ul className={`${utilStyles.list} ${utilStyles.imageList}`}>
           <li>
             <img src="https://picsum.photos/300/200" />
           </li>
           <li>
             <img src="https://picsum.photos/300/200" />
           </li>
           <li>
             <img src="https://picsum.photos/300/200" />
           </li>
         </ul>
        {/* <Link > */}
          <a style={{float: 'right'}} className={utilStyles.link}>see more work →</a>
        {/* </Link> */}
      </section>
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
        <a style={{float: 'right'}} className={utilStyles.link}>see more posts →</a>
      </section>
    </Layout>
  )
}
