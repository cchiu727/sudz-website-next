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
        <nav className={classNames(styles.navbar, 'container')}>
            <div className={styles.navLeft}>
                <Link href="/">
                    <Image src={`/banner-logo-green.jpg`} alt="Sudz Laundry House Logo" width="165" height="40" unoptimized className={styles.bannerLogo}/>
                </Link>
            </div>
            <div className={styles.navRight}>
                <ul className={classNames(styles.navLinkContainer, { [styles.open]: isMenuOpen })}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    <li><Link href="" className={styles.navLink}>Services</Link></li>
                    <li><Link href="/pricing" className={styles.navLink}>Pricing</Link></li>
                    <li><Link href="/locations.html" className={styles.navLink}>Locations</Link></li>
                    <li><Link href="/contact-us" className={styles.navLink}>Contact Us</Link></li>
                </ul>
                <button className={styles.menuToggle} onClick={toggleMenu}><span className="material-icons">{ isMenuOpen ? 'close' : 'menu'}</span></button>
            </div>
    </nav>
    );
}