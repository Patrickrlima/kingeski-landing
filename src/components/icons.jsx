/**
 * Ícones em SVG inline — sem bibliotecas externas, sem emoji (mantém
 * consistência de traço/peso e funciona bem em qualquer tema).
 */
export function ChevronUpIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

export function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.32 4.94L2 22l5.2-1.3a9.9 9.9 0 0 0 4.82 1.23h.01c5.52 0 10-4.48 10-10S17.55 2 12.02 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.78.83-3.02-.2-.31a8.13 8.13 0 0 1-1.26-4.34c0-4.5 3.67-8.16 8.2-8.16 2.19 0 4.25.86 5.8 2.4a8.1 8.1 0 0 1 2.4 5.78c0 4.5-3.68 8.2-8.19 8.2Zm4.5-6.14c-.25-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.13-.16.25-.63.79-.78.95-.14.16-.28.18-.53.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function CloseIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function MenuIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function StarIcon({ className = '', filled = true }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2" className={className} aria-hidden="true">
      <path d="M10 1.6l2.47 5.24 5.63.62-4.2 3.9 1.15 5.64L10 14.2l-5.05 2.8 1.15-5.64-4.2-3.9 5.63-.62L10 1.6Z" />
    </svg>
  );
}

export function MapPinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function ClockIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}
