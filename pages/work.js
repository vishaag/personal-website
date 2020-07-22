import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Work({ allPostsData }) {
  return (
    <Layout work>
      <Head>
        <title>Work - {siteTitle}</title>
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
      </section>
    </Layout>
  )
}
