import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { OrderButton } from '../components/Buttons';

const NAV = [
  { label: 'Menu', href: '#menu' },
  { label: 'Top', href: '#top-sellers' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-[100svh] flex-col" style={{ overflowX: 'clip' }}>
      {/* warm glow behind the cup */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F27B1F 0%, rgba(242,123,31,0) 70%)' }}
      />

      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium uppercase tracking-wider text-[#FFE7C7] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[13.5vw] md:-mt-3 md:text-[14vw] lg:text-[14.5vw]">
            Hi, i&apos;m mootea
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[250px] -translate-x-1/2 -translate-y-[42%] sm:bottom-0 sm:top-auto sm:w-[340px] sm:translate-y-0 md:w-[400px] lg:w-[460px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="/drinks/hero.webp"
              alt="Mootea brown sugar bubble tea with tapioca pearls"
              className="w-full select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
              draggable={false}
              fetchPriority="high"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#FFE7C7] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Marrakech bubble tea, shaken fresh &amp; delivered to your door
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <OrderButton />
        </FadeIn>
      </div>
    </section>
  );
}
