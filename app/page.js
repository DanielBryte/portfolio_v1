"use client";

import { motion } from "framer-motion";
import PageAnimation from "components/PageAnimation";
import HomeImg from "public/home-img.png";
import Image from "next/image";

export default function Home() {

  
  return (
    <>
<PageAnimation/>

      <main className="body">
        <div className="img-wrap">
        <Image
      className="home-img"
          width="100%"
          height="100%"
          priority
          lazy
          placeholder="blur"
          src={HomeImg}
          blurDataURL="LJDT9WMxlVt7?wkCXTtR%Ma|V?of"
          />
        </div>

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
