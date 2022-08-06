module.exports = {
  content: ['./node_modules/symax/**/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://st18.stpulscen.ru/images/product/329/361/721_big.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
