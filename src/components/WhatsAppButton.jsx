import { useEffect, useState } from 'react';
import { buildWhatsappLink } from '../data/business';
import { WhatsappIcon } from './icons';

/**
 * Barra fixa discreta no mobile (some no desktop, onde já existe o botão
 * "Agendar" no navbar) — só aparece depois de rolar um pouco, pra não
 * competir com o CTA principal do Hero logo de cara.
 */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={buildWhatsappLink('Olá! Quero agendar um horário na Kingeski Barbearia.')}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-sm bg-brass-400 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-950 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-[transform,opacity] duration-300 ease-premium sm:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
      }`}
    >
      <WhatsappIcon className="h-4 w-4" />
      Agendar pelo WhatsApp
    </a>
  );
}
