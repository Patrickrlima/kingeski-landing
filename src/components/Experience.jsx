import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PILLARS = [
  { n: '01', title: 'Precisão', text: 'Cada corte pensado no detalhe — do risco à finalização.' },
  { n: '02', title: 'Estilo', text: 'Um visual que combina com você, não um padrão genérico.' },
  { n: '03', title: 'Experiência', text: 'Ambiente e atendimento feitos pra você voltar sempre.' },
];

export default function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 bg-ink-950 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          eyebrow="A experiência"
          title="Mais do que um corte"
          description="Na Kingeski, cada visita é pensada pra unir técnica e cuidado — um momento seu, no Centro de Osório."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-bone/10 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i + 1} className="bg-ink-950 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-medium text-bone">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
