"use client";

import { motion } from "framer-motion";

const eventos = [
  {
    anio: "2014",
    titulo: "Nos conocimos",
    descripcion:
      "Dos vidas completamente distintas se cruzaron sin imaginar todo lo que vendría después.",
  },
  {
    anio: "2017",
    titulo: "Nos hicimos novios",
    descripcion:
      "Comenzó una historia que cambió mi vida para siempre.",
  },
  {
    anio: "2019",
    titulo: "Nuestro viaje",
    descripcion:
      "Decidimos dejar muchas cosas atrás para construir una vida diferente.",
  },
  {
    anio: "2022",
    titulo: "Todo cambió",
    descripcion:
      "Las circunstancias nos obligaron a tomar caminos distintos.",
  },
  {
    anio: "2023",
    titulo: "Nunca dejamos de sentir",
    descripcion:
      "Aunque estábamos lejos, nuestra conexión nunca desapareció.",
  },
  {
    anio: "2024",
    titulo: "Todavía no era el momento",
    descripcion:
      "Seguíamos creyendo que algún día podríamos volver a encontrarnos.",
  },
  {
    anio: "2025",
    titulo: "Mi mayor error",
    descripcion:
      "Mis desequilibrios y mis decisiones terminaron destruyendo el momento que tanto esperábamos.",
  },
  {
    anio: "2026",
    titulo: "La última oportunidad",
    descripcion:
      "Nuestro destino volvió a cruzarse. Y esta página existe porque todavía creo en nosotros.",
  },
];

export default function Timeline() {
  return (
    <section className="py-28 bg-[#f6f1eb]">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-serif text-[#7b1e3c] mb-20"
      >
        Nuestra Historia
      </motion.h2>

      <div className="max-w-4xl mx-auto px-8 border-l-4 border-[#7b1e3c]">

        {eventos.map((evento, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-16 pl-10"
          >

            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-[#7b1e3c]" />

            <h3 className="text-3xl font-bold text-[#7b1e3c]">
              {evento.anio}
            </h3>

            <h4 className="text-2xl mt-2 mb-3">
              {evento.titulo}
            </h4>

            <p className="text-lg leading-8 text-[#4d3b3b]">
              {evento.descripcion}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}