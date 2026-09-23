import { useEffect, useMemo, useRef, useState } from 'react';
import { buildWhatsappLink } from '../data/business';
import { asset } from '../lib/asset';
import SmartImage from './SmartImage';
import { ChevronUpIcon } from './icons';

// Passo de atraso entre cada letra do headline (em segundos) e duração de
// cada letra (definida em tailwind.config.js → animation.letterIn, 1.1s).
// Both valores foram calibrados ~45% mais lentos que a primeira versão do
// efeito (que usava só um fade-up único de 0.9s no bloco inteiro) — agora
// as letras chegam uma a uma, formando "Corte. Estilo. Presença." antes do
// restante do conteúdo aparecer.
const LETTER_STEP = 0.052;
const LINE_BREAK_GAP = 0.16;

/**
 * Divide um texto em <span> por letra, cada um com seu próprio atraso de
 * animação — cria o efeito de "letras chegando e se formando". O texto
 * real e completo continua acessível a leitores de tela via `aria-hidden`
 * na versão fragmentada + um <span> irmão oculto visualmente (sr-only)
 * com o texto inteiro (ver `AnimatedHeadline` abaixo).
 */
function SplitLetters({ text, startDelay = 0 }) {
  const letters = useMemo(() => Array.from(text), [text]);
  return (
    <span aria-hidden="true" className="inline-block [perspective:600px]">
      {letters.map((ch, i) => (
        <span
          key={i}
          className="inline-block motion-safe:animate-letterIn motion-safe:opacity-0"
          style={{ animationDelay: `${(startDelay + i * LETTER_STEP).toFixed(3)}s` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  );
}

function AnimatedHeadline() {
  const line1 = 'Corte. Estilo.';
  const line2 = 'Presença.';
  const line2Delay = line1.length * LETTER_STEP + LINE_BREAK_GAP;
  // Tudo depois do headline (subtítulo + CTAs) entra logo após a última
  // letra terminar de "pousar" — mantém a sensação de uma única cena
  // contínua, não duas animações desencontradas.
  const afterHeadlineDelay = line2Delay + line2.length * LETTER_STEP + 0.15;

  return (
    <>
      <h1 className="font-display text-[2.7rem] font-medium uppercase leading-[0.98] tracking-tight text-bone sm:text-6xl lg:text-7xl">
        <span className="sr-only">{`${line1} ${line2}`}</span>
        <SplitLetters text={line1} startDelay={0} />
        <br />
        <span className="text-brass-400">
          <SplitLetters text={line2} startDelay={line2Delay} />
        </span>
      </h1>

      <div
        className="motion-safe:animate-fadeUp motion-safe:opacity-0"
        style={{ animationDelay: `${afterHeadlineDelay.toFixed(3)}s` }}
      >
        <p className="mt-7 max-w-md text-base leading-relaxed text-bone/70 sm:text-lg">
          Barbearia da Kingeski, no Centro de Osório. Precisão em cada corte, cuidado em cada detalhe.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={buildWhatsappLink('Olá! Quero agendar um horário na Kingeski Barbearia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar horário
          </a>
          <a href="#barbearia" className="btn-outline">
            Conhecer a barbearia
          </a>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  const imgWrapRef = useRef(null);
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  // Parallax extremamente sutil no fundo do Hero — só um translateY leve
  // proporcional ao scroll, via requestAnimationFrame. Desliga sozinho se
  // o usuário preferir menos movimento.
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (imgWrapRef.current) {
          imgWrapRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        }
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // O vídeo só toca sozinho se o usuário não pediu menos movimento — com
  // "prefers-reduced-motion" ele fica parado exibindo o poster (a foto),
  // sem precisar de nenhuma lógica extra além de não chamar .play().
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || videoFailed) return;
    videoRef.current?.play().catch(() => {});
  }, [videoFailed]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950 scroll-mt-0 lg:items-center"
    >
      {/* No mobile/tablet o vídeo cobre a seção inteira (o próprio formato
          vertical do vídeo combina com a tela do celular). A partir do
          desktop (lg+) ele passa a ocupar só a faixa direita, deixando
          espaço pro texto à esquerda — ver o degradê "esfumaçado" abaixo,
          que faz a transição entre as duas áreas. */}
      {/* `object-contain` aqui é proposital: mostra o vídeo/foto inteiro,
          sem cortar nada e sem nenhum zoom — o quadro original completo,
          do jeito que foi gravado. Como o vídeo é vertical e essa faixa é
          mais larga que alta (principalmente no desktop), sobra um respiro
          da cor de fundo da seção (`bg-ink-950`) dos lados — não é uma
          barra "quebrada", é só o espaço que o formato vertical não
          preenche numa faixa horizontal, sem inventar nem cortar imagem. */}
      {/* No desktop, `object-right` gruda o quadro do vídeo na borda direita
          (em vez de centralizado) — o respiro que sobra por causa do
          formato vertical fica todo do lado esquerdo, onde já se mistura
          com o degradê/painel de texto, então some o vazio do lado direito.
          `origin-right` faz o `scale` crescer a partir da borda direita (que
          fica fixa), esticando o vídeo mais pra esquerda — escala calibrada
          pra alargar isso em ~5cm nessa direção numa tela de desktop comum,
          sem cortar nem distorcer o vídeo. */}
      <div ref={imgWrapRef} className="absolute inset-0 flex items-center justify-center will-change-transform lg:inset-y-0 lg:left-[38%] lg:right-0">
        {!videoFailed ? (
          <video
            ref={videoRef}
            className="h-full w-full origin-right object-contain object-center lg:scale-[1.26] lg:object-right"
            poster={asset('/images/hero.jpg')}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
          >
            <source src={asset('/videos/hero.mp4')} type="video/mp4" />
          </video>
        ) : (
          <SmartImage
            src="/images/hero.jpg"
            alt="Interior da Kingeski Barbearia, em Osório - RS"
            label="Foto de destaque: interior da barbearia"
            priority
            className="h-full w-full"
            imgClassName="h-full w-full origin-right object-contain object-center transition-transform duration-700 ease-premium lg:scale-[1.26] lg:object-right"
          />
        )}
      </div>

      {/* Sem nenhum escurecimento por cima do vídeo — nem no celular nem no
          desktop. A legibilidade do texto vem só do painel/cartão sólido
          atrás dele (ver abaixo), nunca de uma camada escura sobre o vídeo
          inteiro. */}

      {/* Desktop: o painel de texto (à esquerda) já nasce sobre o fundo
          sólido `bg-ink-950` da própria seção — essa faixa serve só pra
          suavizar a costura bem estreita onde esse fundo sólido encontra o
          vídeo (que começa em 38% da largura), sem invadir o vídeo em si:
          a opacidade já chega a zero antes dos 38%. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, #0c0c0d 0%, #0c0c0d 28%, rgba(12,12,13,0.6) 33%, rgba(12,12,13,0) 37%)',
        }}
      />

      {/* Elemento decorativo: a mesma coroinha da logo, só que gigante e bem
          sutil, ocupando o espaço vazio do painel esquerdo no desktop — puro
          detalhe de identidade visual, não é uma foto nem depende de
          nenhuma informação nova. Fica atrás do texto (vem antes dele no
          DOM) e não interfere em clique/leitura de tela. */}
      {/* Centralizada no ponto de ancoragem (-translate-x-1/2 garante isso a
          partir de qualquer posição), só que mais pra direita dentro do
          painel de texto do que antes — ainda dentro da área 0-38%, mas
          deslocada de 19% (o meio exato) pra 27%. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 16"
        className="pointer-events-none absolute left-[27%] top-1/2 hidden h-[24rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 text-brass-400/[0.07] lg:block xl:h-[28rem] xl:w-[52rem]"
        fill="currentColor"
      >
        <path d="M1 5.5 6 9l6-7 6 7 5-3.5L21.5 14h-19L1 5.5Z" />
      </svg>

      <div className="container-px relative mx-auto w-full max-w-container pb-20 pt-40 sm:pb-24 lg:pb-0 lg:pt-0">
        {/* No celular/tablet o texto fica sobre o vídeo (que cobre a seção
            inteira), então em vez de escurecer o vídeo todo, só o bloco de
            texto ganha um cartão sólido/desfocado atrás dele — o vídeo em
            volta fica limpo, sem nenhum efeito escuro. No desktop (lg+) o
            texto já fica sobre o painel sólido à esquerda (fora do vídeo),
            então esse cartão é desligado. */}
        <div className="-mx-5 rounded-2xl bg-ink-950/55 px-5 py-7 backdrop-blur-sm sm:-mx-6 sm:px-6 lg:m-0 lg:max-w-[30rem] lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-0 xl:max-w-[34rem]">
          <span className="eyebrow mb-6 block text-bone/90 motion-safe:animate-fadeUp motion-safe:opacity-0">
            Osório · RS
          </span>

          <AnimatedHeadline />
        </div>
      </div>

      <a
        href="#experiencia"
        aria-label="Rolar para o conteúdo"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone/50 transition-colors hover:text-brass-400 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest2">Role</span>
        <ChevronUpIcon className="h-4 w-4 rotate-180 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
