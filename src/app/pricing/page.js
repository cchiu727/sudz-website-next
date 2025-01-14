import Link from "next/link";

import Header from "@/components/header/Header";
import PricingCard from "@/app/pricing/components/PricingCard"; 
import classNames from "classnames";

import styles from '@/app/pricing/page.module.css';

export default function Pricing() {
    return (
        <>
            <div className={classNames(styles.pricing, 'container')}>
                <div className={classNames(styles.pricingContent, 'subcontainer')}>
                    <Header headerTitle={'Pricing'} />
                    <div className={classNames(styles.pricingContainer, 'subcontainer')}>
                        <h2><strong>Fluff & Fold Services</strong></h2>
                        <p className='subtitle-sm'>
                            Let us handle your laundry for you! Drop it off at our Fluff & Fold locations, or have us pick it up! <br />
                            We have options that work for your schedule or budget!
                        </p>
                        <div className={classNames(styles.pricingCardContainer, 'subcontainer')}>
                            <h3 className={styles.pricingContainerHeader}>Laundry Drop Off & Pickup</h3>
                            <hr className={styles.dividerLine} />
                            <PricingCard 
                                isPerPound={ true }
                                headerTitle={ 'Standard' }
                                ratePerUnit={ 1.75 }
                                minNumPounds={ 20 }
                                subtitleText={ '2+ day turnaround for orders greater than 40 pounds' }
                            />
                            <PricingCard 
                                isPerPound={ true }
                                headerTitle={ 'Same-Day Service' }
                                ratePerUnit={ 2.50 }
                                minNumPounds={ 20 }
                                subtitleText={ 'Check-in by 10 AM' }
                            />
                            <PricingCard 
                                isPerPound={ true }
                                headerTitle={ 'Heavy Soiled Laundry' }
                                ratePerUnit={ 2.69 }
                                minNumPounds={ 20 }
                                subtitleText={ 'Double wash required - Customer will be notified before starting laundry' }
                            />
                        </div>
                        <div className={classNames(styles.pricingCardContainer, 'subcontainer')}>
                            <h3 className={styles.pricingContainerHeader}>Laundry Pickup & Delivery</h3>
                            <hr className={styles.dividerLine} />
                            <PricingCard 
                                isPerPound={ true }
                                headerTitle={ 'Monday - Friday' }
                                ratePerUnit={ 2.10 }
                                minNumPounds={ 30 }
                                subtitleText={ '' }
                            />
                            <PricingCard 
                                isPerPound={ true }
                                headerTitle={ 'Saturday - Sunday' }
                                ratePerUnit={ 2.10 }
                                minNumPounds={ 40 }
                            />
                            <PricingCard 
                                isPerPound={ true }
                                headerTitle={ 'Heavy Soiled Laundry' }
                                ratePerUnit={ 2.80 }
                                minNumPounds={ 30 }
                            />
                        </div>
                        <div>
                            <p className="subtitle-sm"><em>$4.99 Pickup & Delivery Charge* for orders within 10 mile radius of store location.</em></p>
                            <p className="subtitle-sm"><em>* Surcharge increases for destinations larger than 10 mile radius.</em></p>
                            <p className="subtitle-sm"><strong>Commercial accounts welcome. <Link href="/contact-us">Contact us</Link> for more details.</strong></p>
                        </div>
                    </div>
                    <div className={classNames(styles.pricingContainer, 'subcontainer')}>
                        <h2><strong>Bedding</strong></h2>
                        <p className='subtitle-sm'>Our commercial-grade washers and dryers ensure that your bedding will always come back clean and fresh.</p>
                        <div className={classNames(styles.pricingCardContainer, 'subcontainer')}>
                            <h3 className={styles.pricingContainerHeader}>Comforters, Sleeping Bags, Mattress Covers / Pads</h3>
                            <hr className={styles.dividerLine} />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ 'Twin / Double / Full' }
                                ratePerUnit={ 20 }
                            />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ 'Queen / King' }
                                ratePerUnit={ 24 }
                            />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ 'California King '}
                                ratePerUnit={ 27 }
                            />
                        </div>
                        <div className={classNames(styles.pricingCardContainer, 'subcontainer')}>
                            <h3 className={styles.pricingContainerHeader}>Blankets</h3>
                            <hr className={styles.dividerLine} />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ 'Small / Medium / Large' }
                                ratePerUnit={ 20 }
                            />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ 'Extra Large' }
                                ratePerUnit={ 24 }
                            />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ 'Throws' }
                                ratePerUnit={ 10 }
                            />
                        </div>
                        <div className={classNames(styles.pricingCardContainer, 'subcontainer')}>
                            <h3 className={styles.pricingContainerHeader}>Rugs</h3>
                            <hr className={styles.dividerLine} />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ "X-Small / Small / 2' x 3' or smaller" }
                                ratePerUnit={ 11 }
                            />
                            <PricingCard 
                                isPerPound={ false }
                                headerTitle={ "Medium / Large / 3' x 4' to 4' x 6'"}
                                ratePerUnit={ 16 }
                            />
                        </div>
                        <div>
                            <p className="subtitle-sm"><em>$6 charge for Down Feather or Special Handling</em></p>
                            <p className="subtitle-md"><span className="text-red">Special - $3.00 discount </span> each when added to your Fluff & Fold order (any size)</p>
                            <p className="subtitle-md"><span className="text-red">Wednesday Special - </span>bring in 2 comforters for $36 !! *</p>
                            <p className="subtitle-sm text-italic">* Any size - Down Feather additional fee applies</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}