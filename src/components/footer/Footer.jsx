import Link from 'next/link';
import Image from 'next/image';

import classNames from 'classnames';
import styles from '@/components/footer/Footer.module.css';

export default function Footer() {
    return (
        <footer className={classNames(styles.footer, 'container')}>
            <div className={styles.footerFlexContainer}>
                <div className={classNames(styles.footerAboutUs, "subcontainer")}>
                    <Image src={`/square-logo.svg`} alt="Sudz Laundry House Logo" width="90" height="90" unoptimized />
                    <h2 className={styles.footerHeader}>About Us</h2>
                    <p>Serving the Los Angeles and Orange County area for the last 15 years for your everyday laundry needs.</p>
                </div>
                <div className={classNames(styles.footerLocations, "subcontainer")}>
                    <h2 className={styles.footerHeader}>Locations</h2>
                    <div className={styles.locationsContainer}>
                        <div className={styles.locationContainer}>
                            <h3>La Habra</h3>
                            <div className={styles.locationAddress}>
                                <p>
                                    1905 W La Habra Blvd<br />
                                    La Habra, CA 90631
                                </p>
                                <a href="http://maps.apple.com/?daddr=1905+W+La+Habra+Blvd,+La+Habra+CA" target="_blank">Get Directions</a>
                            </div>
                            <div className={styles.locationHours}>
                                <p>Open Everyday: <br /><strong>5:00 AM - 10:00 PM</strong></p>
                                <p>Last Wash: <strong>8:30 PM</strong></p>
                            </div>
                            <div className={styles.locationPhone}>
                                <a href="tel:562-691-0115">(562) 691-0115</a>
                            </div>
                        </div>
                        <div className={styles.locationContainer}>
                            <h3>Pico Rivera</h3>
                            <div className={styles.locationAddress}>
                                <p>
                                    8739 Whittier Blvd<br />
                                    Pico Rivera, CA 90660
                                </p>
                                <a href="http://maps.apple.com/?daddr=8739+Whittier+Blvd,+Pico+Rivera+CA" target="_blank">Get Directions</a>
                            </div>
                            <div className={styles.locationHours}>
                                <p>Open Everyday: <br /><strong>5:00 AM - 10:00 PM</strong></p>
                                <p>Last Wash: <strong>8:30 PM</strong></p>
                            </div>
                            <div className={styles.locationPhone}>
                                <a href="tel:562-821-5103">(562) 821-5103</a>
                            </div>
                        </div>
                        <div className={styles.locationContainer}>
                            <h3>Covina</h3>
                            <div className={styles.locationAddress}>
                                <p>
                                    20530 E Arrow Hwy Unit B<br />
                                    Covina, CA 91724
                                </p>
                                <a href="http://maps.apple.com/?daddr=20530+E+Arrow+Hwy,+Covina+CA" target="_blank">Get Directions</a>
                            </div>
                            <div className={styles.locationHours}>
                                <p>Open Everyday: <br /><strong>5:00 AM - 10:00 PM</strong></p>
                                <p>Last Wash: <strong>8:30 PM</strong></p>
                            </div>
                            <div className={styles.locationPhone}>
                                <a href="tel:626-404-2854">(626) 404-2854</a>
                            </div>
                        </div>
                    </div>             
                </div>
                <div className={classNames(styles.footerLinks, "subcontainer")}>
                    <h2 className={styles.footerHeader}>Links</h2>
                    <ul className={styles.linkContainer}>
                        <li><Link href="/" className={styles.footerLink}>Home</Link></li>
                        <li><Link href="/services.html" className={styles.footerLink}>Services</Link></li>
                        <li><Link href="/pricing.html" className={styles.footerLink}>Pricing</Link></li>
                        <li><Link href="/locations.html" className={styles.footerLink}>Locations</Link></li>
                        <li><Link href="/contact-us.html" className={styles.footerLink}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className={classNames(styles.copyright, "subcontainer")}>
                <p>&#169; Sudz Laundry House 2024</p>
            </div>
        </footer>
    );
}