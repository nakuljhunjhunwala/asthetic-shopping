import React from 'react';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'neon' | 'white';
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    color = 'neon',
    className = '',
}) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div
                className={`
          ${styles.spinner} 
          ${styles[`size-${size}`]} 
          ${styles[`color-${color}`]}
        `}
            >
                <div className={styles.cube1}></div>
                <div className={styles.cube2}></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;