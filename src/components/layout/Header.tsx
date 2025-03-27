import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '../../constants/routes';
import SearchBar from '../ui/SearchBar';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    // Navigation links
    const navLinks = [
        { name: 'Home', path: ROUTES.HOME },
        { name: 'Products', path: ROUTES.PRODUCTS },
        { name: 'About', path: ROUTES.ABOUT },
        { name: 'Contact', path: ROUTES.CONTACT },
    ];

    return (
        <header
            className={`
        ${styles.header} 
        ${isScrolled ? styles.scrolled : ''}
      `}
        >
            <div className={styles.container}>
                <Link to={ROUTES.HOME} className={styles.logo}>
                    <span className={styles.logoGlow}>Neo</span>Genz
                </Link>

                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.path} className={styles.navItem}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? styles.activeNavLink : styles.navLink
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.searchContainer}>
                    <SearchBar autoNavigate={true} />
                </div>

                <button
                    className={`
            ${styles.mobileMenuButton}
            ${isMobileMenuOpen ? styles.mobileMenuButtonOpen : ''}
          `}
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Menu"
                >
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className={styles.mobileNav}>
                            <ul className={styles.mobileNavList}>
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.path}
                                        className={styles.mobileNavItem}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: index * 0.1 }
                                        }}
                                    >
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                isActive ? styles.activeMobileNavLink : styles.mobileNavLink
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className={styles.mobileSearchContainer}>
                                <SearchBar autoNavigate={true} />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;