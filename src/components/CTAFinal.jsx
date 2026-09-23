import SmartImage from './SmartImage';
import Reveal from './Reveal';
import { buildWhatsappLink } from '../data/business';

export default function CTAFinal() {
  return (
    <section className="relative flex min-h-[60svh] items-center overflow-hidden bg-ink-950">
      {/* Mesmo motivo do wrapper em VisualBreak.jsx: `<SmartImage>` já é
          `position: relative` por padrão, então o posicionamento absoluto
          fica num wrapper próprio em vez de ir direto na classe do
          SmartImage — evita o conflito que empurrava o texto pra fora da
          tela. */}
      <div className="absolute inset-0">
        <SmartImage
          src="/images/cta-final.jpg"
          alt="Barbeiro atendendo um cliente na Kingeski Barbearia"
          label="Foto: barbeiro atendendo um cliente"
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" aria-hidden="true" />

      <Reveal className="container-px relative mx-auto max-w-container text-center">
        <span className="eyebrow text-brass-400/80">Pronto para o próximo nível?</span>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight text-bone sm:text-5xl">
          Marque seu horário na Kingeski
        </h2>
        <a
          href={buildWhatsappLink('Olá! Quero agendar um horário na Kingeski Barbearia.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-9 inline-flex"
        >
          Agendar pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
