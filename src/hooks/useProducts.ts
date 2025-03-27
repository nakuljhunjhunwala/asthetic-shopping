import { useState, useCallback, useMemo } from 'react';
import { products, categories } from '../data/products';
import { Product } from '../types/product';

interface UseProductsReturn {
    products: Product[];
    product: Product | null;
    categories: string[];
    loading: boolean;
    error: string | null;
    getProductById: (id: number) => Product | null;
    searchProducts: (query: string) => Product[];
    filterProductsByTag: (tag: string) => Product[];
    filterProductsByCategory: (category: string) => Product[];
}

/**
 * Hook to manage product data and operations
 * @returns Product data and utility functions
 */
function useProducts(): UseProductsReturn {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [product, setProduct] = useState<Product | null>(null);

    // Get a product by ID
    const getProductById = useCallback((id: number): Product | null => {
        setLoading(true);
        setError(null);

        try {
            const foundProduct = products.find(product => product.id === id) || null;
            setProduct(foundProduct);
            return foundProduct;
        } catch (err) {
            setError('Failed to fetch product');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Search products by query
    const searchProducts = useCallback((query: string): Product[] => {
        if (!query.trim()) return products;

        const lowercaseQuery = query.toLowerCase().trim();

        return products.filter(product =>
            product.name.toLowerCase().includes(lowercaseQuery) ||
            product.description.toLowerCase().includes(lowercaseQuery) ||
            product.category.toLowerCase().includes(lowercaseQuery) ||
            product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
        );
    }, []);

    // Filter products by tag
    const filterProductsByTag = useCallback((tag: string): Product[] => {
        if (!tag.trim()) return products;

        const lowercaseTag = tag.toLowerCase().trim();

        return products.filter(product =>
            product.tags.some(productTag => productTag.toLowerCase() === lowercaseTag)
        );
    }, []);

    // Filter products by category
    const filterProductsByCategory = useCallback((category: string): Product[] => {
        if (!category.trim()) return products;

        const lowercaseCategory = category.toLowerCase().trim();

        return products.filter(product =>
            product.category.toLowerCase() === lowercaseCategory
        );
    }, []);

    return {
        products,
        product,
        categories,
        loading,
        error,
        getProductById,
        searchProducts,
        filterProductsByTag,
        filterProductsByCategory,
    };
}

export default useProducts;