export default function UltimaOportunidadPage() {
  const posts = [
    {
      fecha: "22 Mayo 2026",
      titulo: "Para ti",
      contenido:
        "No hice esta página para convencerte de nada. La hice porque necesitaba dejar en algún lugar todo lo que siento por ti. A veces las palabras llegan tarde, pero siguen siendo reales.",
    },
    {
      fecha: "Nuestro recuerdo",
      titulo: "Lo que más extraño",
      contenido:
        "Extraño las pequeñas cosas. Las conversaciones simples, las risas sin sentido y la tranquilidad que sentía cuando estabas conmigo.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2f2f2f] font-serif">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,182,193,0.5),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl">
          <p className="tracking-[0.4em] uppercase text-sm mb-6 text-[#8b6f6f]">
            La última oportunidad de nuestras vidas
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            El error más grande de mi vida
          </h1>

          <p className="text-xl md:text-2xl text-[#5f5f5f] leading-relaxed max-w-3xl mx-auto">
            Te amo y haré lo imposible para tenerte en mi vida.
          </p>

          <div className="mt-16 animate-bounce text-[#8b6f6f] text-sm">
            ↓ Sigue bajando ↓
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 border border-[#ece7e1]">
          <h2 className="text-3xl mb-8 font-light">Una carta para ti</h2>

          <div className="space-y-6 text-lg leading-9 text-[#444]">
            <p>
              No sé si esta página cambiará algo entre nosotros, pero necesitaba
              crear un lugar donde pudieras ver todo lo que siento realmente.
            </p>

            <p>
              A veces uno entiende demasiado tarde el valor de una persona. Y yo
              entendí que tú eras hogar, tranquilidad y amor en su forma más
              sincera.
            </p>

            <p>
              No quiero prometer perfección. Solo quiero demostrarte que todavía
              estoy dispuesto a luchar por nosotros.
            </p>

            <p>
              Gracias por cada momento, incluso por los difíciles. Porque aún en
              medio del dolor, sigo eligiéndote.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-[#d8d1cb]" />
          <h2 className="text-3xl font-light">Escritos</h2>
          <div className="h-px flex-1 bg-[#d8d1cb]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#ece7e1] hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-sm tracking-widest uppercase text-[#8b6f6f] mb-3">
                {post.fecha}
              </p>

              <h3 className="text-2xl mb-5 font-light">{post.titulo}</h3>

              <p className="leading-8 text-[#555]">{post.contenido}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#ddd] py-10 text-center text-[#777] px-6">
        <p className="italic">
          “Si todavía existe una oportunidad, quiero que sea contigo.”
        </p>
      </footer>
    </div>
  );
}
