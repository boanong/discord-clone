/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        discord_blue: "#404EED",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: "#36393f",
      },
      height: {
        "83vh": "83vh",
      },
      borderRadius: ["hover", "focus"],
    },
  },
  variants: {
    // ...
   backgroundImage: ['responsive'],
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
