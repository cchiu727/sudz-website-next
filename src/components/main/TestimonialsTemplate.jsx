import classNames from "classnames";

import styles from '@/components/main/TestimonialsTemplate.module.css';

export default function TestimonialsTemplate({ quoteText, quoteAuthor }) {
    return (
        <div className={classNames(styles.testimonials, 'container')}>
            <div className={classNames(styles.testimonialsContent, 'subcontainer')}>
                <div className={styles.quoteContainer}>
                    <span className={classNames(styles.quoteIcon, 'material-icons-round')}>format_quote</span>
                    <p className='subtitle-lg'>
                        The best Fluff and Fold in La Habra!
                        The laundry is always delivered fresh, 
                        clean and neatly folded, and goes straight to my closet.
                    </p>
                    <span className={classNames(styles.quoteIcon, 'material-icons-round', 'text-right')}>format_quote</span>
                </div>
                <div className={styles.authorContainer}>
                    <p className='subtitle-md'>Diana P.</p>
                    <p className='subtitle-sm'><em>Customer of 6 Years</em></p>
                </div>
            </div>
        </div>
    );
}
