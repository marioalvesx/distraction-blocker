module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181825", // Calm dark blue
        foreground: "#e0e6ed", // Soft white
        accent: {
          DEFAULT: "#7f9cf5", // Soft blue accent
          foreground: "#181825",
        },
        card: {
          DEFAULT: "#23243a",
          foreground: "#e0e6ed",
        },
        muted: {
          DEFAULT: "#23243a",
          foreground: "#a0aec0",
        },
        border: "#23243a",
        input: "#23243a",
        ring: "#7f9cf5",
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
