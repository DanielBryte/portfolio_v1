"use client";
import Filter from '/components/Filter'
import { motion } from 'framer-motion'
import Footer from '/components/Footer'
import PageAnimation from "components/PageAnimation";


const Index = () => {
    return (
        <>
        <PageAnimation/>
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

export default Index