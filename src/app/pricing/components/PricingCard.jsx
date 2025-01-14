import styles from '@/app/pricing/components/PricingCard.module.css';

export default function PricingCard({ isPerPound, headerTitle, ratePerUnit, minNumPounds, subtitleText }) {
    return (
        <div className={styles.pricingCard}>
            <h4 className={styles.pricingCardHeader}>{ headerTitle }</h4>
            <p className={styles.pricingCardRate}>${ ratePerUnit.toFixed(2) } per { isPerPound ? 'pound' : 'piece' }</p>
            <p className='subtitle-md'>{ minNumPounds ? 
                `${minNumPounds} pounds minimum (starting $${(ratePerUnit * minNumPounds).toFixed(2)})` 
                : '' }
            </p>
            <p className='subtitle-sm'><em>{ subtitleText }</em></p>
        </div>
    );
}