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
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="Vishaag's Space on the Web"
        />
        <meta
          property="og:image"
          content="https://vishaag.com/images/socialCard.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerIntroSide}>
          <Link href="/">
            <img
              src="/images/feather1.png"
              className={styles.headerIntroImage}
              alt='logo'
            />
          </Link> 
          <h1 className={utilStyles.headingLg}>{firstName} <span className={utilStyles.lightText}>{lastName}</span></h1>
          <p className={`${utilStyles.textSm} ${styles.headerIntroText}`}>is a front-end developer based in Sunny Singapore and is passionate about creating elegant and impactful products.</p>
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
        <div className={utilStyles.link}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <div className={styles.footerIntroSide}>
          <img
            src="/images/feather2.png"
            className={styles.footerImage}
            alt='a variation of the main logo, a feather'
          />
          <h1 className={`${utilStyles.headingLg} ${styles.footerText}`}><span className={utilStyles.lightText}>Get in</span> touch?</h1>
          <p className={`${utilStyles.textSm} ${styles.footerText}`}>If you want to pick my head about web developement, or about living in Singapore, or anything, feel free to get in touch 🤗</p>
        </div>
        <div className={styles.footerNavSide}>
          <div className={styles.footerLinks}>
            <a href="mailto:vishaag@gmail.com" target="_blank" rel="noopener">
              <img
                src="/images/mail.png"
                className={styles.footerNavLogo}
                alt='E-mail logo link'
              />
            </a>
            <a href="https://twitter.com/vishaag" target="_blank" rel="noopener">
              <img
                src="/images/twitter.png"
                className={styles.footerNavLogo}
                alt='Twitter logo link'
              />
            </a>

            <a href="https://github.com/vishaag" target="_blank" rel="noopener">
              <img
                src="/images/github.png"
                className={styles.footerNavLogo}
                alt='Github logo link'
              />
            </a>

            <a href="https://www.linkedin.com/in/vishaag/" target="_blank" rel="noopener">
              <img
                src="/images/linkedin.png"
                className={styles.footerNavLogo}
                alt='linkedIn logo link'
              />
            </a> 
          </div>   
          <span className={styles.email}>vishaag@gmail.com</span>
        </div>
      </footer>
    </div>
  )
}
