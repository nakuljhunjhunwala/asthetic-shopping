import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isFullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isFullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    ...rest
}) => {
    return (
        <button
            className={`
        ${styles.button}
        ${styles[`variant-${variant}`]}
        ${styles[`size-${size}`]}
        ${isFullWidth ? styles.fullWidth : ''}
        ${isLoading ? styles.loading : ''}
        ${disabled ? styles.disabled : ''}
        ${className}
      `}
            disabled={isLoading || disabled}
            {...rest}
        >
            {isLoading && <span className={styles.spinner} />}

            {leftIcon && !isLoading && (
                <span className={styles.leftIcon}>{leftIcon}</span>
            )}

            <span className={styles.content}>{children}</span>

            {rightIcon && !isLoading && (
                <span className={styles.rightIcon}>{rightIcon}</span>
            )}
        </button>
    );
};

export default Button;