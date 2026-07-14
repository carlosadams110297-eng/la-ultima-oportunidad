"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { recuerdos } from "../data/recuerdos";

export default function Recuerdos() {
  return (
    <section className="py-28 bg-[#f6f1eb]">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-serif text-[#7b1e3c] mb-20"
      >
        Nuestros Recuerdos
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">

        {recuerdos.map((foto, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-2xl shadow-xl bg-white"
          >

            <div className="relative h-80 overflow-hidden">

              <Image
                src={foto.imagen}
                alt={foto.titulo}
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-serif text-[#7b1e3c] mb-3">
                {foto.titulo}
              </h3>

              <p className="italic text-[#4d3b3b] leading-7">
                {foto.frase}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}