import { Product } from '../types/product';

export const products: Product[] = [
    {
        id: 1,
        name: 'VibePhone X',
        price: 999.99,
        description: 'Ultra-slim smartphone with holographic projection and mood-sensing AI. Telepathic texting coming soon.',
        images: [
            '/products/vibe-phone-1.png',
            '/products/vibe-phone-2.png',
            '/products/vibe-phone-3.png'
        ],
        category: 'tech',
        tags: ['tech', 'smartphone', 'ai'],
    },
    {
        id: 2,
        name: 'CloudKicks™',
        price: 259.99,
        description: 'Self-lacing sneakers with built-in step counter and mood-responsive LED lights. Walk on air, literally.',
        images: [
            '/products/cloud-kicks-1.png',
            '/products/cloud-kicks-2.png',
            '/products/cloud-kicks-3.png'
        ],
        category: 'fashion',
        tags: ['fashion', 'footwear', 'wearable-tech'],
    },
    {
        id: 3,
        name: 'MindMelody Earbuds',
        price: 179.99,
        description: 'Wireless earbuds that adapt music to your brain waves. Your thoughts never sounded so good.',
        images: [
            '/products/mind-melody-1.png',
            '/products/mind-melody-2.png'
        ],
        category: 'audio',
        tags: ['audio', 'music', 'wearable-tech'],
    },
    {
        id: 4,
        name: 'RealityGlasses',
        price: 349.99,
        description: 'AR glasses that let you filter reality like your Instagram feed. Bad vibes? Just swipe them away.',
        images: [
            '/products/reality-glasses-1.png',
            '/products/reality-glasses-2.png',
            '/products/reality-glasses-3.png'
        ],
        category: 'tech',
        tags: ['tech', 'ar', 'wearable-tech'],
    },
    {
        id: 5,
        name: 'Aesthetic Aura Light',
        price: 89.99,
        description: 'Color-changing ambient lamp that syncs with your social media activity. Clout = glow.',
        images: [
            '/products/aesthetic-aura-1.png',
            '/products/aesthetic-aura-2.png'
        ],
        category: 'home',
        tags: ['home', 'lighting', 'aesthetic'],
    },
    {
        id: 6,
        name: 'Digital Detox Water Bottle',
        price: 49.99,
        description: 'Smart water bottle that locks your phone when you\'re dehydrated. Stay wet, not obsessed.',
        images: [
            '/products/digital-detox-1.png',
            '/products/digital-detox-2.png'
        ],
        category: 'wellness',
        tags: ['wellness', 'hydration', 'tech'],
    },
    {
        id: 7,
        name: 'Manifesto Hoodie',
        price: 129.99,
        description: 'Oversized hoodie with programmable LED message display. Let them know your mood without talking.',
        images: [
            '/products/manifesto-hoodie-1.png',
            '/products/manifesto-hoodie-2.png',
            '/products/manifesto-hoodie-3.png'
        ],
        category: 'fashion',
        tags: ['fashion', 'clothing', 'wearable-tech'],
    },
    {
        id: 8,
        name: 'CryptoPlant',
        price: 79.99,
        description: 'Self-watering plant that grows based on crypto market performance. Green thumb meets diamond hands.',
        images: [
            '/products/crypto-plant-1.png',
            '/products/crypto-plant-2.png'
        ],
        category: 'home',
        tags: ['home', 'plants', 'crypto'],
    },
    {
        id: 9,
        name: 'ThoughtCapture Journal',
        price: 39.99,
        description: 'Journal that transcribes your thoughts when you stare at it. Writer\'s block? Can\'t relate.',
        images: [
            '/products/thought-journal-1.png',
            '/products/thought-journal-2.png'
        ],
        category: 'stationery',
        tags: ['stationery', 'productivity', 'ai'],
    },
    {
        id: 10,
        name: 'Viral Content Creator Kit',
        price: 299.99,
        description: 'All-in-one studio lighting, microphone, and auto-trending algorithm. Fame not guaranteed but likely.',
        images: [
            'https://thumbs.dreamstime.com/b/obesicat-garden-random-image-fat-pussy-cat-dressed-as-soccer-player-dutch-national-team-exercising-spring-87947898.jpg',
            'https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg',
            'https://images.unsplash.com/photo-1494253109108-2e30c049369b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D'
        ],
        category: 'creator',
        tags: ['content', 'creator', 'studio'],
    }
];

// Get unique categories
export const categories = Array.from(
    new Set(products.map(product => product.category))
).sort();