import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const Contact: React.FC = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    // Animation refs
    const { ref: contactRef, inView: contactInView } = useScrollAnimation();

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    // Validate form
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message is too short';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            setSubmitError(false);
            setSubmitSuccess(false);

            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, 1500);
        }
    };

    // Contact info items
    const contactItems = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12H21M12 3C14.5013 5.73835 15.9228 9.29203 16 13C15.9228 16.708 14.5013 20.2616 12 23C9.49872 20.2616 8.07725 16.708 8 13C8.07725 9.29203 9.49872 5.73835 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Visit Us',
            content: '123 Innovation Street, Tech Valley, CA 94103'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.9199V19.9199C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9199C16.7428 21.5924 13.787 20.5844 11.19 18.9799C8.77383 17.5196 6.72533 15.4711 5.26 13.0549C3.65 10.4485 2.64 7.48166 2.32 4.39992C2.29501 4.12347 2.32789 3.84486 2.41649 3.58172C2.5051 3.31859 2.64743 3.07667 2.83476 2.87172C3.02209 2.66678 3.25071 2.50343 3.50507 2.39213C3.75943 2.28083 4.03421 2.22419 4.31 2.22492H7.31C7.80272 2.22033 8.28009 2.40077 8.65121 2.73097C9.02233 3.06117 9.26124 3.51648 9.32 4.00492C9.43008 4.9046 9.64287 5.79131 9.95 6.64492C10.0829 7.03343 10.0851 7.4539 9.95656 7.84451C9.82802 8.23512 9.57672 8.57854 9.24 8.82992L8.09 9.97992C9.44135 12.4782 11.5225 14.5595 14.02 15.9099L15.17 14.7599C15.4214 14.4232 15.7648 14.1719 16.1554 14.0434C16.546 13.9148 16.9665 13.917 17.356 14.0499C18.2096 14.357 19.0963 14.5698 19.996 14.6799C20.4903 14.739 20.9511 14.9818 21.2821 15.3585C21.6131 15.7352 21.7904 16.2187 21.78 16.7129L22 16.9199Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Call Us',
            content: '+1 (555) 123-4567'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Email Us',
            content: 'connect@neogenz.tech'
        }
    ];

    // FAQ items
    const faqItems = [
        {
            question: 'Do you ship internationally?',
            answer: 'Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can see the specific details during checkout.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day no-questions-asked return policy. If you\'re not satisfied with your purchase, you can return it within 30 days for a full refund.'
        },
        {
            question: 'Do you offer student discounts?',
            answer: 'Yes! We offer a 15% discount for students. Just verify your student status through our verification partner during checkout.'
        },
        {
            question: 'How do I track my order?',
            answer: 'Once your order ships, you\'ll receive a confirmation email with tracking information. You can also track your order through your account dashboard.'
        }
    ];

    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                {/* Page Header */}
                <section
                    ref={contactRef}
                    className={styles.header}
                >
                    <motion.h1
                        className={styles.pageTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get in <span className="text-neon">Touch</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Have questions, feedback, or just want to say hi? We'd love to hear from you.
                    </motion.p>
                </section>

                {/* Main Content */}
                <div className={styles.content}>
                    {/* Contact Form */}
                    <section className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Send Us a Message</h2>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.formLabel}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`${styles.formInput} ${errors.name ? styles.formInputError : ''}`}
                                        placeholder="John Doe"
                                        disabled={isSubmitting || submitSuccess}
                                    />
                                    {errors.name && <span className={styles.formError}>{errors.name}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.formLabel}>
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`${styles.formInput} ${errors.email ? styles.formInputError : ''}`}
                                        placeholder="john@example.com"
                                        disabled={isSubmitting || submitSuccess}
                                    />
                                    {errors.email && <span className={styles.formError}>{errors.email}</span>}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.formLabel}>
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`${styles.formInput} ${errors.subject ? styles.formInputError : ''}`}
                                    disabled={isSubmitting || submitSuccess}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Product Support">Product Support</option>
                                    <option value="Order Status">Order Status</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Partnership">Partnership</option>
                                </select>
                                {errors.subject && <span className={styles.formError}>{errors.subject}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${styles.formTextarea} ${errors.message ? styles.formInputError : ''}`}
                                    placeholder="How can we help you?"
                                    rows={6}
                                    disabled={isSubmitting || submitSuccess}
                                ></textarea>
                                {errors.message && <span className={styles.formError}>{errors.message}</span>}
                            </div>

                            <div className={styles.formActions}>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    isLoading={isSubmitting}
                                    disabled={isSubmitting || submitSuccess}
                                    className={styles.submitButton}
                                >
                                    Send Message
                                </Button>
                            </div>

                            {submitSuccess && (
                                <div className={styles.formSuccess}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            {submitError && (
                                <div className={styles.formError}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 3C12.9623 1.66667 11.0378 1.66667 10.268 3L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Something went wrong. Please try again later.</span>
                                </div>
                            )}
                        </form>
                    </section>

                    {/* Contact Info */}
                    <section className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}>Contact Info</h2>

                        <div className={styles.contactItems}>
                            {contactItems.map((item, index) => (
                                <div key={index} className={styles.contactItem}>
                                    <div className={styles.contactIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.contactText}>
                                        <h3 className={styles.contactTitle}>{item.title}</h3>
                                        <p className={styles.contactContent}>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.socialSection}>
                            <h3 className={styles.socialTitle}>Find Us On</h3>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink} aria-label="Instagram">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="Twitter">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="TikTok">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="currentColor" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

                    <div className={styles.faqGrid}>
                        {faqItems.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{item.question}</h3>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;