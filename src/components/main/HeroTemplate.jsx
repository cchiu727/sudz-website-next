import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/main/HeroTemplate.module.css';
import classNames from 'classnames';

export default function HeroTemplate({ imageURL, headerText, subtitleText, coaURL, coaButtonText, coaSubtitleText}) {
    return (
        <div className={classNames(styles.hero, 'container')}>
            <div className={classNames(styles.heroContainer, 'subcontainer')}>
                <div className={styles.heroImageContainer}>
                    {/* <Image src={ '/bubbles.svg' } alt="Background bubbles graphic" width="200" height="200" unoptimized className={styles.heroBackgroundImage} /> */}
                    <Image src={ imageURL } alt="Placeholder" width="360" height="240" unoptimized className={styles.heroImage} />
                </div>
                <div className={styles.heroContentContainer}>
                    <p className={classNames(styles.heroHeader, 'header-lg')}>{headerText}</p>
                    <p className={classNames(styles.heroSubtitle, 'subtitle-md')}>{subtitleText}</p>
                    <div className={styles.coaContainer}>
                        <Link href={coaURL} className={classNames(styles.coaButton, 'button')}>{coaButtonText}</Link>
                        <p className={styles.coaSubtitle}><em>{coaSubtitleText}</em></p>
                    </div>
                </div>
            </div>
        </div>
    );
}