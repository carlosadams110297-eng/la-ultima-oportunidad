"use client";

import { motion } from "framer-motion";
import { cartas } from "../data/cartas";

export default function Diario() {
  return (
    <section className="py-28 bg-[#f6f1eb]">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-serif text-[#7b1e3c] mb-20"
      >
        Pasan los días y acá sigo
      </motion.h2>

      <div className="max-w-5xl mx-auto px-8 space-y-16">

        {cartas.map((carta, index) => (

          <motion.article
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-12"
          >

            <p className="text-[#7b1e3c] italic mb-4">
              {carta.fecha}
            </p>

            <h3 className="text-4xl font-serif text-[#7b1e3c] mb-8">
              {carta.titulo}
            </h3>

            {carta.contenido.map((parrafo, i) => (

              <p
                key={i}
                className="text-xl leading-10 text-[#4d3b3b] mb-6"
              >
                {parrafo}
              </p>

            ))}

          </motion.article>

        ))}

      </div>

    </section>
  );
}