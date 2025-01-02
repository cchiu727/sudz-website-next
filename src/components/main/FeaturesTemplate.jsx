import Image from 'next/image';

import classNames from 'classnames';

import styles from '@/components/main/FeaturesTemplate.module.css';

export default function FeaturesTemplate() {
    return (
        <div className={classNames(styles.features, 'container')}>
            <div className={classNames(styles.featuresContent, 'subcontainer')}>
                <p className='header-lg'>Our Specialties</p>
                <div className={styles.featuresContainer}>
                    <div className={styles.feature}>
                        <div className={styles.featureHeaderContainer}>
                            <div className={styles.featureIconContainer}>
                                <Image src='/fluff-fold-icon.svg' alt="Neatly folded clothes graphic" width='100' height='100' className={styles.featureIcon} />
                            </div>
                            <p className='header-md'>Professional Fluff & Fold</p>
                        </div>
                        <p className='subtitle-md'>
                            Drop off your laundry and let us handle the rest.
                            Let us know how you want your laundry washed, dried, and packaged!
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureHeaderContainer}>
                            <Image src='/clean-icon.svg' alt='Bucket of cleaning supplies next to a broom graphic' width='100' height='100' className={styles.featureIcon} />
                            <p className='header-md'>Cleanliness Guaranteed</p>
                        </div>
                        <p className='subtitle-md'>
                            Our attendants' number one priority is to make sure machines
                            and folding tables are kept clean and ready for you.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureHeaderContainer}>
                            <Image src='/delivery-icon.svg' alt='Delivery van graphic' width='100' height='100' className={styles.featureIcon} />
                            <p className='header-md'>Pickup and Delivery</p>
                        </div>
                        <p className='subtitle-md'>
                            Our convenient laundry pickup and delivery service gets your laundry 
                            clean right at your door!See pricing for more details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}