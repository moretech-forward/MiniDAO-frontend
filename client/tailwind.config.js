/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    important: true,
    content: [
        "./**/*.{js,html}",
        'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),
    ],
}

