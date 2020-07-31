import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Work() {
  return (
    <Layout work>
      <Head>
        <title>Work - {siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTop3rem}`}>
         <h2 className={utilStyles.headingMd}>things I've been working on..</h2>
         <ul className={`${utilStyles.list} ${utilStyles.cardList}`}>
           <li>
            <a className={utilStyles.card} href="https://guess-that-logo.now.sh/" target="_blank" rel="noopener">
                <h3>Guess That Logo</h3>
                <p>You need to guess all the logos in 30 secs. Can you do it? Built with Next.js 9.4</p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://youtu.be/8pJV7OvZIZU" target="_blank" rel="noopener">
                <h3>CSS Bytes</h3>
                <p>A new Youtube Series where I make short, concise, educative videos about CSS</p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://github.com/vishaag/MagicWand" target="_blank" rel="noopener">
                <h3>Magic Wand</h3>
                <p>Swish & Flick your smartphone to press buttons on your keyboard. Built with React Native & some ML</p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://scoreboardoverlay.now.sh/" target="_blank" rel="noopener">
                <h3>SVG Overlay</h3>
                <p>What if sport scoreboard overlays could be done with SVG animations? Built with Greensock & React.js </p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://github.com/vishaag/dialogflow-airtable-example" target="_blank" rel="noopener">
                <h3>Chatbot Example</h3>
                <p>An example to demonstrate how you can use Airtable as the database for a dialogflow chatbot.</p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://www.youtube.com/watch?v=DLyNaq7eSQc&feature=youtu.be" target="_blank" rel="noopener">
                <h3>Intelliship</h3>
                <p>E-commerce site demo with Moltin & Next.js.</p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://github.com/vishaag/siaAssist" target="_blank" rel="noopener">
                <h3>Sia Assist</h3>
                <p>Intelligent Personal Airport Assistant Chatbot for Changi Airport.</p>
             </a>
           </li>
           <li>
            <a className={utilStyles.card} href="https://pomodoro-zeta.vercel.app/" target="_blank" rel="noopener">
                <h3>Pomodoro</h3>
                <p>A simple 25 minute timer based on the pomodoro technique.</p>
             </a>
           </li>
         </ul>
      </section>
    </Layout>
  )
}
