import SmartImage from './SmartImage';
import Reveal from './Reveal';
import business from '../data/business';

export default function About() {
  return (
    <section id="barbearia" className="scroll-mt-20 bg-ink-900 py-24 sm:py-32">
      <div className="container-px mx-auto grid max-w-container gap-10 sm:gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="order-1 lg:order-2">
          <SmartImage
            src="/images/sobre.jpg"
            alt="Fachada da Kingeski Barbearia à noite, com o letreiro iluminado e a coroa dourada"
            label="Foto: fachada da barbearia"
            imgClassName="h-full w-full object-cover object-top"
            className="aspect-[4/3] w-full rounded-sm"
          />
        </Reveal>

        <Reveal delay={2} className="order-2 lg:order-1">
          <span className="mb-4 flex items-center gap-3 text-brass-400/70">
            <span className="h-px w-10 bg-brass-400/40" aria-hidden="true" />
            <span className="eyebrow">A barbearia</span>
          </span>
          <h2 className="font-display text-3xl font-medium leading-[1.05] text-bone sm:text-4xl lg:text-[2.75rem]">
            Kingeski Barbearia
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-bone/65">
            No Centro de {business.city}, a Kingeski é o endereço de quem valoriza um corte bem-feito e um
            atendimento à altura. Um espaço pensado pra receber bem — do primeiro corte ao próximo.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-bone/65">{business.addressShort}</p>
        </Reveal>
      </div>
    </section>
  );
}
