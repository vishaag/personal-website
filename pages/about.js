import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout about>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTop3rem}`}>
        <img src="/images/me.jpg" style={{margin: "0 auto", maxWidth:"12rem", borderRadius: '9999px'}}/>
        <h2 className={utilStyles.headingMd}>hi! 👋</h2>
        <p>I'm a computer science engineer with a focus on front-end engineering. I love working with the latest front-end tools and keeping myself updated with the ecosystem. I'm actively looking for my next role, so if you're hiring, please get in touch with me! You can find my <a href="/VishaagSuriyanarayananResume.pdf" target="_blank">my resume here.</a></p>
        <p>Apart from programming, I like conversations around life, purpose, philosophy and travel. In an alternate universe if I hadn't gone into programming, I would've probably become a pizza chef. Here's a picture of the first ever pizza I made last year.</p>
        <img src="/images/pizza.jpg"  style={{margin: "0 auto", maxWidth:"32rem"}}/>
        <p>I also love the outdoors, although I really don't go out as often as I'd want to, and the current situation isn't making it any easier. Here's a picture of me standing somewhere in Nusa Penida, Indonesia last year December. Ping me if you wanna know where this is 😉.</p>
        <img src="/images/travel.jpg" style={{margin: "0 auto", maxWidth:"32rem"}}/>
      </section>
      
    </Layout>
  )
}
