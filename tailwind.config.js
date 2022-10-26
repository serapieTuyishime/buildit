/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    safelist: [
        {
            pattern: /bg-./,
            pattern: /text-./,
        },
    ],
    theme: {
        extend: {
            colors: {
                secondary: "#4397A4",
                primary: "#486A6F",
                tertiary: "#E1EBFA",
                "light-primary": "#5BCCDE",
                light: "#F4F7FF",
            },
            fontSize: {
                xl: [
                    "1.375rem",
                    {
                        lineHeight: "1.81rem",
                    },
                ],
            },
            height: {
                18: "4.5rem",
            },
        },
    },
    plugins: [],
};
