/**
 * Wordmark tipográfico da Kingeski — usado até a logo oficial (arquivo
 * vetorial/PNG da marca) estar disponível. A coroa dourada ao lado do nome
 * reproduz o detalhe visto no letreiro real da barbearia (no vídeo
 * enviado) — é só um toque de identidade, não substitui a logo oficial.
 * Quando você tiver o arquivo vetorial da marca, troque o conteúdo deste
 * componente por um <img src="/images/logo.svg" /> (mantendo o mesmo
 * componente, o resto da página não precisa mudar).
 */
export default function Logo({ tone = 'light', className = '' }) {
  const textColor = tone === 'light' ? 'text-bone' : 'text-ink-950';
  return (
    <span className={`inline-flex items-center gap-1.5 font-display select-none leading-none ${textColor} ${className}`}>
      <svg viewBox="0 0 24 16" className="h-3 w-[1.15rem] shrink-0 text-brass-400" fill="currentColor" aria-hidden="true">
        <path d="M1 5.5 6 9l6-7 6 7 5-3.5L21.5 14h-19L1 5.5Z" />
      </svg>
      <span>
        <span className="text-[1.35rem] font-semibold tracking-[0.02em] sm:text-2xl">Kingeski</span>
        <span className="ml-2 align-middle text-[0.62em] font-normal uppercase tracking-widest2 text-brass-400">
          Barbearia
        </span>
      </span>
    </span>
  );
}
