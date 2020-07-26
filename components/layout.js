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
          <p className={`${utilStyles.textSm} ${styles.headerIntroText}`}>is computer science engineer based in Singapore who is passionate about front-end engineering and creating elegant and impactful products.</p>
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
        <p className={styles.introTextSm}>I am a computer science engineer based in Singapore who is passionate about front-end engineering and creating elegant and impactful products.</p>
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
            alt='logo'
          />
          <h1 className={`${utilStyles.headingLg} ${styles.footerText}`}><span className={utilStyles.lightText}>Find my</span> work interesting?</h1>
          <p className={`${utilStyles.textSm} ${styles.footerText}`}>I'm currently on the lookout for a new role. If you like my work and think I'd be a good fit in your team, please get in touch!</p>
        </div>
        <div className={styles.footerNavSide}>
          <div className={styles.footerLinks}>
            <a href="mailto:vishaag@gmail.com" target="_blank">
              <img
                src="/images/mail.png"
                className={styles.footerNavLogo}
                alt='logo'
              />
            </a>
            <a href="https://twitter.com/vishaag" target="_blank">
              <img
                src="/images/twitter.png"
                className={styles.footerNavLogo}
                alt='logo'
              />
            </a>

            <a href="https://github.com/vishaag" target="_blank">
              <img
                src="/images/github.png"
                className={styles.footerNavLogo}
                alt='logo'
              />
            </a>

            <a href="https://www.linkedin.com/in/vishaag/" target="_blank">
              <img
                src="/images/linkedin.png"
                className={styles.footerNavLogo}
                alt='logo'
              />
            </a> 
          </div>   
          <span className={styles.email}>vishaag@gmail.com</span>
        </div>
      </footer>
    </div>
  )
}
