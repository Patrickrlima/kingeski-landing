import { useEffect, useState } from 'react';
import { ChevronUpIcon } from './icons';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-bone/15 bg-ink-950/80 text-bone/70 backdrop-blur-sm transition-[opacity,transform] duration-300 ease-premium hover:border-brass-400 hover:text-brass-400 sm:flex ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </button>
  );
}
