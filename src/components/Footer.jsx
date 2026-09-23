import Logo from './Logo';
import business from '../data/business';
import { InstagramIcon, WhatsappIcon } from './icons';

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#barbearia', label: 'A Barbearia' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#localizacao', label: 'Localização' },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink-950 py-14">
      <div className="container-px mx-auto flex max-w-container flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/50">{business.address}</p>
          <div className="mt-5 flex gap-4">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Kingeski Barbearia"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-brass-400 hover:text-brass-400"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Kingeski Barbearia"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-brass-400 hover:text-brass-400"
            >
              <WhatsappIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-bone/55 transition-colors hover:text-brass-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="container-px mx-auto mt-12 max-w-container text-xs text-bone/35">
        © {new Date().getFullYear()} Kingeski Barbearia. Todos os direitos reservados.
      </p>
    </footer>
  );
}
