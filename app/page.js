"use client";
import Head from "next/head";
import { motion } from "framer-motion";




export default function Home({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/home-bg.svg" as="image" />
      </Head>

      <main className="body" style={{
        backgroundImage: 'url("/home-bg.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        priority: true,
      }}>
        <motion.section
          className="home"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.7,
            duration: 0.75,

          }}
        >
          <div className="home">
            <div className="profile">

              <h1>Daniel Ezediniru</h1>

              <h2>I DESIGN I CODE I BUILD</h2>

            </div>
          </div>
        </motion.section>
      </main>
    </>
  )
}
