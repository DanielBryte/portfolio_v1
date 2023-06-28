import Image from 'next/image'
import Link from 'next/link'


const Socials = () => {
    return (
        <main className='cta'>
            <div className="mail">
                <p>Mail</p>
                <Link href="mailto:ezedinirudaniel@gmail.com"><p>ezedinirudaniel@gmail.com</p>
                </Link>
            </div>

            <div className="social">
                <p>Follow</p>
                <a href="https://www.linkedin.com/in/danielbryte/">
                    <Image src="/socials/linkedin.svg" width="25" height="25" alt='Linkedin' priority />
                </a>
                <a href="https://twitter.com/amdanielbryte">
                    <Image src="/socials/twitter.svg" width="25" height="25" alt='Twitter'priority />
                </a>
                <a href="https://www.instagram.com/amdanielbryte/">
                    <Image src="/socials/instagram.svg" width="25" height="25" alt='Instagram'priority />
                </a>
                <a href="https://github.com/DanielBryte">
                    <Image src="/socials/github.svg" width="25" height="25" alt='Github'priority />
                </a>
            </div>
        </main>
    )
}

export default Socials