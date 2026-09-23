import { useState } from 'react';
import { asset } from '../lib/asset';

/**
 * <img> com fallback visual elegante quando o arquivo ainda não existe.
 *
 * A ideia: os componentes já apontam pro caminho definitivo da foto (ex:
 * "/images/hero.jpg"). Enquanto esse arquivo não for adicionado em public/,
 * o <img> dispara onError e a gente mostra um painel de espera discreto —
 * não uma foto de banco de imagens fingindo ser da Kingeski. Assim que o
 * arquivo real for colocado no lugar, a foto passa a aparecer sozinha, sem
 * precisar tocar em nenhum componente.
 *
 * `priority` faz a imagem carregar eager (só pro Hero, acima da dobra); as
 * demais usam loading="lazy" + decoding="async" por padrão.
 */
export default function SmartImage({
  src,
  alt,
  label,
  width,
  height,
  priority = false,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  imgStyle,
  children,
}) {
  const [failed, setFailed] = useState(false);

  return (
    // `title` guarda a legenda só como dica (tooltip nativo do navegador ao
    // passar o mouse) — não é mais desenhada por cima da imagem, pra não
    // parecer uma marca d'água na página.
    <div className={`relative overflow-hidden bg-ink-800 ${className}`} title={failed ? label : undefined}>
      {!failed && (
        <img
          src={asset(src)}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          className={`${imgClassName} transition-transform duration-700 ease-premium`}
          style={imgStyle}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)',
              color: '#f3ede1',
            }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full border border-bone/10"
          />
        </div>
      )}

      {children}
    </div>
  );
}
