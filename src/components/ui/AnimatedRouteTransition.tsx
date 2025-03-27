import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from './AnimatedRouteTransition.module.css';

type TransitionVariant = 'fade' | 'slide' | 'scale' | 'slideUp' | 'slideDown';

interface AnimatedRouteTransitionProps {
    children: ReactNode;
    variant?: TransitionVariant;
    duration?: number;
}

const AnimatedRouteTransition: React.FC<AnimatedRouteTransitionProps> = ({
    children,
    variant = 'fade',
    duration = 0.5,
}) => {
    const location = useLocation();

    // Define different animation variants
    const variants = {
        fade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        },
        slide: {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 },
        },
        scale: {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 1.1 },
        },
        slideUp: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -50 },
        },
        slideDown: {
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 50 },
        },
    };

    // Get selected animation variant
    const selectedVariant = variants[variant];

    return (
        <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={selectedVariant}
            transition={{ duration }}
            className={styles.transition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedRouteTransition;