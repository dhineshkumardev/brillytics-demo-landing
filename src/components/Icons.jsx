/** Reusable SVG icons for better UI feel. Use currentColor to inherit text color. */

const iconClass = "svg-icon";

export function IconChart({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 16v-5" />
      <path d="M12 16v-8" />
      <path d="M17 16V9" />
    </svg>
  );
}

export function IconStrategy({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      <path d="M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M5.64 18.36l1.42-1.42M16.94 7.06l1.42-1.42" />
    </svg>
  );
}

export function IconTraining({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H2" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a4 4 0 0 0-4-4Z" />
      <path d="M12 11v4" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function IconBulb({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15 8a3 3 0 0 0-6 0c0 2 1.5 3 2 4h2c.5-1 2-2 2-4Z" />
      <path d="M12 2v1" />
      <path d="M5 5l1 1" />
      <path d="M18 5l1 1" />
      <path d="M5 12H3" />
      <path d="M21 12h-2" />
    </svg>
  );
}

export function IconLayers({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 2 10 6-10 6L2 8l10-6Z" />
      <path d="m2 16 10 6 10-6" />
    </svg>
  );
}

export function IconQuote({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 12h2v6H4V12zm0-6h2v5H4V6zm8 6h2v6h-2V12zm0-6h2v5h-2V6z" opacity="0.4" />
      <path d="M14 6h4v2l-2 3 2 3v2h-4v-2l2-3-2-3V6zm-10 6h4v2l-2 3 2 3v2H4v-2l2-3-2-3v-2z" />
    </svg>
  );
}

export function IconUsers({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconRocket({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function IconCheck({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconSpark({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.5 6L6 8l4.5 3L9 21l3-6 3 6-1.5-10L18 8l-4.5 1L12 3Z" />
    </svg>
  );
}

export function IconData({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function IconTarget({ className = "", size = 24, ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
