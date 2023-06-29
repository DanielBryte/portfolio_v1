"use client";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/logo.svg';

const Nav = () => {
        const pathname = usePathname()

        const [isMenuOpen, setMenuOpen] = useState(false);

        const handleCheckboxChange = () => {
            setMenuOpen(!isMenuOpen);
        };
        return (
            <>
                <header className="header">
                    <nav className='navbar'>
                        <Link href="/" className="logo">
                            <Image src={Logo} className='logo-img' width="60" height="40" alt="logo" priority />
                        </Link>



                        <div class="hamburger">
                            <input type="checkbox" name="checkbox" id="hamburgerCheckbox" aria-label='hamburgerMenu' checked={isMenuOpen}
                                onChange={handleCheckboxChange} />
                            <label class="hamburger-lines" for="hamburgerCheckbox">
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
                </>
        )
    };

    export default Nav