import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { getSearchRoute } from '../../constants/routes';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    placeholder?: string;
    initialValue?: string;
    onSearch?: (query: string) => void;
    className?: string;
    autoNavigate?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search products...',
    initialValue = '',
    onSearch,
    className = '',
    autoNavigate = true,
}) => {
    const [searchQuery, setSearchQuery] = useState(initialValue);
    const debouncedQuery = useDebounce(searchQuery, 500);
    const navigate = useNavigate();

    useEffect(() => {
        if (debouncedQuery) {
            if (onSearch) {
                onSearch(debouncedQuery);
            }

            if (autoNavigate) {
                navigate(getSearchRoute(debouncedQuery));
            }
        }
    }, [debouncedQuery, onSearch, autoNavigate, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            if (onSearch) {
                onSearch(searchQuery);
            }

            if (autoNavigate) {
                navigate(getSearchRoute(searchQuery));
            }
        }
    };

    const handleClear = () => {
        setSearchQuery('');
        if (onSearch) {
            onSearch('');
        }
    };

    return (
        <form className={`${styles.container} ${className}`} onSubmit={handleSubmit}>
            <div className={styles.searchIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <input
                type="text"
                className={styles.input}
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
            />

            {searchQuery && (
                <button
                    type="button"
                    className={styles.clearButton}
                    onClick={handleClear}
                    aria-label="Clear search"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}

            <button
                type="submit"
                className={styles.searchButton}
                disabled={!searchQuery.trim()}
                aria-label="Submit search"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;