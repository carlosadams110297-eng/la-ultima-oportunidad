"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showPhotos, setShowPhotos] = useState(false);

  const fullText =
    "TODOS LOS DÍAS DE MI VIDA VOY A SEGUIR ESCRIBIENDO AQUÍ.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#5a4b4b] px-6 py-16">
      <section className="max-w-5xl mx-auto text-center mb-32">
        <h1 className="text-5xl md:text-7xl font-bold text-[#8b1e3f] leading-tight mb-10">
          El peor error de mi vida,
          <br />
          perdóname Sara
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto min-h-[120px]">
          {typedText}
          <br />
          <br />
          Porque incluso cuando no sepa cómo encontrarte, siempre voy a encontrar la forma de hablarte.
          <br />
          <br />
          Y si algún día quieres saber de mí, de lo que siento o de cuánto te sigo extrañando… vuelve aquí.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-32">
        <h2 className="text-4xl font-bold text-[#8b1e3f] mb-14 text-center">
          Nuestra Historia
        </h2>

        <div className="border-l-2 border-[#8b1e3f] pl-8 space-y-14">
          {[
            ["2014", "Nos conocimos."],
            ["2017", "Nos hicimos novios."],
            ["2019", "Iniciamos nuestro viaje hacia una vida diferente."],
            ["2022", "Nuestras vidas tomaron un rumbo distinto."],
            ["2023", "Nuestra conexión nunca se desvaneció."],
            ["2024", "Aún no era el momento correcto para estar juntos."],
            ["2025", "Nuestro momento juntos fue arruinado por mis desequilibrios mentales."],
            ["2026", "Nuestro destino nos unió de nuevo y no dejaré de intentar arreglar nuestros problemas."]
          ].map(([year, text]) => (
            <div key={year}>
              <h3 className="text-3xl font-bold text-[#8b1e3f] mb-2">
                {year}
              </h3>

              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-32">
        <h2 className="text-4xl font-bold text-[#8b1e3f] text-center mb-16">
          Nuestros Recuerdos
        </h2>

        <div className="space-y-10">
          {[
            `Recuerdo nuestra primera noche en Chile. Todavía puedo sentir el abrazo con el que nos encontramos después de tanto tiempo soñando ese momento. Lloramos apenas nos vimos, como si nuestros cuerpos supieran todo lo que habíamos tenido que soportar para llegar hasta allí.`,

            `Nunca voy a olvidar el Pan de Azúcar en Brasil. Nuestro primer viaje internacional. Nosotros dos mirando el horizonte, sintiendo que la vida apenas comenzaba para nosotros. Ese Carlos nunca dejó de existir. Solo se perdió entre la neblina de su mente.`,

            `Extraño nuestras risas más de lo que puedo explicar. Nuestros sobrenombres absurdos, las bromas que nadie más entendía y las veces que terminábamos riéndonos por tonterías hasta quedarnos sin aire.`,

            `Venezuela, Chile, Brasil, Argentina… sin importar dónde estuviéramos, siempre existía esa forma única de encontrarnos otra vez. La intimidad nunca fue solo deseo contigo. Era refugio. Era amor.`
          ].map((text, index) => (
            <div
              key={index}
              className="bg-[#fffaf5] shadow-xl rounded-3xl p-10 border border-[#eaded1] transition-all duration-300 hover:scale-[1.01]"
            >
              <p className="text-lg leading-10 whitespace-pre-line">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-32">
        <h2 className="text-4xl font-bold text-[#8b1e3f] text-center mb-16">
          Mis Lamentos
        </h2>

        <div className="bg-[#fffaf5] shadow-xl rounded-3xl p-10 border border-[#eaded1]">
          <p className="text-lg leading-10 whitespace-pre-line">
            No puedo seguir culpando al mundo por heridas que nunca aprendí a sanar.

            Durante mucho tiempo intenté esconder mis inseguridades detrás del orgullo, el silencio y la frustración.

            Sara Salazar, nunca fue falta de amor. Fue miedo.

            Miedo a no sentirme suficiente para darte la vida que mereces.

            Hoy entiendo que muchas de mis reacciones nacieron de cicatrices mucho más antiguas que nuestra relación.

            Nada de eso justifica haberte hecho daño.

            Pero sí me obliga a aceptar que necesito cambiar de verdad.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-center mb-32">
        <h2 className="text-4xl font-bold text-[#8b1e3f] mb-8">
          Si aún crees en mí...
        </h2>

        <p className="text-xl mb-10">
          SI AÚN CREES EN MÍ, EN LO QUE FUIMOS Y EN LO QUE PODEMOS LLEGAR A SER, PRESIONA:
        </p>

        <button
          onClick={() => setShowPhotos(true)}
          className="bg-[#8b1e3f] hover:bg-[#a3284c] text-white px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-xl hover:scale-105"
        >
          desbloquéame, solo basta con esto
        </button>

        {showPhotos && (
          <div className="mt-16 bg-[#fffaf5] rounded-3xl p-10 shadow-xl border border-[#eaded1]">
            <h3 className="text-3xl text-[#8b1e3f] font-bold mb-8">
              Desbloquéame...
            </h3>

            <p className="text-xl leading-10">
              Porque todavía sigo creyendo en nosotros.
              <br />
              <br />
              Aquí podrás colocar sus fotos juntos más adelante ❤️
            </p>
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto">
        <div className="bg-[#fffaf5] shadow-xl rounded-3xl p-10 border border-[#eaded1]">
          <h2 className="text-4xl font-bold text-[#8b1e3f] mb-12 text-center">
            Carta Final
          </h2>

          <p className="text-lg leading-10 whitespace-pre-line">
            Sara Salazar,

            Si llegaste hasta el final de esta página, probablemente ya entendiste algo que me tomó demasiado tiempo aceptar:

            Te amo profundamente, pero eso nunca fue suficiente si yo no aprendía también a sanar las partes rotas dentro de mí.

            Durante mucho tiempo permití que mis inseguridades, mis heridas y mis problemas internos hablaran más fuerte que el amor que sentía por ti.

            Hoy no quiero escribirte promesas vacías.

            Quiero escribirte decisiones reales.

            Quiero cambiar.
            Quiero sanar.
            Quiero aprender a amar sin miedo.

            Necesito continuar terapia.
            Necesito reconstruirme como hombre, como persona y como pareja.

            Porque contigo conocí la versión más feliz de mí.

            La versión que soñaba con un hogar.
            Con viajes.
            Con hijos.
            Con estabilidad.

            Todavía sueño contigo.

            No quiero volver al pasado.
            Quiero construir un nuevo comienzo.

            Más sano.
            Más honesto.
            Más fuerte.
            Más humano.

            Y si algún día decides mirar atrás… espero que encuentres a un hombre diferente.

            Un hombre que finalmente aprendió a sanar aquello que antes destruía todo lo que amaba.
          </p>
        </div>
      </section>
    </main>
  );
}