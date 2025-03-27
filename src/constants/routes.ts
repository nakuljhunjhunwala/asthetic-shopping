export const ROUTES = {
    HOME: '/',
    PRODUCTS: '/products',
    PRODUCT_DETAILS: '/products/:id',
    SEARCH: '/search',
    ABOUT: '/about',
    CONTACT: '/contact',
    NOT_FOUND: '*',
} as const;

export const getProductDetailsRoute = (id: number): string => {
    return `/products/${id}`;
};

export const getSearchRoute = (query: string): string => {
    return `/search?q=${encodeURIComponent(query)}`;
};