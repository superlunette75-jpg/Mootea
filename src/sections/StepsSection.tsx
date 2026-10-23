import FadeIn from '../components/FadeIn';

// "Services" from the base layout, used here to explain ordering
const STEPS = [
  { name: 'Pick your drinks', desc: 'Browse milk teas, fruit teas, matcha, cheese smoothies and coffee. Tap a drink to add it.' },
  { name: 'Make it yours', desc: 'Medium 500 ml or Large 700 ml, ice level, sweetness from 0% to 100%, and toppings like pearls, pudding or cheese foam.' },
  { name: 'Delivery or pickup', desc: 'Choose your Marrakech neighbourhood to see the delivery fee, or pick it up at the shop.' },
  { name: 'Send on WhatsApp', desc: 'Your order opens in WhatsApp, already written. Press send and we confirm the timing in the chat.' },
  { name: 'Pay on delivery', desc: 'Pay cash to the driver or at the counter. No card, no account, no app to install.' },
];

export default function StepsSection() {
  return (
    <section className="rounded-t-[40px] bg-[#FFF4E6] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#140B06] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        How to order
      </h2>
      <ol className="mx-auto max-w-5xl">
        {STEPS.map((s, i) => (
          <FadeIn
            as="li"
            key={s.name}
            delay={i * 0.1}
            className="flex items-center gap-6 py-8 sm:gap-10 sm:py-10 md:py-12"
            style={{ borderTop: i ? '1px solid rgba(20, 11, 6, 0.15)' : undefined }}
          >
            <span className="font-black leading-none text-[#F27B1F]" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 text-[#140B06]">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {s.name}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
