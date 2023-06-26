"use client";


import Head from 'next/head'
import Filter from '/components/Filter'
import { motion } from 'framer-motion'
import Footer from '/components/Footer'


const index = () => {
    return (
        <>
            <Head>
                <title>My Works</title>
                <meta name="description" content="@amdanielbryte" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <motion.main className='portfolio'
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    duration: 0.75,

                }}
            >
                <section className="section">

                    <div className="section-heading">
                        <h1>My Portfolio</h1>
                        <h2>This comprises my works in tech, from content creation to web, mobile development, AI/ML, and UI/UX design, not limited all listed here ;)</h2>
                    </div>

                    <Filter />
                </section>
            </motion.main>
            <Footer />
        </>
    )
}

export default index