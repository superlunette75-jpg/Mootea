import type { ReactNode } from 'react';

interface BtnProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// Mootea take on the gradient ContactButton: espresso → tangerine → mango → honey
export function OrderButton({ children = 'Order Now', href = '#menu', onClick, className = '' }: BtnProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 active:scale-95 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #3B1A08 7%, #F27B1F 37%, #F7A23B 72%, #FFCF70 100%)',
        boxShadow: '0px 4px 4px rgba(242, 123, 31, 0.25), 4px 4px 12px #B4520E inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {children}
    </a>
  );
}

export function GhostButton({ children, href, onClick, className = '' }: BtnProps) {
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-[#FFE7C7] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#FFE7C7] transition-colors duration-200 hover:bg-[#FFE7C7]/10 active:scale-95 sm:px-8 sm:py-3 sm:text-sm ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
