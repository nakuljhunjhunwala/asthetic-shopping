import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    <div className={styles.brandSection}>
                        <Link to={ROUTES.HOME} className={styles.footerLogo}>
                            <span className={styles.logoGlow}>Neo</span>Genz
                        </Link>
                        <p className={styles.tagline}>
                            The future is now. Experience it with our vibes.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="TikTok">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.footerLinks}>
                            <h3 className={styles.footerLinksTitle}>Navigate</h3>
                            <ul className={styles.footerLinksList}>
                                <li className={styles.footerLinkItem}>
                                    <Link to={ROUTES.HOME} className={styles.footerLink}>Home</Link>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <Link to={ROUTES.PRODUCTS} className={styles.footerLink}>Products</Link>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <Link to={ROUTES.ABOUT} className={styles.footerLink}>About</Link>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <Link to={ROUTES.CONTACT} className={styles.footerLink}>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerLinks}>
                            <h3 className={styles.footerLinksTitle}>Products</h3>
                            <ul className={styles.footerLinksList}>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>New Releases</a>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>Best Sellers</a>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>Trending</a>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>Exclusives</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerLinks}>
                            <h3 className={styles.footerLinksTitle}>Support</h3>
                            <ul className={styles.footerLinksList}>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>FAQ</a>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>Shipping</a>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>Returns</a>
                                </li>
                                <li className={styles.footerLinkItem}>
                                    <a href="#" className={styles.footerLink}>Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} NeoGenz. All vibe rights reserved.
                    </p>
                    <p className={styles.footerExtra}>
                        Staying ahead since 2024
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;