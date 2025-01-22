import Image from "next/image";

import classNames from "classnames";
import styles from '@/app/special-offer/page.module.css';

import Header from '@/components/header/Header';
import HeroTemplate from "@/components/main/HeroTemplate";

export default function SpecialOffer() {
    return (
        <>
            <HeroTemplate 
                imageURL={'special-offer-hero-sparks.png'}
                headerText={'New Customer Discount!'}
                subtitleText={'Interested in our Fluff & Fold Service? Try it out now for $5 off your first order!*'}
                coaURL={'#how-to-redeem'}
                coaButtonText={'See How to Redeem'}
                coaSubtitleText={'*Offer is only valid for customers that do not have a pre-existing Fluff & Fold account'}
            />
            <div className={classNames(styles.specialOffer, 'container')}>
                <div className={classNames(styles.specialOfferContent, 'subcontainer')}>
                    {/* <Header headerTitle={'Special Offer'} /> */}
                    <h1 id='redeem-header'>How to Redeem</h1>
                    <p className='subtitle-md'>Show this coupon to one of our attendants, and we will apply the discount to your next order!</p>
                    <div className={classNames(styles.couponContainer, 'subcontainer')}>
                        <Image className={styles.couponImage} src='/new-customer-coupon.png' width='1000' height='323' alt='Coupon advertising a $5 off discount for new customer fluff & fold orders' unoptimized />
                        <div className={styles.couponButtonsContainer}>
                            {/* <a href='@/public/new-customer-coupon.png' download='new-customer-coupon.png'>Download</a> */}
                        </div>
                        <p className='subtitle-sm'>
                            * This coupon applies to <strong>new</strong> customers only <br />
                            * One-time use per customer <br />
                            * Redeemable at select locations
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}