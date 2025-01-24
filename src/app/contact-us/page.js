import classNames from "classnames";

import Header from "@/components/header/Header";

import styles from "@/app/contact-us/page.module.css";

export default function ContactUs() {
    return (
        <>
            <div className={classNames(styles.contactUs, 'container')}>
                <div className={classNames(styles.contactUsContent, 'subcontainer')}>
                    <Header headerTitle={'Contact Us'} />
                    
                </div>
            </div>
        </>
    );
}