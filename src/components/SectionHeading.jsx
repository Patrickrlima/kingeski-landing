import Reveal from './Reveal';

/**
 * Cabeçalho de seção padronizado — eyebrow e título. Usado em Gallery,
 * About, Reviews, Location, etc. pra manter ritmo visual consistente.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignClass}`}>
      <span className="mb-4 flex items-center gap-3 text-brass-400/70">
        <span className="eyebrow">{eyebrow}</span>
      </span>
      <h2 className="font-display text-3xl font-medium leading-[1.05] text-bone sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-bone/60">{description}</p>}
    </Reveal>
  );
}
