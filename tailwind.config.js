/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'orange': '#ff5722',
                'dark': '#0a0a0a',
                'darker': '#050505',
                'card': '#1a1a1a',
                'border': '#2a2a2a',
            },
        },
    },
    plugins: [],
}
