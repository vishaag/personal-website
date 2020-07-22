import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const firstName = 'Vishaag'
const lastName = 'Suriyanarayanan'
export const siteTitle = 'Vishaag\'s Space on the Web'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerIntroSide}>
          <img
            src="/images/feather1.png"
            className={styles.headerIntroImage}
            alt='logo'
          />
          <h1 className={utilStyles.headingLg}>{firstName} <span className={utilStyles.lightText}>{lastName}</span></h1>
          <p className={`${utilStyles.textSm} ${styles.headerIntroText}`}>is a Computer Science Engineer with a focus on front-end engineering and currently based in Sunny Singapore</p>
        </div>
        <div className={styles.headerNavSide}>
          <ul className={styles.headerLinksList}>
            <li className={styles.headerLinksListItem}>
              <Link href="/work">
                <a>work</a>
              </Link>
            </li>
            <li className={styles.headerLinksListItem}>
              <Link href="/blog">
                <a>blog</a>
              </Link></li>
            <li className={styles.headerLinksListItem}>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
