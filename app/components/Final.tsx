"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Final() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/Final.jpg"
        alt="Último recuerdo"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 max-w-4xl px-8 text-center text-white"
      >
        <h2 className="text-5xl md:text-6xl font-serif mb-10">
          Si algún día decides volver...
        </h2>

        <p className="text-2xl leading-10 italic mb-16 text-amber-100">
          Aquí seguiré.
        </p>

        <div className="w-40 h-px bg-amber-200 mx-auto mb-10" />

        <p className="text-xl tracking-[0.3em] uppercase text-amber-200">
          Con amor,
        </p>

        <p className="mt-4 text-4xl font-serif">
          Carlos
        </p>
      </motion.div>

    </section>
  );
}