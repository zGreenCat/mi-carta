'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

const ANIM_MS = 750;

// 📝 EDITA AQUÍ EL CONTENIDO DE LA CARTA
const paragraphs = [
  'Querido Santa Claus:',
  'Espero que estés súper bien en el Polo Norte y que te estés preparando para la noche más mágica del año. Te escribo para avisarte que yo me porté súper bien este año: terminé mi práctica y saqué un 7 en la presentación de la defensa. Por lo que solo me falta un paso más para llegar al punto de partida de mi profesión.',
  'También ya estoy trabajando en un proyecto, lo que me permitió comprar un notebook. El problema es que se calienta mucho… Ya no sé si es el verano o mi notebook el que produce tanto calor, así que no me vendría mal una base para notebook sin ventilador (los ventiladores le hacen mal a la mayoría).',
  'Bueno Santa, te dejo descansar para que sigas preparando tu viaje. Espero verte pronto y que puedas cumplir mi deseo. ¡Feliz Navidad!',
];

const signature = 'Un Yerno con calor'; // 📝 EDITA AQUÍ TU NOMBRE

type Phase = 'closed' | 'opening' | 'open' | 'closing';

export default function EnvelopeLetter() {
  const [phase, setPhase] = useState<Phase>('closed');

  const envelopeButtonRef = useRef<HTMLButtonElement>(null);
  const letterContentRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const openLetter = () => {
    if (phase !== 'closed') return;
    clearTimers();
    setPhase('opening');

    // Cuando termina la animación de entrada, deja abierto
    timers.current.push(
      window.setTimeout(() => {
        setPhase('open');
      }, ANIM_MS)
    );
  };

  const closeLetter = () => {
    if (phase === 'closed' || phase === 'closing') return;
    clearTimers();
    setPhase('closing');

    // Cuando termina la animación de salida, vuelve a cerrado
    timers.current.push(
      window.setTimeout(() => {
        setPhase('closed');
      }, ANIM_MS)
    );
  };

  const handleToggle = () => {
    if (phase === 'closed') openLetter();
    else closeLetter();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  // Foco / scroll cuando termina de abrir
  useEffect(() => {
    if (phase === 'open') {
      const t = window.setTimeout(() => {
        letterContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        letterContentRef.current?.focus();
      }, 120);
      return () => window.clearTimeout(t);
    }

    if (phase === 'closed') {
      const t = window.setTimeout(() => envelopeButtonRef.current?.focus(), 80);
      return () => window.clearTimeout(t);
    }
  }, [phase]);

  // Helpers
  const isOpeningOrOpen = phase === 'opening' || phase === 'open';
  const isClosing = phase === 'closing';

  return (
  <div className="relative w-full max-w-2xl mx-auto px-4">
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative w-full aspect-[16/10]">
        {/* ========= CARTA (overlay que scrollea, sin scroll interno en el papel) ========= */}
        <div
          className={[
            'fixed inset-0 z-50',
            'flex justify-center',
            'overflow-y-auto',
            'px-4 py-10',
            'transition-all ease-out',
            `duration-[${ANIM_MS}ms]`,
            'motion-reduce:transition-none',
            phase === 'closed' ? 'pointer-events-none' : 'pointer-events-auto',
            isOpeningOrOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-hidden={phase === 'closed'}
          onClick={closeLetter}
        >
          <div
            ref={letterContentRef}
            tabIndex={-1}
            className={[
              'w-full max-w-3xl', // ✅ más ancha => se ve más “cuadrada”
              'transition-transform ease-out',
              `duration-[${ANIM_MS}ms]`,
              'motion-reduce:transition-none',
              isOpeningOrOpen ? 'translate-y-0 scale-100' : 'translate-y-6 scale-[0.99]',
            ].join(' ')}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl shadow-2xl border-4 border-amber-700/30 bg-gradient-to-br from-[#fef8ed] via-[#fffbf0] to-[#fef3d8] p-5 md:p-8 overflow-hidden">
              {/* Textura de papel */}
              <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px),
                    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
                  `,
                }}
              />

              {/* Decoraciones de esquinas */}
              <div className="absolute top-3 left-3 w-12 h-12 border-t-[3px] border-l-[3px] border-red-700/50 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-12 h-12 border-t-[3px] border-r-[3px] border-red-700/50 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-12 h-12 border-b-[3px] border-l-[3px] border-red-700/50 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b-[3px] border-r-[3px] border-red-700/50 rounded-br-xl" />

              {/* Elementos decorativos navideños */}
              <div className="absolute top-6 left-6 text-3xl opacity-60 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '3s' }}>
                🎄
              </div>
              <div className="absolute top-8 right-8 text-2xl opacity-60 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '4s' }}>
                ⭐
              </div>
              <div className="absolute bottom-8 left-10 text-2xl opacity-60 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '3.5s' }}>
                🎁
              </div>

              {/* Marco interior */}
              <div className="absolute inset-6 rounded-lg ring-2 ring-amber-600/20 pointer-events-none shadow-inner" />

              <div className="relative z-10">
                {/* Título */}
                <div className="text-center mb-8">
                  <div className="inline-block relative">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-700 via-red-800 to-red-900 tracking-tight mb-2">
                      Carta a Santa
                    </h1>
                    <img 
                      src="/swappy-20251130_164305.png" 
                      alt="Gato navideño" 
                      className="absolute -top-2 -right-10 md:-right-16 w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                  
                </div>

                {/* Separador */}
                <div className="relative h-8 mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-[#fef8ed] to-[#fef3d8] px-4">
                      <span className="text-2xl">🎄</span>
                    </div>
                  </div>
                </div>

                {/* Texto */}
                <div className="space-y-6 text-gray-900 leading-relaxed">
                  {paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={[
                        i === 0 ? 'font-bold text-xl md:text-3xl text-red-900 font-serif' : 'text-base md:text-xl font-sans',
                        'break-words hyphens-auto',
                        i === 0 ? 'mb-6' : '',
                      ].join(' ')}
                      style={{
                        textAlign: i === 0 ? 'left' : 'justify',
                        lineHeight: i === 0 ? '1.3' : '1.9',
                        textShadow: i === 0 ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
                      }}
                    >
                      {p}
                    </p>
                  ))}

                  {/* Firma */}
                  <div className="mt-12 pt-6 border-t-2 border-amber-500/40 text-right relative">
                    <div className="absolute -top-3 right-0 text-xl">✨</div>
                    <p className="font-bold text-xl md:text-3xl text-red-800 mb-2 font-serif italic">{signature}</p>
                    <p className="text-sm md:text-base text-gray-600 font-medium">
                      🎄 {new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })} 🎄
                    </p>
                  </div>
                </div>

                {/* Cerrar */}
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={closeLetter}
                    className="group relative px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:via-red-800 hover:to-red-700 text-white font-bold text-base md:text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-4 motion-reduce:transition-none overflow-hidden"
                    aria-label="Cerrar carta"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Cerrar carta
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 motion-reduce:transition-none" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========= SOBRE (se va al abrir, vuelve al cerrar) ========= */}
        <div
          className={[
            'absolute inset-0',
            'transition-all ease-in-out',
            `duration-[${ANIM_MS}ms]`,
            'motion-reduce:transition-none',
            isOpeningOrOpen ? 'opacity-0 translate-y-24 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100 pointer-events-auto',
          ].join(' ')}
        >
          <button
            ref={envelopeButtonRef}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            aria-label={phase === 'closed' ? 'Abrir carta a Santa' : 'Carta en transición'}
            aria-expanded={phase !== 'closed'}
            disabled={phase !== 'closed'}
            className="relative w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-lg transition-all disabled:cursor-default"
          >
            <div className="relative w-full h-full rounded-lg">
              <div className="absolute inset-0 rounded-lg shadow-2xl" />

              {/* Cuerpo del sobre */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f6f6f6] rounded-lg border border-black/5 overflow-hidden">
                <div className="absolute inset-0 clip-env-left bg-gradient-to-br from-[#f4f4f4] to-transparent opacity-90" />
                <div className="absolute inset-0 clip-env-right bg-gradient-to-bl from-[#f4f4f4] to-transparent opacity-90" />
                <div className="absolute inset-0 clip-env-bottom bg-gradient-to-t from-[#ededed] to-transparent opacity-80" />

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2/3 space-y-2 opacity-30">
                  <div className="h-0.5 bg-gray-500/80 rounded w-full" />
                  <div className="h-0.5 bg-gray-500/80 rounded w-4/5" />
                  <div className="h-0.5 bg-gray-500/80 rounded w-3/5" />
                </div>
              </div>

              {/* Tapa */}
              <div
                className={[
                  'absolute top-0 left-0 w-full h-[55%] origin-top',
                  'transition-transform ease-in-out',
                  `duration-[${ANIM_MS}ms]`,
                  'motion-reduce:transition-none',
                ].join(' ')}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isOpeningOrOpen ? 'rotateX(-175deg)' : 'rotateX(0deg)',
                }}
              >
                <div className="absolute inset-0 clip-env-flap bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-t-lg overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 18% 28%, rgba(255,255,255,0.9) 2px, transparent 2px),
                        radial-gradient(circle at 65% 20%, rgba(255,255,255,0.9) 2px, transparent 2px),
                        radial-gradient(circle at 82% 60%, rgba(255,255,255,0.9) 2px, transparent 2px),
                        radial-gradient(circle at 30% 72%, rgba(255,255,255,0.9) 2px, transparent 2px),
                        radial-gradient(circle at 52% 52%, rgba(255,255,255,0.9) 1.6px, transparent 1.6px),
                        radial-gradient(circle at 75% 82%, rgba(255,255,255,0.9) 1.6px, transparent 1.6px)
                      `,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 100%',
                    }}
                  />
                </div>
              </div>

              {/* Sello */}
              <div
                className={[
                  'absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2',
                  'w-16 h-16 rounded-full flex items-center justify-center',
                  'bg-gradient-to-br from-red-500 to-red-700 border-4 border-amber-300 shadow-xl',
                  'transition-all duration-500 motion-reduce:transition-none',
                  phase === 'closed' ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
                  'z-10',
                ].join(' ')}
              >
                <span className="text-3xl">🎄</span>
              </div>

              {/* Instrucción */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white/90 text-sm font-medium tracking-wide animate-pulse motion-reduce:animate-none">Click para abrir ✨</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

}
