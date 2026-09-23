/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: false,
    extend: {
      colors: {
        // Paleta premium: preto/carvão profundo + off-white + bronze/dourado —
        // ajuste aqui se a identidade oficial da Kingeski usar outras cores.
        ink: {
          DEFAULT: '#0c0c0d',
          800: '#201f1d',
          900: '#161514',
          950: '#0c0c0d',
        },
        bone: '#f3ede1',
        brass: {
          400: '#c9a24b',
          500: '#b3893a',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        container: '1280px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // Brilho pulsante do CTA principal: o halo dourado ao redor do botão
        // "respira" (cresce e recolhe) continuamente, sem mexer no tamanho
        // do próprio botão — só a sombra externa muda.
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.25) inset, 0 0 0 0 rgba(201,162,75,0.55), 0 18px 40px -18px rgba(201,162,75,0.65)',
          },
          '50%': {
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.25) inset, 0 0 26px 8px rgba(201,162,75,0.55), 0 18px 40px -18px rgba(201,162,75,0.75)',
          },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Efeito "letras chegando": cada letra entra com leve rotação, blur e
        // deslocamento vertical, até se assentar na posição final formando a
        // palavra. Aplicado com atraso individual por letra via JS (stagger).
        letterIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(55%) rotateX(-55deg) scale(0.94)',
            filter: 'blur(6px)',
          },
          '60%': {
            opacity: '1',
            filter: 'blur(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotateX(0deg) scale(1)',
            filter: 'blur(0px)',
          },
        },
      },
      animation: {
        // 45% mais lenta que a versão anterior (0.9s → 1.305s).
        fadeUp: 'fadeUp 1.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        letterIn: 'letterIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
