module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-slide': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 0.4s ease-out forwards',
      },
    },
  },
};
