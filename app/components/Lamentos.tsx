"use client";

import { motion } from "framer-motion";

const lamentos = [
  "Lamento no haber sabido controlar mi mente cuando más te necesitaba.",
  "Lamento haber permitido que mis miedos hablaran por mí.",
  "Lamento todas las veces que te hice sentir sola.",
  "Lamento cada palabra que te lastimó.",
  "Lamento no haber disfrutado más cada momento contigo.",
  "Lamento no haber sido el hombre que merecías en ese instante.",
  "Pero jamás lamentaré haberte amado."
];

export default function Lamentos() {
  return (
    <section className="py-32 bg-[#efe7df]">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-serif text-[#7b1e3c] mb-20"
      >
        Mis Lamentos
      </motion.h2>

      <div className="max-w-4xl mx-auto px-8">

        {lamentos.map((texto, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="mb-10 border-l-4 border-[#7b1e3c] pl-8"
          >

            <p className="text-2xl leading-10 italic text-[#4d3b3b]">
              {texto}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}