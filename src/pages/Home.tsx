import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../constants/routes';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from './Home.module.css';

const Home: React.FC = () => {
    // Featured products - just take first 4 products for demo
    const featuredProducts = products.slice(0, 4);

    // Animation refs for scroll-triggered animations
    const { ref: heroRef, inView: heroInView } = useScrollAnimation();
    const { ref: featuredRef, inView: featuredInView } = useScrollAnimation({ threshold: 0.2 });
    const { ref: ctaRef, inView: ctaInView } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={styles.hero}
            >
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Future <span className="text-neon">Essentials</span> for Gen-Z Lifestyle
                    </motion.h1>

                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Elevate your existence with tech that understands your vibe.
                        No cap, just pure aesthetic innovation.
                    </motion.p>

                    <motion.div
                        className={styles.heroButtons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to={ROUTES.PRODUCTS}>
                            <Button variant="primary" size="lg">
                                Explore Products
                            </Button>
                        </Link>
                        <Link to={ROUTES.ABOUT}>
                            <Button variant="outline" size="lg">
                                Our Story
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.heroVisual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className={styles.heroCircle}></div>
                    <div className={styles.heroGlow}></div>
                </motion.div>
            </section>

            {/* Featured Products Section */}
            <section
                ref={featuredRef}
                className={styles.featured}
            >
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Trending <span className="text-neon">Releases</span>
                </motion.h2>

                <motion.p
                    className={styles.sectionSubtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    The moment is now. Don't just exist, experience with our latest drops.
                </motion.p>

                <div className={styles.productsGrid}>
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <ProductCard product={product} index={index} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.viewAllContainer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to={ROUTES.PRODUCTS}>
                        <Button variant="outline" size="lg">
                            View All Products
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section
                ref={ctaRef}
                className={styles.cta}
            >
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 0, y: 40 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.ctaTitle}>
                        Join the <span className="text-neon">Revolution</span>
                    </h2>
                    <p className={styles.ctaText}>
                        Stay connected with exclusive drops, limited editions, and vibes you won't find elsewhere.
                    </p>
                    <form className={styles.ctaForm}>
                        <input
                            type="email"
                            placeholder="Your email"
                            className={styles.ctaInput}
                            aria-label="Email subscription"
                        />
                        <Button variant="primary" size="md" type="submit">
                            Subscribe
                        </Button>
                    </form>
                    <p className={styles.ctaDisclaimer}>
                        No spam, just mains. Unsubscribe anytime.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.ctaDecoration}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={ctaInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.ctaShape}></div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;