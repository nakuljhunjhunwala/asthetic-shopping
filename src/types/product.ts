export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[]; // Array of images instead of a single image
    category: string; // Added category field
    tags: string[];
}