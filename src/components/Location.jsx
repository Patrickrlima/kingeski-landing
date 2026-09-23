import business, { buildWhatsappLink } from '../data/business';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { MapPinIcon, ClockIcon, WhatsappIcon, ArrowUpRightIcon } from './icons';

export default function Location() {
  // Mapa carrega direto (sem precisar clicar) — como essa é a última seção
  // da página, faz sentido já deixar ele visível. `loading="lazy"` no
  // próprio iframe evita carregar o Google Maps antes do usuário chegar
  // perto dessa parte da tela.
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;

  return (
    <section id="localizacao" className="scroll-mt-20 bg-ink-900 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading eyebrow="Localização" title="Onde estamos" />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="flex flex-col gap-8">
            <div className="flex gap-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest2 text-bone/50">Endereço</p>
                <p className="mt-1.5 text-base text-bone/80">{business.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest2 text-bone/50">Horário</p>
                <dl className="mt-1.5 space-y-1">
                  {business.hours.map((h) => (
                    <div key={h.days} className="flex gap-2 text-base text-bone/80">
                      <dt className="text-bone/55">{h.days}:</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href={business.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Como chegar
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href={buildWhatsappLink('Olá! Quero agendar um horário na Kingeski Barbearia.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={2} className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-950 sm:aspect-[16/10]">
            <iframe
              title="Localização da Kingeski Barbearia no Google Maps"
              src={mapSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
