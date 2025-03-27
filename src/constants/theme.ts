export const COLORS = {
    black: '#000000',
    darkGray: '#121212',
    mediumGray: '#1e1e1e',
    lightGray: '#2a2a2a',
    white: '#ffffff',
    neon: '#00f0ff',
    neonPink: '#ff00ea',
    neonPurple: '#9d00ff',
} as const;

export const SHADOWS = {
    glow: '0 0 10px #00f0ff',
    glowPink: '0 0 10px #ff00ea',
    glowPurple: '0 0 10px #9d00ff',
    glowStrong: '0 0 20px #00f0ff, 0 0 40px rgba(0, 240, 255, 0.5)',
} as const;

export const FONTS = {
    primary: '"Inter", sans-serif',
    display: '"Space Grotesk", sans-serif',
    mono: '"JetBrains Mono", monospace',
} as const;

export const BREAKPOINTS = {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
    widescreen: '1280px',
} as const;

export const TRANSITIONS = {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
} as const;

export const Z_INDICES = {
    base: 1,
    overlay: 10,
    modal: 100,
    tooltip: 1000,
} as const;