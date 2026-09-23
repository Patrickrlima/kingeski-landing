import { useReveal } from '../hooks/useReveal';

/**
 * Wrapper de revelação progressiva ao rolar a página — fade + slide-up
 * sutil, com atraso opcional (`delay`, em múltiplos de 90ms) pra criar
 * efeito de cascata entre itens de uma grade/lista.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', lift = true }) {
  const { ref, visible } = useReveal();

  // `lift=false` tira o "slide-up" (translateY) da entrada, deixando só o
  // fade de opacidade — usado em grades bem compactas (galeria) onde um
  // item deslizando de baixo pra cima pode sobrepor visualmente a célula
  // vizinha de cima durante a transição (um "fantasma" temporário).
  const hiddenState = lift ? 'translate-y-6 opacity-0' : 'opacity-0';
  const visibleState = lift ? 'translate-y-0 opacity-100' : 'opacity-100';

  return (
    <Tag
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-premium motion-reduce:transition-none ${
        visible ? visibleState : hiddenState
      }`}
      style={{ transitionDelay: visible ? `${delay * 90}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
