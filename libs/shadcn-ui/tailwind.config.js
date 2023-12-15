// module.exports = {
//   // prefix ui lib classes to avoid conflicting with the app
//   prefix: "ui-",
//   ...sharedConfig,
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@ustrs/tailwind/package.json')],
  content: ['./**/*.{js,ts,jsx,tsx}'],
}
