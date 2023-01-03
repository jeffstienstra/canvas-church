/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
        xxl: '1440px',

    },
    extend: {
      backgroundImage: {
        'bricks-blue': "url('assets/bricks-blue-killari-hotaru.jpg')",
        'hills-fog': "url('assets/hills-fog-alex-shutin.jpg')",
        'rusty-metal': "url('assets/rusty-metal-panels-kelly-sikkema.jpg')",
        'flaking-paint': "url('assets/flaking-paint-killari-hotaru.jpg')",
        'flaking-paint2': "url('assets/flaking-paint2-killari-hotaru.jpg')",
        'flaking-paint3': "url('assets/flaking-paint3-killari-hotaru.jpg')",
        'flaking-paint-graffiti': "url('assets/flaking-paint-graffiti-killari-hotaru.jpg')",
        'wood-floor-blue': "url('assets/wood-floor-blue-killari-hotaru.jpg')",
        'plaster-blue': "url('assets/plaster-blue-killari-hotaru.jpg')",
      }
    },
  },
  plugins: [],
}
