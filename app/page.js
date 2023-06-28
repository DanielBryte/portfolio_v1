"use client";

import { motion } from "framer-motion";
import PageAnimation from "components/PageAnimation";
import HomeBg from "public/home-bg.svg";
import Image from "next/image";

export default function Home() {

  
  return (
    <>
<PageAnimation/>

      <main className="body">
      <Image
      className="home-bg"
          width="100vw"
          height="100vh"
          src={HomeBg}
          style={{
            priority: true,
            position: 'fixed',
           }}
          />
        <motion.section
          className="home"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.0,
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
