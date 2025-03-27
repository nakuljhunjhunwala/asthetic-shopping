import React, { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AnimatedRouteTransition from '../ui/AnimatedRouteTransition';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
    children: ReactNode;
    withAnimation?: boolean;
    animationVariant?: 'fade' | 'slide' | 'scale' | 'slideUp' | 'slideDown';
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    withAnimation = true,
    animationVariant = 'fade',
}) => {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <AnimatePresence mode="wait">
                    {withAnimation ? (
                        <AnimatedRouteTransition variant={animationVariant}>
                            {children}
                        </AnimatedRouteTransition>
                    ) : (
                        children
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;