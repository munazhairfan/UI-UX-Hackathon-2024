import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor:{
        hamza: '#FBEBB5',
        fahad: '#FAF4F4',
        pinki : '#FFF9E5',
        hackathon : '#9F9F9F',
        eelow: '#B88E2F',
      },
      backgroundColor:{
        eelow: '#B88E2F',
        hamza: '#FBEBB5',
        pinki : '#FFF9E5',
        fahad: '#FAF4F4',
        hackathon : '#9F9F9F',
      },
      backgroundImage:{
        instagram: "url('/images/insta-bg.png')",
        components_bg: "url('/images/components-bg.png')",
      },
      screens:{
        'sm' : {'max': '480px'},
        'md' : {'max': '481px'},
        'lg' : {'max': '769px'},
        'xl' : {'max': '1025px'},
      }
    },
  },
  plugins: [],
};
export default config;
