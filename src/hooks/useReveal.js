import { useEffect, useRef, useState } from 'react';

/**
 * Hook de revelação por scroll — usa IntersectionObserver nativo (sem
 * biblioteca externa). Retorna um ref pra colocar no elemento e um boolean
 * `visible`. Respeita prefers-reduced-motion: se o usuário pediu menos
 * movimento, o elemento já nasce visível, sem observer nem transição.
 */
export function useReveal({ threshold = 0.05, rootMargin = '0px 0px 12% 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return undefined;
    }

    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
