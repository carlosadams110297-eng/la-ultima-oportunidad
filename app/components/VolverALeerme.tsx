"use client";

import { motion } from "framer-motion";

export default function VolverALeerme() {
  return (
    <section className="py-36 bg-[#efe7df]">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl mx-auto px-8 text-center"
      >

        <h2 className="text-5xl font-serif text-[#7b1e3c] mb-16">
          Cada vez que pienses en mí…
        </h2>

        <p className="text-2xl leading-[2.3] italic text-[#4d3b3b]">

          No recuerdes solamente mis errores.

          <br /><br />

          Recuerda también al hombre que reía contigo.

          <br /><br />

          Al que soñaba con formar una familia.

          <br /><br />

          Al que cruzó países solo para intentar construir una vida contigo.

          <br /><br />

          Al que todavía conserva cada fotografía porque nunca dejaron de significar algo.

          <br /><br />

          Ese Carlos nunca dejó de existir.

        </p>

      </motion.div>
    </section>
  );
}