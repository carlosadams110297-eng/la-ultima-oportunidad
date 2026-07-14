"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/images/abrazo.jpg"
        alt="Sara y Carlos"
        fill
        priority
        className="object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="text-center px-8"
        >

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-6xl md:text-8xl text-white font-serif mb-8"
          >
            La Última Oportunidad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="text-2xl md:text-3xl italic text-amber-100 max-w-4xl mx-auto leading-relaxed"
          >
            El peor error de mi vida.
            <br />
            Perdóname, Sara.
          </motion.p>

        </motion.div>

      </div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl"
      >
        ↓
      </motion.div>

    </section>
  );
}