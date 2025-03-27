

# Install dependencies
npm install react-router-dom framer-motion

# Create project structure
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/pages
mkdir -p src/router
mkdir -p src/hooks
mkdir -p src/data
mkdir -p src/types
mkdir -p src/constants
mkdir -p src/assets/styles
mkdir -p src/assets/images

# Create files (empty for now, we'll populate them later)
touch src/main.tsx
touch src/App.tsx
touch src/components/ui/Button.tsx
touch src/components/ui/ProductCard.tsx
touch src/components/ui/LoadingSpinner.tsx
touch src/components/ui/SearchBar.tsx
touch src/components/ui/NotFound.tsx
touch src/components/ui/AnimatedRouteTransition.tsx
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx
touch src/components/layout/MainLayout.tsx
touch src/pages/Home.tsx
touch src/pages/Products.tsx
touch src/pages/ProductDetails.tsx
touch src/pages/SearchResults.tsx
touch src/pages/About.tsx
touch src/pages/Contact.tsx
touch src/router/index.tsx
touch src/hooks/useProducts.ts
touch src/hooks/useDebounce.ts
touch src/hooks/useScrollAnimation.ts
touch src/data/products.ts
touch src/types/product.ts
touch src/constants/routes.ts
touch src/constants/theme.ts
touch src/assets/styles/global.css
touch src/assets/styles/animations.css
touch src/assets/styles/fonts.css

# Start development server
npm run dev