import type { ReactNode } from 'react';

export default function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${on ? 'bg-[#140B06] text-[#FFE7C7]' : 'bg-white text-[#140B06] ring-1 ring-[#140B06]/10'}`}
    >
      {children}
    </button>
  );
}
