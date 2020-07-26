import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout about>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section className={utilStyles.marginTop3rem}>
        <img src="/images/me.jpg" style={{margin: "0 auto", maxWidth:"12rem", borderRadius: '9999px'}}/>
        <p>I hail from the <a href="https://en.wikipedia.org/wiki/Coimbatore" target="_blank">manchester of south india</a> and lived there for the most part of my life. I moved to Singapore when I got the chance to pursue a master's degree at the National University of Singapore which I've recently graduated from.</p>
        <p>I have strong experience in building web applications with HTML, CSS and Javascript and React. I thrive on writing accessible, performant and tested code and have a good eye for detail. I love to experiment and always keep upto date with new advancements in the field.</p>
        <p>I've previsouly worked at companies like Oracle, Beautiful Code and Streetsine SRX. I'm actively looking for my next role. If you're hiring, please get in touch with me!</p>

        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <a href="/VishaagSuriyanarayananResume.pdf" target="_blank" class={utilStyles.button}>Get my Resume</a>
        </div>

        <p>Apart from programming, I like conversations around life, purpose, philosophy and travel. In an alternate universe if I hadn't gone into programming, I would've probably become a pizza chef. Here's a picture of the first ever pizza I made last year.</p>
        <img src="/images/pizza.jpg" className={utilStyles.bigImage}/>

        <p>I also love the outdoors, although I really don't go out as often as I'd want to, and the current situation isn't making it any easier. Here's a picture of me standing somewhere in Nusa Penida, Indonesia last year in December.</p>
        <img src="/images/travel.jpg" className={utilStyles.bigImage}/>
      </section>
      
    </Layout>
  )
}
