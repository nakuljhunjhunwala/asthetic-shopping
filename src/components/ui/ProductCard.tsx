import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import { getProductDetailsRoute } from '../../constants/routes';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
    index?: number;
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    index = 0,
    className = '',
}) => {
    const { id, name, price, description, images, category, tags } = product;

    // Format price with the dollar sign and two decimal places
    const formattedPrice = `${price.toFixed(2)}`;

    // Create a truncated description if it's too long
    const truncatedDescription = description.length > 80
        ? `${description.substring(0, 80)}...`
        : description;

    // Animation variants for the card
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            boxShadow: '0 10px 20px rgba(0, 240, 255, 0.2), 0 0 10px rgba(0, 240, 255, 0.2)',
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className={`${styles.card} ${className}`}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
        >
            <Link to={getProductDetailsRoute(id)} className={styles.link}>
                <div className={styles.imageContainer}>
                    <div
                        className={styles.imagePlaceholder}
                        style={{ backgroundImage: `url(${images[0]})` }}
                    />
                    <span className={styles.price}>{formattedPrice}</span>
                    {category && (
                        <span className={styles.category}>{category}</span>
                    )}
                </div>

                <div className={styles.content}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.description}>{truncatedDescription}</p>

                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {images.length > 1 && (
                        <div className={styles.multipleImages}>
                            <span>{images.length} images</span>
                        </div>
                    )}
                </div>

                <div className={styles.overlay}>
                    <span className={styles.viewDetails}>View Details</span>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;