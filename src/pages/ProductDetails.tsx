import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useProducts from '../hooks/useProducts';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NotFound from '../components/ui/NotFound';
import ProductCard from '../components/ui/ProductCard';
import { ROUTES } from '../constants/routes';
import styles from './ProductDetails.module.css';
import { Product } from '@/types/product';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();
    const { getProductById, products, loading, error } = useProducts();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [product, setProduct] = useState<Product | null>(null);

    // Get the product based on the ID from the URL
    useEffect(() => {
        if (id) {
            // Use parseInt to convert string id to number
            const numericId = parseInt(id, 10);
            if (!isNaN(numericId)) {
                const prd = getProductById(numericId);
                setProduct(prd);

            }
        }
    }, [id, getProductById]);

    // Get the current product
    // const product = useProducts().product;

    // Get related products (products with at least one matching tag)
    const relatedProducts = product
        ? products
            .filter(p =>
                p.id !== product.id &&
                (p.category === product.category ||
                    p.tags.some(tag => product.tags.includes(tag)))
            )
            .slice(0, 4)
        : [];

    // Handle quantity change
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10) || 1;
        setQuantity(Math.max(1, Math.min(10, value)));
    };

    // Handle add to cart (mock function)
    const handleAddToCart = () => {
        if (product) {
            // In a real app, this would add to cart state/context
            alert(`Added ${quantity} ${product.name} to cart!`);
        }
    };

    // Handle back button
    const handleBack = () => {
        navigate(-1);
    };

    // Handle image navigation
    const nextImage = () => {
        if (product) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = () => {
        if (product) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
            );
        }
    };

    const setImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    // If loading, show a spinner
    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    // If error or product not found, show 404
    if (error || !product) {
        return (
            <NotFound
                title="404 - Product has ghosted us"
                message="This product is either sold out, never existed, or is in another dimension. Let's find you something that actually exists."
            />
        );
    }

    return (
        <div className={styles.productDetails}>
            <div className={styles.container}>
                {/* Back Button */}
                <button className={styles.backButton} onClick={handleBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </button>

                {/* Product Main Content */}
                <div className={styles.productMain}>
                    {/* Image Column */}
                    <motion.div
                        className={styles.imageColumn}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageContainer}>
                            <div
                                className={styles.imageWrapper}
                                style={{ backgroundImage: `url(${product.images[currentImageIndex]})` }}
                            />

                            {product.images.length > 1 && (
                                <>
                                    <button
                                        className={`${styles.imageNav} ${styles.imagePrev}`}
                                        onClick={prevImage}
                                        aria-label="Previous image"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <button
                                        className={`${styles.imageNav} ${styles.imageNext}`}
                                        onClick={nextImage}
                                        aria-label="Next image"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {product.images.length > 1 && (
                            <div className={styles.imageThumbnails}>
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.imageThumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                                        onClick={() => setImage(index)}
                                        style={{ backgroundImage: `url(${image})` }}
                                        aria-label={`View image ${index + 1}`}
                                        aria-current={index === currentImageIndex}
                                    />
                                ))}
                            </div>
                        )}

                        <div className={styles.productMeta}>
                            <div className={styles.categoryBadge}>
                                <span>{product.category}</span>
                            </div>

                            <div className={styles.tagContainer}>
                                {product.tags.map(tag => (
                                    <Link
                                        key={tag}
                                        to={`${ROUTES.PRODUCTS}?tag=${tag}`}
                                        className={styles.tag}
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Column */}
                    <motion.div
                        className={styles.infoColumn}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={styles.productName}>{product.name}</h1>

                        <div className={styles.priceContainer}>
                            <span className={styles.price}>${product.price.toFixed(2)}</span>
                            <span className={styles.priceBadge}>New</span>
                        </div>

                        <div className={styles.description}>
                            <p>{product.description}</p>
                            <p>Upgrade your reality with the latest in Gen-Z essential tech. Designed for those who understand that the future is now. Limited stock available.</p>
                        </div>

                        <div className={styles.purchaseContainer}>
                            <div className={styles.quantityContainer}>
                                <label htmlFor="quantity" className={styles.quantityLabel}>Quantity</label>
                                <div className={styles.quantityControls}>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        aria-label="Decrease quantity"
                                    >
                                        -
                                    </button>
                                    <input
                                        id="quantity"
                                        type="number"
                                        className={styles.quantityInput}
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        min="1"
                                        max="10"
                                    />
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <Button
                                variant="primary"
                                size="lg"
                                className={styles.addToCartButton}
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button>
                        </div>

                        <div className={styles.additionalInfo}>
                            <div className={styles.infoItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8h14M5 8a2 2 0 100-4h14a2 2 0 100 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Free shipping on orders over $100</span>
                            </div>

                            <div className={styles.infoItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 14l-5-5 5-5M20 20v-7a4 4 0 00-4-4H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>30-day no-questions-asked returns</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className={styles.relatedProducts}>
                        <h2 className={styles.relatedTitle}>Related Products</h2>

                        <div className={styles.relatedGrid}>
                            {relatedProducts.map((relatedProduct, index) => (
                                <motion.div
                                    key={relatedProduct.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                >
                                    <ProductCard product={relatedProduct} />
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
