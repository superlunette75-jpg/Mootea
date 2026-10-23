import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { OrderButton } from '../components/Buttons';

const DECOR = [
  { src: '/drinks/decor-boba.webp', alt: '', cls: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[160px] md:w-[210px]', delay: 0.1, x: -80 },
  { src: '/drinks/decor-mango.webp', alt: '', cls: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]', delay: 0.25, x: -80 },
  { src: '/drinks/decor-strawberry.webp', alt: '', cls: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[160px] md:w-[210px]', delay: 0.15, x: 80 },
  { src: '/drinks/decor-matcha.webp', alt: '', cls: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[120px] sm:w-[170px] md:w-[220px]', delay: 0.3, x: 80 },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      {DECOR.map((d) => (
        <FadeIn key={d.src} delay={d.delay} x={d.x} y={0} duration={0.9} className={`pointer-events-none absolute ${d.cls}`}>
          <img src={d.src} alt={d.alt} loading="lazy" className="w-full animate-[float_6s_ease-in-out_infinite]" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
              About us
            </h2>
          </FadeIn>
          <AnimatedText
            text="Mootea brews every cup to order in Marrakech: real tea leaves, fresh fruit, house-made brown sugar pearls and silky cheese foam. Pick your size, your ice and your sweetness, and we'll bring it to your door. Let's make your day a little sweeter!"
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#FFE7C7]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <OrderButton />
      </div>
    </section>
  );
}
