'use client';

import { useState } from 'react';

import Form from 'next/form';

import styles from '@/app/contact-us/components/ContactForm.module.css';

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Form className={styles.contactForm} action='/submitContactForm'>
            <div className={styles.formRow}>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor='firstName'>First Name<span className='warning'>*</span></label>
                    <input 
                        className={styles.formInput} 
                        onChange={ (event) => setFirstName(event.target.value) } 
                        type='text' 
                        name='firstName' 
                        id='firstName' 
                        required 
                    />
                </div>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor='lastName'>Last Name<span className='warning'>*</span></label>
                    <input 
                        className={styles.formInput} 
                        onChange={ (event) => setLastName(event.target.value) } 
                        type='text' 
                        ame='lastName' 
                        id='lastName' 
                        required 
                    />
                </div>
            </div>
            <div className={styles.formRow}>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor='email'>Email<span className='warning'>*</span></label>
                    <input 
                        className={styles.formInput} 
                        onChange={ (event) => setEmail(event.target.value) }
                        type='text' 
                        name='email' 
                        id='email' 
                        required 
                    />
                </div>
            </div>
            <div className={styles.formRow}>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor='message'>Your Message:<span className='warning'>*</span></label>
                    <textarea 
                        className={styles.formInput} 
                        onChange={ (event) => setMessage(event.target.value) }
                        name='message' 
                        id='message' 
                        rows='4' 
                        cols='50' 
                        maxLength='10000' 
                        placeholder='Type your message...' 
                        required
                    >
                    </textarea>
                </div>
            </div>
            <div className={styles.formRow}>
                <button type='submit'>Submit</button>
            </div>
        </Form>
    );
}