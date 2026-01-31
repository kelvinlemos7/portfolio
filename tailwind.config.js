/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        foreground: "#ffffff",
        muted: "#888",
        "muted-foreground": "#888",
        primary: "#646cff",
        "primary-foreground": "#ffffff",
        secondary: "#f3f3f3",
        "secondary-foreground": "#213547",
        destructive: "#ff4d4f",
        "destructive-foreground": "#ffffff",
        sidebar: "#1a1a1a",
        "sidebar-foreground": "#ffffff",
        "sidebar-border": "#333333",
        accent: "#535bf2",
        "accent-foreground": "#ffffff",
        "sidebar-ring": "#646cff",
      },
      spacing: {
        svh: "100svh",
      },
    },
  },
  plugins: [],
}