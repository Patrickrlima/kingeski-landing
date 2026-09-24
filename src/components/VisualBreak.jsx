import SmartImage from './SmartImage';
import Reveal from './Reveal';
import { buildWhatsappLink } from '../data/business';

export default function VisualBreak() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-ink-950">
      {/* O `<SmartImage>` já nasce com `position: relative` (pro próprio
          fallback interno se posicionar) — passar `absolute` direto pra ele
          entrava em conflito com esse `relative` e a imagem virava um bloco
          "fantasma" no meio do fluxo normal, empurrando o texto quase todo
          pra fora da tela. Por isso o posicionamento absoluto fica aqui,
          num wrapper próprio, e o SmartImage só preenche esse wrapper. */}
      <div className="absolute inset-0">
        <SmartImage
          src="/images/destaque.jpg?v=2"
          alt="Letreiro da Kingeski Barbearia com a coroa dourada, em parede de mármore"
          label="Foto: letreiro Kingeski Barbearia"
          priority={false}
          className="h-full w-full"
          imgClassName="h-full w-full object-contain object-center lg:object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ink-950/55" aria-hidden="true" />

      <Reveal className="container-px relative mx-auto max-w-container text-center">
        <h2 className="font-display mx-auto max-w-2xl text-3xl font-medium leading-tight text-bone sm:text-5xl">
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
