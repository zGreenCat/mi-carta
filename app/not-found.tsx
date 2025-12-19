import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="christmas-background min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Capa de copos de nieve */}
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>

      {/* Contenido 404 */}
      <main className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="relative rounded-2xl shadow-2xl border-4 border-red-700/30 bg-gradient-to-br from-[#fef8ed] via-[#fffbf0] to-[#fef3d8] p-8 md:p-12 overflow-hidden">
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

          {/* Contenido */}
          <div className="relative z-10 text-center">
            {/* Número 404 grande */}
            <div className="mb-6">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-700 via-red-800 to-red-900 tracking-tight leading-none">
                404
              </h1>
              <div className="flex justify-center items-center gap-3 mt-4">
                <span className="text-4xl">🎅</span>
                <span className="text-3xl">❌</span>
                <span className="text-4xl">🎄</span>
              </div>
            </div>

            {/* Separador decorativo */}
            <div className="relative h-8 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-[#fef8ed] to-[#fef3d8] px-4">
                  <span className="text-2xl">🔔</span>
                </div>
              </div>
            </div>

            {/* Mensaje de error */}
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 font-serif">
                ¡Oh no! Página no encontrada
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-sans max-w-prose mx-auto">
                Parece que te has perdido en el Polo Norte. Esta página no existe o Santa se la llevó en su trineo. 🛷
              </p>
              <p className="text-base md:text-lg text-gray-700 italic">
                Pero no te preocupes, ¡aún puedes encontrar el camino de regreso!
              </p>
            </div>

            {/* Separador */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/70 to-transparent mb-8" />

            {/* Botón para volver */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:via-red-800 hover:to-red-700 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-4 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Volver al inicio
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">🏠</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </div>

            {/* Mensaje adicional */}
            <p className="mt-8 text-sm text-gray-600 font-medium">
              🎄 Que tengas una Feliz Navidad 🎄
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
