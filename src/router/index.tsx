import React, { ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import MainLayout from '../components/layout/MainLayout';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NotFound from '../components/ui/NotFound';

// Lazy loaded pages for code splitting
const Home = React.lazy(() => import('../pages/Home'));
const Products = React.lazy(() => import('../pages/Products'));
const ProductDetails = React.lazy(() => import('../pages/ProductDetails'));
const SearchResults = React.lazy(() => import('../pages/SearchResults'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));

// Loading fallback for lazy loaded components
const PageLoader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <LoadingSpinner size="lg" />
    </div>
);

// Wrapper for pages that need the main layout
interface PageWrapperProps {
    children: ReactNode;
    animationVariant?: 'fade' | 'slide' | 'scale' | 'slideUp' | 'slideDown';
}

const PageWrapper: React.FC<PageWrapperProps> = ({
    children,
    animationVariant = 'fade'
}) => {
    return (
        <MainLayout withAnimation animationVariant={animationVariant}>
            <Suspense fallback={<PageLoader />}>
                {children}
            </Suspense>
        </MainLayout>
    );
};

// Protected route wrapper
interface ProtectedRouteProps {
    children: ReactNode;
    isAuthenticated?: boolean;
    redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    isAuthenticated = true, // Just an example, should be based on real auth
    redirectPath = ROUTES.HOME,
}) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <>{children}</>;
};

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route
                path={ROUTES.HOME}
                element={
                    <PageWrapper animationVariant="fade">
                        <Home />
                    </PageWrapper>
                }
            />

            <Route
                path={ROUTES.PRODUCTS}
                element={
                    <PageWrapper animationVariant="slideUp">
                        <Products />
                    </PageWrapper>
                }
            />

            <Route
                path={ROUTES.PRODUCT_DETAILS}
                element={
                    <PageWrapper animationVariant="slide">
                        <ProductDetails />
                    </PageWrapper>
                }
            />

            <Route
                path={ROUTES.SEARCH}
                element={
                    <PageWrapper animationVariant="scale">
                        <SearchResults />
                    </PageWrapper>
                }
            />

            <Route
                path={ROUTES.ABOUT}
                element={
                    <PageWrapper animationVariant="slideDown">
                        <About />
                    </PageWrapper>
                }
            />

            <Route
                path={ROUTES.CONTACT}
                element={
                    <PageWrapper animationVariant="slideUp">
                        <Contact />
                    </PageWrapper>
                }
            />

            {/* Example of a protected route (not used in this template) */}
            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <PageWrapper>
                            <div>Admin Dashboard</div>
                        </PageWrapper>
                    </ProtectedRoute>
                }
            />

            {/* 404 route */}
            <Route
                path={ROUTES.NOT_FOUND}
                element={
                    <MainLayout withAnimation={false}>
                        <NotFound />
                    </MainLayout>
                }
            />
        </Routes>
    );
};

export default AppRouter;