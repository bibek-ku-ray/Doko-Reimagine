/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                allianceNeue: ["AllianceNeue", "sans-serif"],
                alliancePlatt: ["AlliancePlatt", "sans-serif"],
                revenda: ["Revenda", "sans-serif"],
                futura: ["Futura", "sans-serif"],
            },
        },
    },
    plugins: [],
};

