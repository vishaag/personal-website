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
        <img src="/images/me.jpg" alt="A picture of Vishaag" style={{margin: "0 auto", maxWidth:"12rem", borderRadius: '9999px'}}/>
        <p>I hail from the <a href="https://en.wikipedia.org/wiki/Coimbatore" target="_blank" rel="noopener">manchester of south india</a> and lived there for the most part of my life. I moved to Singapore when I got the chance to pursue a master's degree at the National University of Singapore which I've recently graduated from.</p>
        <p>I have strong experience building web applications with HTML, CSS, Javascript and React among other technologies. I strive to write accessible, performant, tested code and have a good eye for detail. I love to experiment and always keep upto date with new advancements in the field.</p>
        <p>I currently work as a front-end developer at <a href="https://www.bandlab.com/" target="_blank" rel="noopener">BandLab</a> and I've previously worked at <a href="https://www.oracle.com/industries/construction-engineering/products/" target="_blank" rel="noopener">Oracle</a>, <a href="https://www.beautifulcode.co/" target="_blank" rel="noopener">Beautiful Code</a> & <a href="https://www.srx.com.sg/" target="_blank" rel="noopener">Streetsine SRX</a>.</p>

        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <a href="/VishaagSuriyanarayananResume.pdf" target="_blank" rel="noopener" className={utilStyles.button}>Get my Resume</a>
        </div>

        <p>Apart from programming, I like conversations around life, purpose, philosophy and travel. In an alternate universe if I hadn't gone into programming, I would've probably become a pizza chef. Here's a picture of the first ever pizza I made last year.</p>
        <img src="/images/pizza.jpg" alt="A picture of the first pizza I made last year"className={utilStyles.bigImage}/>

        <p>I also love the outdoors, although I really don't go out as often as I'd want to, and the current situation isn't making it any easier. Here's a picture of me standing somewhere in Nusa Penida, Indonesia last year in December.</p>
        <img src="/images/travel.jpg" alt="A picture of me standing near a cliff in Nusa Penida, Indonesia"className={utilStyles.bigImage}/>
      </section>
      
    </Layout>
  )
}
