/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tac-primary': 'var(--accent-primary)',
                'tac-secondary': 'var(--accent-secondary)',
                'tac-success': 'var(--accent-success)',
                'tac-error': 'var(--accent-error)',
                'tac-surface': 'var(--surface-color)',
                'tac-bg': 'var(--bg-color)',
            },
            fontFamily: {
                'display': ['"Bricolage Grotesque"', 'sans-serif'],
                'body': ['"Schibsted Grotesk"', 'sans-serif'],
            },
            boxShadow: {
                'rest': 'var(--shadow-rest)',
                'hover': 'var(--shadow-hover)',
                'active': 'var(--shadow-active)',
            },
            transitionTimingFunction: {
                'elastic': 'var(--ease-elastic)',
                'smooth': 'var(--ease-smooth)',
            }
        },
    },
    plugins: [],
}
