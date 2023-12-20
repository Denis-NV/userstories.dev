// module.exports = {
//   // prefix ui lib classes to avoid conflicting with the app
//   prefix: "ui-",
//   ...sharedConfig,
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@ustrs/tailwind/tailwind.preset')],
  content: {
    relative: true,
    files: ['./src/**/*.{js,ts,jsx,tsx}', '../../libs/shadcn-ui/**/*.{js,ts,jsx,tsx}'],
  },
}
