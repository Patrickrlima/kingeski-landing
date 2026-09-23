import { useEffect } from 'react';

/** Trava o scroll do body enquanto `locked` for true — usado no menu mobile. */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
