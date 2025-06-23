import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        ash: {
          50: "oklch(0.96 0 0)",
          100: "oklch(0.91 0 0)",
          200: "oklch(0.81 0 0)",
          300: "oklch(0.72 0 0)",
          400: "oklch(0.62 0 0)",
          500: "oklch(0.5 0 0)",
          600: "oklch(0.39 0 0)",
          700: "oklch(0.27 0 0)",
          800: "oklch(0.13 0 0)",
          900: "oklch(0.11 0 0)",
          950: "oklch(0.1 0 0)",
        },
        cyan: "var(--color-cyan)",
        // Theme-aware colors
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-accent": "var(--text-accent)",
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
      },
      fontFamily: {
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        ash: {
          css: {
            "--tw-prose-body": "var(--text-secondary)",
            "--tw-prose-headings": "var(--text-accent)",
            "--tw-prose-lead": "var(--text-primary)",
            "--tw-prose-links": "var(--text-accent)",
            "--tw-prose-bold": "var(--text-accent)",
            "--tw-prose-counters": "var(--text-primary)",
            "--tw-prose-bullets": "var(--text-primary)",
            "--tw-prose-hr": "var(--border-secondary)",
            "--tw-prose-quotes": "var(--text-accent)",
            "--tw-prose-quote-borders": "var(--border-secondary)",
            "--tw-prose-captions": "var(--text-secondary)",
            "--tw-prose-code": "var(--text-accent)",
            "--tw-prose-pre-code": "var(--text-accent)",
            "--tw-prose-pre-bg": "var(--bg-secondary)",
            "--tw-prose-th-borders": "var(--border-primary)",
            "--tw-prose-td-borders": "var(--border-secondary)",
          },
        },
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
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config
