'use client';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/navbar/Navbar.module.css';
import classNames from 'classnames';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(`toggle menu - state: ${isMenuOpen}`);
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav>
            <div className={classNames(styles.navbar, 'container')}>
                <div className={styles.navLeft}>
                    <a href="/">
                        <Image src={`/banner-logo-green.jpg`} alt="Sudz Laundry House" width="165" height="40" unoptimized className={styles.bannerLogo}/>
                    </a>
                </div>
                <div className={styles.navRight}>
                    <ul className={classNames(styles.navLinkContainer, { [styles.open]: isMenuOpen })}>
                        <li><a href="/" className={styles.navLink}>Home</a></li>
                        <li><a href="/services.html" className={styles.navLink}>Services</a></li>
                        <li><a href="/pricing.html" className={styles.navLink}>Pricing</a></li>
                        <li><a href="/locations.html" className={styles.navLink}>Locations</a></li>
                        <li><a href="/contact-us.html" className={styles.navLink}>Contact Us</a></li>
                    </ul>
                    <button className={styles.menuToggle} onClick={toggleMenu}><span className="material-icons">{ isMenuOpen ? 'close' : 'menu'}</span></button>
                </div>
            </div>
        </nav>
    );
}