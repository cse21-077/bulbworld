/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: 'oklch(var(--card))',
        cardForeground: 'oklch(var(--card-foreground))',
        popover: 'oklch(var(--popover))',
        popoverForeground: 'oklch(var(--popover-foreground))',
        primary: 'oklch(var(--primary))',
        primaryForeground: 'oklch(var(--primary-foreground))',
        secondary: 'oklch(var(--secondary))',
        secondaryForeground: 'oklch(var(--secondary-foreground))',
        muted: 'oklch(var(--muted))',
        mutedForeground: 'oklch(var(--muted-foreground))',
        accent: 'oklch(var(--accent))',
        accentForeground: 'oklch(var(--accent-foreground))',
        destructive: 'oklch(var(--destructive))',
        destructiveForeground: 'oklch(var(--destructive-foreground))',
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        /* ... other color mappings ... */
      },
    },
  },
  plugins: [],
};