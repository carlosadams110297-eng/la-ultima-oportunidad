"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#f6f1eb] text-[#3d2d2d] overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        <Image
          src="/images/abrazo.jpg"
          alt="Nosotros"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8">
            El peor error
            <br />
            de mi vida.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Pensé que te había perdido para siempre…
            <br />
            y esta fue mi última oportunidad para decirte cuánto te amo.
          </p>
        </motion.div>
      </section>

      {/* FRASE */}
      <section className="py-40 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl italic text-[#7b1e3c] max-w-4xl mx-auto leading-relaxed"
        >
          “Todavía sueño contigo.”
        </motion.h2>
      </section>

      {/* HISTORIA */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/jovenes.jpg"
            alt="Nuestra historia"
            width={700}
            height={900}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl font-bold text-[#7b1e3c] mb-10">
            Cómo empezó todo
          </h2>

          <p className="text-xl leading-10 text-[#4d3b3b]">
            Nos conocimos cuando todavía no entendíamos nada de la vida.
            <br /><br />
            No teníamos dinero.
            <br />
            No teníamos planes.
            <br />
            Pero teníamos algo que parecía imposible de romper.
            <br /><br />
            Y aunque el tiempo cambió tantas cosas…
            todavía hay partes de mí que siguen viviendo contigo.
          </p>
        </motion.div>
      </section>

      {/* FOTO PLAYA */}
      <section className="relative h-[90vh] my-32">

        <Image
          src="/images/playa.jpg"
          alt="Playa"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-white text-4xl md:text-7xl leading-relaxed max-w-5xl italic"
          >
            “Nunca imaginé que tantos recuerdos
            <br />
            pudieran doler tan bonito.”
          </motion.h2>
        </div>
      </section>

      {/* RECUERDOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center text-[#7b1e3c] mb-24"
        >
          Nuestros recuerdos
        </motion.h2>

        <div className="space-y-32">

          {/* BLOQUE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/brasil.jpg"
                alt="Brasil"
                width={700}
                height={800}
                className="rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-2xl leading-10 text-[#4d3b3b]">
                Brasil siempre va a vivir dentro de mí.
                <br /><br />
                Porque allí entendí que quería construir una vida entera contigo.
                <br /><br />
                Ese Carlos nunca dejó de existir.
                <br />
                Solo se perdió entre la neblina de su mente.
              </p>
            </motion.div>

          </div>

          {/* BLOQUE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-2 md:order-1"
            >
              <p className="text-2xl leading-10 text-[#4d3b3b]">
                Lo que más extraño no son los viajes.
                <br /><br />
                Son las pequeñas cosas.
                <br /><br />
                Tus risas.
                <br />
                Tus miradas.
                <br />
                Cómo te emocionabas cuando me veías feliz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 md:order-2"
            >
              <Image
                src="/images/cafe.jpg"
                alt="Recuerdos"
                width={700}
                height={800}
                className="rounded-3xl shadow-xl"
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* FRASE */}
      <section className="py-40 text-center px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl italic text-[#7b1e3c] max-w-5xl mx-auto leading-relaxed"
        >
          “Ese Carlos nunca dejó de existir.”
        </motion.h2>

      </section>

      {/* FINAL */}
      <section className="relative py-40 px-6 text-center overflow-hidden">

        <Image
          src="/images/fuego.jpg"
          alt="Final"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-7xl text-white mb-12"
          >
            La Última Oportunidad
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-white/90 text-2xl leading-10 mb-16"
          >
            No sé qué pasará mañana.
            <br /><br />
            Pero si esta realmente era nuestra última oportunidad…
            <br />
            quería vivirla contigo.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#7b1e3c] text-white px-10 py-5 rounded-full text-xl shadow-2xl"
          >
            desbloquéame, solo basta con esto
          </motion.button>

        </div>
      </section>

    </main>
  );
}