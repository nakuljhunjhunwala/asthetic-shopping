import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useProducts from '../hooks/useProducts';
import styles from './Products.module.css';

const Products: React.FC = () => {
    // Get products data and categories
    const { products: productData, categories } = useProducts();

    // State for filtered products
    const [products, setProducts] = useState(allProducts);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'default' | 'priceAsc' | 'priceDesc' | 'nameAsc'>('default');

    // Get all unique tags from products
    const allTags = Array.from(
        new Set(allProducts.flatMap(product => product.tags))
    ).sort();

    // Animation ref for scroll-triggered animations
    const { ref: headingRef, inView: headingInView } = useScrollAnimation();

    // Filter products when tag, category, or sort changes
    useEffect(() => {
        let filteredProducts = [...allProducts];

        // Apply tag filter
        if (selectedTag) {
            filteredProducts = filteredProducts.filter(product =>
                product.tags.includes(selectedTag)
            );
        }

        // Apply category filter
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(product =>
                product.category === selectedCategory
            );
        }

        // Apply sorting
        switch (sortOrder) {
            case 'priceAsc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'nameAsc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Default sorting (by ID)
                filteredProducts.sort((a, b) => a.id - b.id);
        }

        setProducts(filteredProducts);
    }, [selectedTag, selectedCategory, sortOrder]);

    // Handle tag selection
    const handleTagSelect = (tag: string) => {
        if (selectedTag === tag) {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
            setSelectedCategory(null); // Clear category when selecting a tag
        }
    };

    // Handle category selection
    const handleCategorySelect = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
            setSelectedTag(null); // Clear tag when selecting a category
        }
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedTag(null);
        setSelectedCategory(null);
        setSortOrder('default');
    };

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                {/* Page Header */}
                <section ref={headingRef} className={styles.header}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Future <span className="text-neon">Tech</span> for a Better You
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Browse our curated collection of products designed for the modern Gen-Z lifestyle.
                    </motion.p>
                </section>

                {/* Filters and Sorting */}
                <section className={styles.filters}>
                    <div className={styles.sortContainer}>
                        <label htmlFor="sortOrder" className={styles.sortLabel}>Sort by:</label>
                        <select
                            id="sortOrder"
                            className={styles.sortSelect}
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as any)}
                        >
                            <option value="default">Featured</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                            <option value="nameAsc">Name: A to Z</option>
                        </select>
                    </div>

                    {/* Category filters */}
                    <div className={styles.categoryFilters}>
                        <span className={styles.filterLabel}>Categories:</span>
                        <div className={styles.categoryButtons}>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`
                    ${styles.categoryButton}
                    ${selectedCategory === category ? styles.categoryButtonSelected : ''}
                  `}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tag filters */}
                    <div className={styles.tagFilters}>
                        <span className={styles.filterLabel}>Filter by tag:</span>
                        <div className={styles.tagButtons}>
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    className={`
                    ${styles.tagButton}
                    ${selectedTag === tag ? styles.tagButtonSelected : ''}
                  `}
                                    onClick={() => handleTagSelect(tag)}
                                >
                                    #{tag}
                                </button>
                            ))}
                        </div>

                        {(selectedTag || selectedCategory) && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearFilters}
                                className={styles.clearButton}
                            >
                                Clear Filters
                            </Button>
                        )}
                    </div>
                </section>

                {/* Products Grid */}
                <section className={styles.productsGrid}>
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <h3>No products found</h3>
                            <p>Try changing your filters or check back later for new products.</p>
                            <Button variant="primary" onClick={clearFilters}>Clear Filters</Button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Products;