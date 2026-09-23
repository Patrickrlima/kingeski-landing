import { useEffect, useState } from 'react';
import Logo from './Logo';
import { buildWhatsappLink } from '../data/business';
import { MenuIcon, CloseIcon } from './icons';

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#barbearia', label: 'A Barbearia' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#localizacao', label: 'Localização' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    // Vidro escuro sempre ligado (mesmo no topo da página, sobre o vídeo) —
    // antes o navbar nascia totalmente transparente lá em cima e só ganhava
    // fundo depois de rolar um pouco, o que deixava logo/links ilegíveis
    // quando caíam sobre um trecho claro do vídeo. Agora o efeito de vidro
    // fica sempre ativo; ao rolar, só fica um pouco mais opaco/com sombra.
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-premium ${
        scrolled
          ? 'border-white/10 bg-ink-950/85 backdrop-blur-md shadow-[0_1px_0_rgba(243,237,225,0.08)]'
          : 'border-white/5 bg-ink-950/45 backdrop-blur-md'
      }`}
    >
      <nav aria-label="Navegação principal" className="container-px mx-auto flex h-[76px] max-w-container items-center justify-between">
        <a href="#inicio" className="shrink-0" aria-label="Kingeski Barbearia — início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-bone/75 transition-colors duration-200 hover:text-brass-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsappLink('Olá! Quero agendar um horário na Kingeski Barbearia.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm border border-brass-400/60 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brass-400 transition-colors duration-200 hover:bg-brass-400 hover:text-ink-950 lg:inline-flex"
        >
          Agendar
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center text-bone lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[76px] z-40 origin-top bg-ink-950/98 backdrop-blur-md transition-[transform,opacity] duration-300 ease-premium lg:hidden ${
          open ? 'pointer-events-auto scale-y-100 opacity-100' : 'pointer-events-none scale-y-95 opacity-0'
        }`}
      >
        <ul className="container-px mx-auto flex flex-col gap-1 py-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium uppercase tracking-[0.08em] text-bone/85 transition-colors hover:text-brass-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-px mx-auto pb-8">
          <a
            href={buildWhatsappLink('Olá! Quero agendar um horário na Kingeski Barbearia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-full text-center"
          >
            Agendar horário
          </a>
        </div>
      </div>
    </header>
  );
}
