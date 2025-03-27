import React from 'react';
import { AnimatePresence } from 'framer-motion';
import AppRouter from './router';

const App: React.FC = () => {
    return (
        <AnimatePresence mode="wait">
            <AppRouter />
        </AnimatePresence>
    );
};

export default App;