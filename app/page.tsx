import EnvelopeLetter from './components/EnvelopeLetter';

export default function Home() {
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

      {/* Contenido principal */}
      <main className="relative z-10 w-full flex items-center justify-center">
        <EnvelopeLetter />
      </main>
    </div>
  );
}
