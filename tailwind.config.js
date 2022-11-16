module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
        "./views/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: ["list-disc","ml-6"],
    // darkMode: "class",
    theme: {
        screens: {
            'sm': '600px',
            // => @media (min-width: 640px) { ... }

            'md': '905px',
            // => @media (min-width: 768px) { ... }

            'lg': '1240px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1440px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
            // => @media
        },
        extend: {
            fontFamily: {
                'monospace': ['RobotoFlex', 'YekanBakh'],
            },
            container: {
                padding: {
                    DEFAULT: '1rem',
                }
            },
            colors: {
                // 'primary': '#bf0715',
                // 'on-primary': '#ffffff',
                // 'primary-container': '#ffdad6',
                // 'on-primary-container': '#410002',
                //
                // 'secondary': '#775653',
                // 'on-secondary': '#ffffff',
                // 'secondary-container': '#ffdad6',
                // 'on-secondary-container': '#2c1513',
                //
                // 'tertiary': '#715b2e',
                // 'on-tertiary': '#ffffff',
                // 'tertiary-container': '#fddfa6',
                // 'on-tertiary-container': '#261900',
                //
                // 'outline': '#857371',
                //
                // 'background': '#fffbff',
                // 'on-background': '#201a19',
                //
                // 'surface': '#fffbff',
                // 'on-surface': '#201a19',
                // 'surface-variant': '#f5ddda',
                // 'on-surface-variant': '#534341',
                //
                // 'inverse-surface': '#362f2e',
                // 'inverse-on-surface': '#fbeeec',

                'primary-light': '#385ca9',
                'on-primary-light': '#ffffff',
                'primary-container-light': '#d9e2ff',
                'on-primary-container-light': '#001945',

                'secondary-light': '#585e71',
                'on-secondary-light': '#ffffff',
                'secondary-container-light': '#dce2f9',
                'on-secondary-container-light': '#151b2c',

                'tertiary-light': '#725572',
                'on-tertiary-light': '#ffffff',
                'tertiary-container-light': '#fdd7fa',
                'on-tertiary-container-light': '#2a122c',

                'outline-light': '#757780',

                'background-light': '#fefbff',
                'on-background-light': '#1b1b1f',

                'surface-light': '#fefbff',
                'on-surface-light': '#1b1b1f',
                'surface-variant-light': '#e1e2ec',
                'on-surface-variant-light': '#44464f',

                'inverse-surface-light': '#303034',
                'inverse-on-surface-light': '#f2f0f4',


                // 'primary-dark': '#b0c6ff',
                // 'on-primary-dark': '#002c6f',
                // 'primary-container-dark': '#1a438f',
                // 'on-primary-container-dark': '#d9e2ff',
                //
                // 'secondary-dark': '#dec2a2',
                // 'on-secondary-dark': '#3f2d17',
                // 'secondary-container-dark': '#57432b',
                // 'on-secondary-container-dark': '#fcdebc',
                //
                // 'tertiary-dark': '#bacd9f',
                // 'on-tertiary-dark': '#263514',
                // 'tertiary-container-dark': '#3c4c28',
                // 'on-tertiary-container-dark': '#d6e9b9',
                //
                // 'outline-dark': '#9c8e80',
                //
                // 'background-dark': '#1f1b16',
                // 'on-background-dark': '#ebe1d9',
                //
                // 'surface-dark': '#1f1b16',
                // 'on-surface-dark': '#ebe1d9',
                // 'surface-variant-dark': '#504539',
                // 'on-surface-variant-dark': '#d4c4b4',
                //
                // 'inverse-surface-dark': '#ebe1d9',
                // 'inverse-on-surface-dark': '#1f1b16',

                'surface-1-light':'linear-gradient(0deg,rgba(132, 84, 0,0.05),rgba(132, 84, 0,0.05)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#fffbff',
                "surface-2-light":'linear-gradient(0deg,rgba(132, 84, 0,0.08),rgba(132, 84, 0,0.08)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#fffbff',
                "surface-3-light":'linear-gradient(0deg,rgba(132, 84, 0,0.11),rgba(132, 84, 0,0.11)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#fffbff',
                "surface-4-light":'linear-gradient(0deg,rgba(132, 84, 0,0.12),rgba(132, 84, 0,0.12)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#fffbff',
                "surface-5-light":'linear-gradient(0deg,rgba(132, 84, 0,0.14),rgba(132, 84, 0,0.14)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#fffbff',
                'surface-1-dark':'linear-gradient(0deg,rgba(255, 185, 90,0.05),rgba(255, 185, 90,0.05)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#1f1b16',
                "surface-2-dark":'linear-gradient(0deg,rgba(255, 185, 90,0.08),rgba(255, 185, 90,0.08)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#1f1b16',
                "surface-3-dark":'linear-gradient(0deg,rgba(255, 185, 90,0.11),rgba(255, 185, 90,0.11)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#1f1b16',
                "surface-4-dark":'linear-gradient(0deg,rgba(255, 185, 90,0.12),rgba(255, 185, 90,0.12)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#1f1b16',
                "surface-5-dark":'linear-gradient(0deg,rgba(255, 185, 90,0.14),rgba(255, 185, 90,0.14)),linear-gradient(0deg,hsla(0,0%,46%,0.02),hsla(0,0%,46%,0.02)),#1f1b16',




                'dark': 'rgb(28,28,30)',
                'whatsapp': '#075E54',
                'midnight': '#1E293B',
                'cardshadow': 'rgb(0,0,0,.10)'
            },
            opacity: {
                '4': '0.04',
            },
            width: {
                495: '495px'
            },
            boxShadow:{
                'custom-menu':'0 2px 6px 0 rgba(0, 0, 0, 0.05)',
                'shadow-product':'0 10px 40px 0 rgba(0, 0, 0, 0.05)',
                'slider':'0 10px 40px 0 rgba(0, 0, 0, 0.1)'
            },

            height: {
                380: '380px',
                230: "250px",
                495: '495px',
                351: '351px',
                600: '600px',
            },
            zIndex: {
                '999': 999,
                '1001': 1001
            },

        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
