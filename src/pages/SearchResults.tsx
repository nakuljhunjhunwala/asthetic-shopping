import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useProducts from '../hooks/useProducts';
import SearchBar from '../components/ui/SearchBar';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';
import styles from './SearchResults.module.css';

const SearchResults: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { searchProducts } = useProducts();
    const [results, setResults] = useState(searchProducts(query));

    useEffect(() => {
        setResults(searchProducts(query));
    }, [query, searchProducts]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.searchResults}>
            <div className={styles.container}>
                <section className={styles.header}>
                    <h1 className={styles.title}>
                        Search Results
                        {query && <span className={styles.queryHighlight}> for "{query}"</span>}
                    </h1>

                    <div className={styles.searchBarContainer}>
                        <SearchBar initialValue={query} />
                    </div>

                    <div className={styles.resultsInfo}>
                        <p>
                            {results.length > 0
                                ? `Found ${results.length} products matching your search`
                                : 'No products found matching your search'}
                        </p>
                    </div>
                </section>

                <section className={styles.resultsSection}>
                    {results.length > 0 ? (
                        <motion.div
                            className={styles.resultsGrid}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {results.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    variants={itemVariants}
                                    transition={{ duration: 0.5 }}
                                >
                                    <ProductCard product={product} index={index} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className={styles.noResults}>
                            <div className={styles.noResultsIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 15.5L19 19M5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className={styles.noResultsTitle}>No results found</h2>
                            <p className={styles.noResultsText}>
                                We couldn't find any products matching "{query}". Try using different keywords or check out our entire catalog.
                            </p>
                            <div className={styles.noResultsActions}>
                                <Link to={ROUTES.PRODUCTS}>
                                    <Button variant="primary" size="lg">
                                        Browse All Products
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default SearchResults;