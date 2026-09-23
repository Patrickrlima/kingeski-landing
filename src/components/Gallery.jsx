import { useCallback, useEffect, useRef, useState } from 'react';
import gallery from '../data/gallery';
import business from '../data/business';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import { asset } from '../lib/asset';
import { InstagramIcon, CloseIcon, ArrowUpRightIcon } from './icons';

const SIZE_CLASSES = {
  lg: 'sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-auto',
  md: 'sm:col-span-2 sm:row-span-1 aspect-[4/3]',
  // `sm:aspect-auto` é o que faz esse bloco render exatamente na altura da
  // linha do grid (a mesma medida usada pro cálculo do `row-span-3` do
  // vídeo) — sem isso, o `aspect-square` deixa o bloco mais alto que a
  // linha no desktop, e o vídeo (que segue estritamente o grid) fica mais
  // baixo que a coluna da esquerda.
  sm: 'sm:col-span-1 sm:row-span-1 aspect-square sm:aspect-auto',
};

/**
 * Bloco de vídeo da galeria — fica à direita, ocupando a mesma altura total
 * da coluna da esquerda (o grande + os dois pequenos embaixo dele), por
 * isso `sm:row-span-3` (uma linha a mais que o bloco 'lg' normal). Vídeo
 * inteiro (23s) em `object-cover`, preenchendo o quadro de ponta a ponta
 * (sem fundo desfocado nem tarja ao redor). Toca sozinho em loop, sem
 * nenhum controle nativo visível (sem botão de play) — e sem áudio: o
 * arquivo em si não tem mais trilha de áudio (removida no processamento),
 * além do atributo `muted`, então não tem como tocar som de jeito nenhum.
 *
 * O vídeo só começa a carregar/tocar quando essa seção realmente entra na
 * tela (`IntersectionObserver` abaixo) e pausa de novo se o usuário rolar
 * pra longe. Antes ele vinha com `autoPlay` + `preload="auto"`, ou seja,
 * baixava os ~6,5MB inteiros assim que a página abria — mesmo estando lá
 * embaixo, fora da tela — ao mesmo tempo que o vídeo do Hero também estava
 * carregando. No celular isso competia por rede/processamento e travava a
 * rolagem da página. Com o carregamento adiado pra quando a seção aparece,
 * esse travamento some.
 */
function VideoTile() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal lift={false} className="aspect-[9/16] sm:col-span-2 sm:row-span-3 sm:aspect-auto">
      <div className="relative block h-full w-full overflow-hidden bg-ink-800">
        <video
          ref={videoRef}
          src={asset('/videos/galeria-destaque.mp4')}
          poster={asset('/images/galeria-destaque.jpg')}
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      </div>
    </Reveal>
  );
}

function Lightbox({ item, onClose }) {
  // Esse efeito só pode travar o scroll da página quando a lightbox
  // realmente está aberta (item preenchido) — sem o guard abaixo ele
  // travaria a rolagem da página inteira já na primeira renderização.
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone hover:border-brass-400 hover:text-brass-400 sm:right-8 sm:top-8"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        {/* Sem proporção fixa no quadro — ele se ajusta ao tamanho real da
            foto (dentro dos limites de altura/largura abaixo), então a foto
            sempre preenche o quadro inteiro, sem tarja/sobra vazia dos
            lados, seja qual for a proporção original dela. */}
        <SmartImage
          src={item.src}
          alt={item.alt}
          label={item.label}
          className="inline-block min-h-[220px] min-w-[220px]"
          imgClassName="block max-h-[62vh] max-w-[80vw] w-auto h-auto rounded-sm sm:max-h-[68vh] sm:max-w-[50vw]"
        />
      </div>
    </div>
  );
}

function PhotoTile({ item, delay, onOpen }) {
  return (
    <Reveal delay={delay} lift={false} className={SIZE_CLASSES[item.size] ?? SIZE_CLASSES.sm}>
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`Ampliar imagem: ${item.alt}`}
        className="group relative block h-full w-full overflow-hidden"
      >
        <SmartImage
          src={item.src}
          alt={item.alt}
          label={item.label}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
          imgStyle={item.position ? { objectPosition: item.position } : undefined}
        />
        <span className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/20" />
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-bone opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </button>
    </Reveal>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  // O primeiro item (o bloco grande, 'lg') vem antes do vídeo no grid, e o
  // resto (os dois blocos pequenos) vem depois — assim o encaixe do mosaico
  // fica: grande + vídeo lado a lado em cima, os dois pequenos embaixo só
  // do lado do grande. Ver o comentário no topo de `data/gallery.js`.
  const [featured, ...rest] = gallery;

  return (
    <section id="galeria" className="scroll-mt-20 bg-ink-950 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Galeria" title="Trabalhos e ambiente" />
          <Reveal>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver mais no Instagram
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:auto-rows-[11rem] sm:grid-cols-4 sm:gap-5">
          {featured && <PhotoTile item={featured} delay={1} onOpen={setActive} />}
          <VideoTile />
          {rest.map((item, i) => (
            <PhotoTile key={item.src} item={item} delay={(i % 4) + 2} onOpen={setActive} />
          ))}
        </div>
      </div>

      <Lightbox item={active} onClose={close} />
    </section>
  );
}
