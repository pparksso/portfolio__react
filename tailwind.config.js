/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#333',
            },
        },
        fontFamily: {
            sans: ['Roboto', 'Noto Sans', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
    plugins: [],
};
