import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../../constants/routes';
import Button from './Button';
import styles from './NotFound.module.css';

interface NotFoundProps {
    title?: string;
    message?: string;
    className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
    title = '404 - Lost like your ex\'s loyalty',
    message = 'The page you\'re looking for has ghosted you. Let\'s get you back somewhere real.',
    className = '',
}) => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className={`${styles.container} ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styles.glitchWrapper} variants={itemVariants}>
                <h1 className={styles.title} data-text={title}>{title}</h1>
            </motion.div>

            <motion.p className={styles.message} variants={itemVariants}>
                {message}
            </motion.p>

            <motion.div className={styles.actions} variants={itemVariants}>
                <Link to={ROUTES.HOME}>
                    <Button variant="primary" size="lg">
                        Take Me Home
                    </Button>
                </Link>
            </motion.div>

            <motion.div
                className={styles.decoration}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5, duration: 0.8 }
                }}
            >
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
                <div className={styles.dot}></div>
            </motion.div>
        </motion.div>
    );
};

export default NotFound;