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

      <section className={`${utilStyles.headingMd} ${utilStyles.titleTextContainer}`}>
        <h1 className={`${utilStyles.titleText}`}>
          <span><span>Explore</span></span>
          <span><span>Question.</span></span>
          <span><span>Learn.</span></span>
          <span><span>Share.</span></span>
        </h1>
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
        <Link href="/blog">
          <a className={utilStyles.link}>see more posts →</a>
        </Link>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.marginTop3rem}`}>
         <h2 className={utilStyles.headingMd}>things I've been working on..</h2>
         <ul className={`${utilStyles.list} ${utilStyles.cardList}`}>
           <li>
             <a className={utilStyles.card} href="https://guess-that-logo.now.sh/" target="_blank">
                <h3>Guess That Logo</h3>
                <p>You need to guess all the logos in 30 secs. Can you do it? Built with Next.js 9.4</p>
             </a>
           </li>
           <li>
             <a className={utilStyles.card} href="https://github.com/vishaag/MagicWand" target="_blank">
                <h3>Magic Wand</h3>
                <p>Swish & Flick your smartphone to press buttons on your keyboard. Built with React Native & some ML</p>
             </a>
           </li>
           <li>
             <a className={utilStyles.card} href="https://scoreboardoverlay.now.sh/" target="_blank">
                <h3>SVG Overlay</h3>
                <p>What if sport scoreboard overlays could be done with SVG animations? Built with Greensock & React.js </p>
             </a>
           </li>
         </ul>
        <Link href="/work">
          <a className={utilStyles.link}>see more work →</a>
        </Link>
      </section>
    </Layout>
  )
}
