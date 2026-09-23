import reviews, { googleRating } from '../data/reviews';
import business from '../data/business';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { StarIcon } from './icons';

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-brass-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" filled={i < count} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const hasRating = typeof googleRating.score === 'number';

  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-ink-950 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading eyebrow="Avaliações" title="O que dizem sobre a Kingeski" align="center" />

        {reviews.length === 0 ? (
          <Reveal delay={1} className="mx-auto mt-14 flex max-w-lg flex-col items-center text-center">
            {hasRating && (
              <>
                <Stars count={Math.round(googleRating.score)} />
                <p className="mt-4 font-display text-2xl text-bone">
                  {googleRating.score.toFixed(1)}{' '}
                  <span className="text-base font-sans text-bone/50">
                    ({googleRating.count} avaliações no Google)
                  </span>
                </p>
              </>
            )}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/55">
              Confira as avaliações reais de clientes direto no perfil da Kingeski no Google.
            </p>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8 inline-flex"
            >
              Ver avaliações no Google
            </a>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={r.author}
                delay={(i % 3) + 1}
                className="rounded-sm border border-bone/10 bg-ink-900/40 p-7"
              >
                <Stars count={r.rating ?? 5} />
                <p className="mt-4 text-sm leading-relaxed text-bone/70">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest2 text-bone/45">{r.author}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
