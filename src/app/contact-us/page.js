import classNames from "classnames";

import Header from "@/components/header/Header";
import ContactForm from "@/app/contact-us/components/ContactForm";

import styles from "@/app/contact-us/page.module.css";

export default function ContactUs() {
    return (
        <>
            <div className={classNames(styles.contactUs, 'container')}>
                <div className={classNames(styles.contactUsContent, 'subcontainer')}>
                    <Header headerTitle={'Contact Us'} />
                    <div className={classNames(styles.contactFormContainer, 'subcontainer')}>
                        <h2>Want to leave a message?</h2>
                        <p className='subtitle-md'>Fill out the form below and we will get back to you as soon as we can.</p>
                        <p className='subtitle-sm'>Required fields marked with - <span className='warning'>*</span></p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}