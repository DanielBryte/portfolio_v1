import { motion } from "framer-motion";
import PageAnimation from "components/PageAnimation";
import HomeImg from "/public/home-img.png";
import Image from "next/image";
import Link from "next/link";


const Home = () => {


  return (
    <div>
      <PageAnimation />

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
            alt="Ezediniru Daniel"
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

              <div className="cta">
                <Link href="/CV.pdf" target="_blank" className="cv">View My CV</Link>

                <Link href="/contact" className="cv">Contact Me</Link>
              </div>


              <div className="mobile-social">
                <a href="https://www.linkedin.com/in/danielbryte/" target="_blank">
                  <Image src="/socials/linkedin.svg" width="25" height="25" alt="linkedin" target="_blank" priority/>
                </a>
                <a href="https://twitter.com/amdanielbryte">
                  <Image src="/socials/twitter.svg" width="25" height="25" alt="Twitter" target="_blank" priority/>
                </a>
                <a href="https://www.behance.net/amdanielbryte" target="_blank">
                    <Image src="/socials/behance.svg" width="25" height="25" alt='Behance' priority />
                </a>
                <a href="https://github.com/DanielBryte">
                  <Image src="/socials/github.svg" width="25" height="25" alt="Github" target="_blank" priority/>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}


export default Home