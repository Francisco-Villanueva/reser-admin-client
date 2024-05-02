/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{  js,ts,jsx,tsx,mdx}',
    './components/**/*.{  js,ts,jsx,tsx,mdx}',
    './app/**/*.{  js,ts,jsx,tsx,mdx}',
    './src/**/*.{ js,ts,jsx,tsx,mdx }',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: '#18489A',
        hoverBlue: '#ECF0F7',
        pressedBlue: '#E2E8F2',
        purple: '#9747FF',
        green: '#4FE8B7',
        white: '#fff',
        'light-grey': '#F7F7F9',
        border: '#D9DBDE',
        grey: '#AEB1B7',
        'dark-grey': '#5D6470',
        black: '#818181',
        error: '#d9454b',
        success: '#15CC8A',
        hoverRed: '#fa104814',
        pressedRed: '#fa10481f',
        design: '#FFE8E8',
        hr: '#D6E1FF',
        sales: '#F2E8FF',
        dev: '#D2FAEE',
        finance: '#FFF2D1',
        lightGreen: '#AAF6CD',
        lightRed: '#FFC6D3',
        lightYellow: '#FFE9AF',
        lightPurple: '#ECDEFF',
        lightBlue: '#D8E7FF',
        lightBackgroundShop: '#FBFBFE',
        disabled: '#E1E4EA',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}