module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'gradient':     'gradient 8s ease infinite',
        'blink':        'blink 1s step-end infinite',
        'fade-in-up':   'fadeInUp 0.6s ease-out forwards',
        'slide-in':     'slideIn 0.4s ease-out forwards',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 69, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(139, 69, 255, 0.7)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}