"use client";

import Social from "/components/Socials";
import "/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";


export default function RootLayout({ children }) {

  const pathname = usePathname()

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleCheckboxChange = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
      <html lang="en">
      <Head>
        <title>Ezediniru Daniel</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <meta name="description" content="Ezediniru Daniel || @amdanielbrytre"/>
      </Head>
    
        <AnimatePresence mode="wait">
          <motion.body
            key={pathname.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
            style={{
              backgroundImage: 'url("/background.svg")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          >              <header className="header">
              <nav className='navbar'>
                <Link href="/" className="logo">
                  <Image src="logo.svg" width="61" height="40" />
                </Link>



                <div class="hamburger">
                  <input type="checkbox" name="" id="hamburgerCheckbox" checked={isMenuOpen}
                    onChange={handleCheckboxChange} />
                  <label class="hamburger-lines" htmlFor="hamburgerCheckbox">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                  </label>
                </div>
              </nav>
            </header>

            <nav className={`dropdown-nav ${isMenuOpen ? 'open' : ''}`}>
              <p className='nav-links'>
                <Link href="/" onClick={handleCheckboxChange} className={`nav-close ${isMenuOpen ? 'nav-open' : ''}`}>Home</Link>
                <Link href="/about" onClick={handleCheckboxChange} className={`nav-close ${isMenuOpen ? 'nav-open' : ''}`}>About</Link>
                <Link href="/portfolio" onClick={handleCheckboxChange} className={`nav-close ${isMenuOpen ? 'nav-open' : ''}`}>Portfolio</Link>
                <Link href="/contact" onClick={handleCheckboxChange} className={`nav-close ${isMenuOpen ? 'nav-open' : ''}`}>Contact</Link>
              </p>
            </nav>


            <Social />
            {children}
            <div className="container">
              <div
                className="joinLeft"
              >
                Ezedi
              </div>
              <div
                className="joinRight"
              >
                niru
              </div>
            </div>

          </motion.body>
        </AnimatePresence>
      </html >
  )
}
