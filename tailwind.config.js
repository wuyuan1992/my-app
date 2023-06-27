/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "2/1": "2 / 1",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "1/2": "1 / 2",
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },

      colors: {
        primary: {
          default: "rgb(var(--color-primary-5))",
          100: "rgb(var(--color-primary-1))",
          200: "rgb(var(--color-primary-2))",
          300: "rgb(var(--color-primary-3))",
          400: "rgb(var(--color-primary-4))",
          500: "rgb(var(--color-primary-5))",
          600: "rgb(var(--color-primary-6))",
          700: "rgb(var(--color-primary-7))",
          800: "rgb(var(--color-primary-8))",
          900: "rgb(var(--color-primary-9))",
        },
        blue: {
          default: "rgb(var(--semi-blue-5))",
          100: "rgb(var(--semi-blue-1))",
          200: "rgb(var(--semi-blue-2))",
          300: "rgb(var(--semi-blue-3))",
          400: "rgb(var(--semi-blue-4))",
          500: "rgb(var(--semi-blue-5))",
          600: "rgb(var(--semi-blue-6))",
          700: "rgb(var(--semi-blue-7))",
          800: "rgb(var(--semi-blue-8))",
          900: "rgb(var(--semi-blue-9))",
        },
        red: {
          default: "rgb(var(--semi-red-5))",
          100: "rgb(var(--semi-red-1))",
          200: "rgb(var(--semi-red-2))",
          300: "rgb(var(--semi-red-3))",
          400: "rgb(var(--semi-red-4))",
          500: "rgb(var(--semi-red-5))",
          600: "rgb(var(--semi-red-6))",
          700: "rgb(var(--semi-red-7))",
          800: "rgb(var(--semi-red-8))",
          900: "rgb(var(--semi-red-9))",
        },
        pink: {
          default: "rgb(var(--semi-pink-5))",
          100: "rgb(var(--semi-pink-1))",
          200: "rgb(var(--semi-pink-2))",
          300: "rgb(var(--semi-pink-3))",
          400: "rgb(var(--semi-pink-4))",
          500: "rgb(var(--semi-pink-5))",
          600: "rgb(var(--semi-pink-6))",
          700: "rgb(var(--semi-pink-7))",
          800: "rgb(var(--semi-pink-8))",
          900: "rgb(var(--semi-pink-9))",
        },
        purple: {
          default: "rgb(var(--semi-purple-5))",
          100: "rgb(var(--semi-purple-1))",
          200: "rgb(var(--semi-purple-2))",
          300: "rgb(var(--semi-purple-3))",
          400: "rgb(var(--semi-purple-4))",
          500: "rgb(var(--semi-purple-5))",
          600: "rgb(var(--semi-purple-6))",
          700: "rgb(var(--semi-purple-7))",
          800: "rgb(var(--semi-purple-8))",
          900: "rgb(var(--semi-purple-9))",
        },
        violet: {
          default: "rgb(var(--semi-violet-5))",
          100: "rgb(var(--semi-violet-1))",
          200: "rgb(var(--semi-violet-2))",
          300: "rgb(var(--semi-violet-3))",
          400: "rgb(var(--semi-violet-4))",
          500: "rgb(var(--semi-violet-5))",
          600: "rgb(var(--semi-violet-6))",
          700: "rgb(var(--semi-violet-7))",
          800: "rgb(var(--semi-violet-8))",
          900: "rgb(var(--semi-violet-9))",
        },
        indigo: {
          default: "rgb(var(--semi-indigo-5))",
          100: "rgb(var(--semi-indigo-1))",
          200: "rgb(var(--semi-indigo-2))",
          300: "rgb(var(--semi-indigo-3))",
          400: "rgb(var(--semi-indigo-4))",
          500: "rgb(var(--semi-indigo-5))",
          600: "rgb(var(--semi-indigo-6))",
          700: "rgb(var(--semi-indigo-7))",
          800: "rgb(var(--semi-indigo-8))",
          900: "rgb(var(--semi-indigo-9))",
        },
        cyan: {
          default: "rgb(var(--semi-cyan-5))",
          100: "rgb(var(--semi-cyan-1))",
          200: "rgb(var(--semi-cyan-2))",
          300: "rgb(var(--semi-cyan-3))",
          400: "rgb(var(--semi-cyan-4))",
          500: "rgb(var(--semi-cyan-5))",
          600: "rgb(var(--semi-cyan-6))",
          700: "rgb(var(--semi-cyan-7))",
          800: "rgb(var(--semi-cyan-8))",
          900: "rgb(var(--semi-cyan-9))",
        },
        teal: {
          default: "rgb(var(--semi-teal-5))",
          100: "rgb(var(--semi-teal-1))",
          200: "rgb(var(--semi-teal-2))",
          300: "rgb(var(--semi-teal-3))",
          400: "rgb(var(--semi-teal-4))",
          500: "rgb(var(--semi-teal-5))",
          600: "rgb(var(--semi-teal-6))",
          700: "rgb(var(--semi-teal-7))",
          800: "rgb(var(--semi-teal-8))",
          900: "rgb(var(--semi-teal-9))",
        },
        green: {
          default: "rgb(var(--semi-green-5))",
          100: "rgb(var(--semi-green-1))",
          200: "rgb(var(--semi-green-2))",
          300: "rgb(var(--semi-green-3))",
          400: "rgb(var(--semi-green-4))",
          500: "rgb(var(--semi-green-5))",
          600: "rgb(var(--semi-green-6))",
          700: "rgb(var(--semi-green-7))",
          800: "rgb(var(--semi-green-8))",
          900: "rgb(var(--semi-green-9))",
        },
        lime: {
          default: "rgb(var(--semi-lime-5))",
          100: "rgb(var(--semi-lime-1))",
          200: "rgb(var(--semi-lime-2))",
          300: "rgb(var(--semi-lime-3))",
          400: "rgb(var(--semi-lime-4))",
          500: "rgb(var(--semi-lime-5))",
          600: "rgb(var(--semi-lime-6))",
          700: "rgb(var(--semi-lime-7))",
          800: "rgb(var(--semi-lime-8))",
          900: "rgb(var(--semi-lime-9))",
        },
        yellow: {
          default: "rgb(var(--semi-yellow-5))",
          100: "rgb(var(--semi-yellow-1))",
          200: "rgb(var(--semi-yellow-2))",
          300: "rgb(var(--semi-yellow-3))",
          400: "rgb(var(--semi-yellow-4))",
          500: "rgb(var(--semi-yellow-5))",
          600: "rgb(var(--semi-yellow-6))",
          700: "rgb(var(--semi-yellow-7))",
          800: "rgb(var(--semi-yellow-8))",
          900: "rgb(var(--semi-yellow-9))",
        },
        amber: {
          default: "rgb(var(--semi-amber-5))",
          100: "rgb(var(--semi-amber-1))",
          200: "rgb(var(--semi-amber-2))",
          300: "rgb(var(--semi-amber-3))",
          400: "rgb(var(--semi-amber-4))",
          500: "rgb(var(--semi-amber-5))",
          600: "rgb(var(--semi-amber-6))",
          700: "rgb(var(--semi-amber-7))",
          800: "rgb(var(--semi-amber-8))",
          900: "rgb(var(--semi-amber-9))",
        },
        orange: {
          default: "rgb(var(--semi-orange-5))",
          100: "rgb(var(--semi-orange-1))",
          200: "rgb(var(--semi-orange-2))",
          300: "rgb(var(--semi-orange-3))",
          400: "rgb(var(--semi-orange-4))",
          500: "rgb(var(--semi-orange-5))",
          600: "rgb(var(--semi-orange-6))",
          700: "rgb(var(--semi-orange-7))",
          800: "rgb(var(--semi-orange-8))",
          900: "rgb(var(--semi-orange-9))",
        },
        grey: {
          default: "rgb(var(--semi-grey-5))",
          100: "rgb(var(--semi-grey-1))",
          200: "rgb(var(--semi-grey-2))",
          300: "rgb(var(--semi-grey-3))",
          400: "rgb(var(--semi-grey-4))",
          500: "rgb(var(--semi-grey-5))",
          600: "rgb(var(--semi-grey-6))",
          700: "rgb(var(--semi-grey-7))",
          800: "rgb(var(--semi-grey-8))",
          900: "rgb(var(--semi-grey-9))",
        },
      },
    },
  },
  plugins: [],
}
