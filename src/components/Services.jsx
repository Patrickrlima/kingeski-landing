import services from '../data/services';
import { buildWhatsappLink } from '../data/business';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-ink-900 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading index="02" eyebrow="Serviços" title="O que fazemos" />

        {services.length === 0 ? (
          <Reveal delay={1} className="mt-14 rounded-sm border border-bone/10 bg-ink-950/40 p-10 text-center sm:p-14">
            <p className="mx-auto max-w-md text-base leading-relaxed text-bone/65">
              A lista de serviços e preços está sendo confirmada. Fale com a gente pelo WhatsApp pra saber os
              valores atualizados e já garantir seu horário.
            </p>
            <a
              href={buildWhatsappLink('Olá! Quero saber os serviços e valores da Kingeski Barbearia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Consultar no WhatsApp
            </a>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) + 1}
                className="group relative overflow-hidden rounded-sm border border-bone/10 bg-ink-950/40 p-7 transition-colors duration-300 hover:border-brass-400/40"
              >
                <h3 className="font-display text-xl font-medium text-bone">{s.name}</h3>
                {s.description && <p className="mt-2 text-sm leading-relaxed text-bone/55">{s.description}</p>}
                {s.price && (
                  <p className="mt-5 font-display text-lg text-brass-400">{s.price}</p>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
