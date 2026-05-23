export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b0a0f] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#b03a48] mb-8">
          El peor error de mi vida, perdóname Sara
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-20 italic">
          TODOS LOS DÍAS DE MI VIDA VOY A SEGUIR ESCRIBIENDO AQUÍ.
          <br /><br />
          Porque incluso cuando no sepa cómo encontrarte, siempre voy a encontrar la forma de hablarte.
          <br /><br />
          Y si algún día quieres saber de mí, vuelve aquí.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-4xl text-[#b03a48] font-bold mb-10 text-center">
          Nuestra Historia
        </h2>

        <div className="space-y-8 border-l border-[#b03a48] pl-6">
          <div>
            <h3 className="text-2xl font-bold text-[#d16b77]">2014</h3>
            <p className="text-gray-300">Nos conocimos.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#d16b77]">2017</h3>
            <p className="text-gray-300">Nos hicimos novios.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#d16b77]">2019</h3>
            <p className="text-gray-300">
              Iniciamos nuestro viaje hacia una vida diferente.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#d16b77]">2026</h3>
            <p className="text-gray-300">
              Nuestro destino nos unió de nuevo y no dejaré de intentar arreglar nuestros problemas.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-24">
        <div className="bg-[#2a1017] p-8 rounded-3xl shadow-2xl">
          <h2 className="text-4xl text-[#b03a48] font-bold mb-10 text-center">
            Carta Final
          </h2>

          <p className="text-lg text-gray-200 leading-9">
            Sara Salazar,
            <br /><br />
            Todavía sueño contigo.
            <br /><br />
            No quiero volver al pasado.
            Quiero construir un nuevo comienzo.
            <br /><br />
            Más sano.
            Más honesto.
            Más fuerte.
            Más humano.
          </p>
        </div>
      </section>
    </main>
  );
}