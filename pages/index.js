import { motion } from "framer-motion";
import PageAnimation from "components/PageAnimation";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const Support = () => {
  return (
    <div className="support-div">
      <p className="support-note">Want to connect ? Schedule a call with me</p>
      <div className="support-wrapper">
        <a className="support" href="https://calendly.com/ezedinirudaniel/meeting" target="_blank"><PhoneCall className="w-8 h-8" /></a>
        <div className="ping"></div>
      </div>
    </div>
  )

}


const Home = () => {

  return (
    <div>
      <PageAnimation />
      <main className="body">


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

              <h2>Fullstack Developer and Product Designer</h2>

              <div className="cta">
                <Link href="/portfolio" target="_blank" className="cv">View My Works</Link>

                <Link href="/contact" className="cv">Contact Me</Link>
              </div>


              <div className="mobile-social">
                <a href="https://www.linkedin.com/in/danielbryte/" target="_blank">
                  <Image src="/socials/linkedin.svg" width="25" height="25" alt="linkedin" priority />
                </a>
                <a href="https://twitter.com/amdanielbryte" target="_blank">
                  <Image src="/socials/twitter.svg" width="25" height="25" alt="Twitter"  priority />
                </a>
                <a href="https://www.behance.net/amdanielbryte" target="_blank">
                  <Image src="/socials/behance.svg" width="25" height="25" alt='Behance' priority />
                </a>
                <a href="https://github.com/DanielBryte" target="_blank">
                  <Image src="/socials/github.svg" width="25" height="25" alt="Github" priority />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
        <Support />
      </main>
    </div>
  )
}


export default Home