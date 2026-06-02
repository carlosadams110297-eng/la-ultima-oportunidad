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

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="relative z-10 px-6"
        >
          <h1 className="typing text-5xl md:text-8xl font-bold text-white leading-tight mb-8 inline-block">
            El peor error
            <br />
            de mi vida,
            <br />
            perdóname Sara.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mt-10">
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
          className="text-4xl md:text-7xl italic text-[#7b1e3c] max-w-5xl mx-auto leading-relaxed"
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

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 py-32">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl text-center font-bold text-[#7b1e3c] mb-24"
        >
          Nuestra historia
        </motion.h2>

        <div className="space-y-16 border-l-2 border-[#7b1e3c]/30 pl-10">

          {[
            ["2014", "Nos conocimos."],
            ["2017", "Nos hicimos novios."],
            ["2019", "Iniciamos nuestro viaje hacia una vida diferente."],
            ["2022", "Nuestras vidas tomaron un rumbo distinto."],
            ["2023", "Nuestra conexión nunca se desvaneció."],
            ["2024", "Aún no era el momento correcto para estar juntos."],
            ["2025", "Nuestro momento fue destruido por mis desequilibrios mentales."],
            ["2026", "Nuestro destino volvió a unirnos y no dejaré de luchar por nosotros."]
          ].map(([year, text], index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -left-[49px] top-2 w-5 h-5 rounded-full bg-[#7b1e3c]" />

              <h3 className="text-3xl font-bold text-[#7b1e3c] mb-3">
                {year}
              </h3>

              <p className="text-xl text-[#4d3b3b] leading-9">
                {text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FOTO laprimera */}
      <section className="relative h-[90vh] my-32">

        <Image
          src="/images/laprimera.jpg"
          alt="laprimera"
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
            “Quiero seguir consruyendo recuerdos contigo.
            <br />
            Es lo que mas quiero.”
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

          {/* BRASIL */}
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
                Soñábamos con viajes.
                <br />
                Con una familia.
                <br />
                Con un hogar.
                <br />
                Con una vida donde pudiéramos crecer juntos.
                <br /><br />
                Ese Carlos nunca dejó de existir.
                <br />
                Solo se perdió entre la neblina de su mente.
              </p>
            </motion.div>

          </div>

          {/* CAFE */}
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
                <br /><br />
                Sara Salazar…
                <br />
                jamás voy a olvidar todo lo que construimos juntos como migrantes,
                intentando sobrevivir lejos de casa,
                sosteniéndonos el uno al otro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 md:order-2"
            >
              <Image
                src="/images/Recuerdos.jpg"
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

      {/* MIS LAMENTOS */}
      <section className="max-w-5xl mx-auto px-6 py-32">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl text-center font-bold text-[#7b1e3c] mb-20"
        >
          Mis lamentos
        </motion.h2>

        <div className="space-y-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/70 rounded-3xl p-10 shadow-xl"
          >
            <p className="text-xl leading-10 text-[#4d3b3b]">
              Sara Salazar…
              <br /><br />
              Creo que una de las cosas que más destruyó nuestra relación fueron mis inseguridades.
              <br /><br />
              Nunca me sentí suficiente para darte todo lo que merecías.
              <br /><br />
              Y mientras más miedo tenía de perderte…
              más terminé destruyendo las cosas que más amaba.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/70 rounded-3xl p-10 shadow-xl"
          >
            <p className="text-xl leading-10 text-[#4d3b3b]">
              Mis cicatrices, mi infancia, mis frustraciones…
              terminaron convirtiéndose en heridas que también te lastimaron a ti.
              <br /><br />
              Me costaba aceptar cuando las cosas salían mal.
              <br />
              Me costaba controlar mi mente.
              <br />
              Me costaba sostenerme emocionalmente.
              <br /><br />
              Y aun así…
              tú siempre intentaste entenderme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#7b1e3c] text-white rounded-3xl p-12 shadow-2xl"
          >
            <p className="text-2xl leading-10">
              Hoy entiendo que necesito cambiar.
              <br /><br />
              Necesito sanar.
              <br />
              Necesito terapia.
              <br />
              Necesito convertirme en alguien capaz de construir paz y no dolor.
              <br /><br />
              Y si algún día decides volver a tomar mi mano…
              quiero reconstruir algo nuevo contigo.
              <br /><br />
              Algo más sano.
              <br />
              Más fuerte.
              <br />
              Más real.
            </p>
          </motion.div>

        </div>

      </section>

      {/* VOLVER A LEERME */}
      <section className="py-40 px-6 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-5xl md:text-6xl italic text-[#7b1e3c] max-w-5xl mx-auto mb-16"
        >
          “Cada vez que pienses en mí…”
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-2xl leading-10 max-w-4xl mx-auto text-[#4d3b3b]"
        >
          Quiero que regreses aquí.
          <br /><br />
          Porque mientras exista una mínima esperanza de reconstruirnos…
          seguiré escribiéndote.
          <br /><br />
          Seguiré dejando partes de mí en esta página.
          <br /><br />
          Tal vez cartas.
          <br />
          Tal vez recuerdos.
          <br />
          Tal vez fragmentos de todo lo que todavía siento por ti.
          <br /><br />
          Pero siempre encontraré una forma de comunicarme contigo.
          <br /><br />
          Incluso en silencio.
        </motion.p>

      </section>

      {/* FINAL */}
      <section className="relative py-40 px-6 text-center overflow-hidden">

        <Image
          src="/images/Final.jpg"
          alt="Final"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">

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
          ><section className="diario">
  <h2>PASAN LOS DÍAS Y ACÁ SIGO</h2>
  <section className="mb-20">
  <h2 className="text-4xl font-serif text-amber-200 mb-8 text-center">
    ENTRE SUEÑOS Y REALIDADES
  </h2>

  <div className="max-w-4xl mx-auto bg-black/30 p-8 rounded-lg backdrop-blur-sm">
    <p className="text-amber-100 italic mb-6">
      1 de Junio de 2026
    </p>

```
<p className="mb-4">
  Hola, Sara aca sigo.
</p>

<p className="mb-4">
  Hay algo que me gustaria contarte.
</p>

<p className="mb-4">
  Desde aquel sábado en que nuestros caminos se separaron, no ha habido una sola noche en la que no hayas aparecido en mis sueños.
</p>

<p className="mb-4">
  Y es extraño.
</p>

<p className="mb-4">
  Porque se ha convertido en el momento que más espero y que más temo al mismo tiempo.
</p>

<p className="mb-4">
  Cada noche, cuando cierro los ojos, existe la posibilidad de volver a verte. De volver a escuchar tu voz. De volver a sentir que nada de esto ocurrió.
</p>

<p className="mb-4">
  Por unas horas, todo parece diferente.
</p>

<p className="mb-4">
  Y luego despierto.
</p>

<p className="mb-4">
  Y todo desaparece.
</p>

<p className="mb-4">
  Anoche fue una de esas noches.
</p>

<p className="mb-4">
  Soñé que estábamos juntos. No había discusiones, ni distancia, ni silencios interminables. Estábamos simplemente juntos. Felices.
</p>

<p className="mb-4">
  Recuerdo que te abrazaba con fuerza, como si tuviera miedo de perderte otra vez.
</p>

<p className="mb-4">
  Y mientras te abrazaba, te pedía ayuda.
</p>

<p className="mb-4">
  Te decía que no me dejaras solo en este proceso.
</p>

<p className="mb-4">
  Te prometía que iba a sanar.
</p>

<p className="mb-4">
  Que iba a mejorar.
</p>

<p className="mb-4">
  Que iba a convertirme en el hombre que siempre debí ser.
</p>

<p className="mb-4">
  Que algún día podría darte todo lo bueno que mereces de este mundo.
</p>

<p className="mb-4">
  Y entonces ocurrió algo que todavía me duele recordar.
</p>

<p className="mb-4">
  Me abrazaste de vuelta.
</p>

<p className="mb-4">
  Me dijiste que todo estaba bien.
</p>

<p className="mb-4">
  Que todo iba a estar bien.
</p>

<p className="mb-4">
  Fue tan real.
</p>

<p className="mb-4">
  Tan increíblemente real.
</p>

<p className="mb-4">
  Por un instante olvidé que estaba soñando.
</p>

<p className="mb-4">
  Sentí tu abrazo como si realmente estuvieras allí.
</p>

<p className="mb-4">
  Como si nunca te hubieras ido.
</p>

<p className="mb-4">
  Como si todavía existiera un lugar donde nosotros seguíamos siendo nosotros.
</p>

<p className="mb-4">
  Pero los sueños siempre terminan.
</p>

<p className="mb-4">
  Y esta vez fue una alarma.
</p>

<p className="mb-4">
  Ese sonido que me arrancó de golpe de un mundo en el que todavía podía encontrarte.
</p>

<p className="mb-4">
  Abrí los ojos y la habitación volvió a estar vacía.
</p>

<p className="mb-4">
  La realidad regresó.
</p>

<p className="mb-4">
  Y con ella, la certeza de que sigo aquí, extrañándote.
</p>

<p className="mb-4">
  A veces me gusta creer que los sueños son ventanas hacia otras realidades.
</p>

<p className="mb-4">
  Que en algún lugar existe otro mundo donde tomé mejores decisiones.
</p>

<p className="mb-4">
  Un mundo donde supe quedarme.
</p>

<p className="mb-4">
  Donde entendí a tiempo lo valioso que era tenerte.
</p>

<p className="mb-4">
  Donde no permití que mis errores nos separaran.
</p>

<p className="mb-4">
  Me gusta imaginar que en ese lugar seguimos juntos.
</p>

<p className="mb-4">
  Que existe un Carlos que aprendió antes lo que yo aprendí demasiado tarde.
</p>

<p className="mb-4">
  Y, aunque duela admitirlo, me alegra pensar que en algún rincón del universo él sigue abrazándote y cuidándote.
</p>

<p className="mb-4">
  Porque si alguien merecía conservarte, era la mejor versión de mí.
</p>

<p className="mb-4">
  No esta que escribe cartas en la madrugada intentando llenar el vacío que dejaste.
</p>

<p className="mb-4">
  Mientras tanto, en esta realidad, sigo pidiéndole a Dios fuerza para continuar.
</p>

<p className="mb-4">
  Sigo pidiéndole sabiduría para cambiar.
</p>

<p className="mb-4">
  Sigo pidiéndole la oportunidad de convertirme en una mejor persona.
</p>

<p className="mb-4">
  Y cada noche, cuando vuelvo a dormir, guardo una pequeña esperanza.
</p>

<p className="mb-4">
  La esperanza de volver a encontrarte, aunque sea por unas horas.
</p>

<p className="mb-4">
  Aunque sea en un sueño.
</p>

<p className="mt-8">
  Con amor,
</p>

<p>
  Carlos.
</p>
```

  </div>
</section>
  <section className="mb-20">
<section className="mb-20">
  <h2 className="text-4xl font-serif text-amber-200 mb-8 text-center">
    A POCOS DÍAS DE TU REGRESO
  </h2>

  <div className="max-w-4xl mx-auto bg-black/30 p-8 rounded-lg backdrop-blur-sm">
    <p className="text-amber-100 italic mb-6">
      31 de Mayo de 2026
    </p>

    <div className="space-y-4 text-amber-50 leading-relaxed">
      <p>Sara:</p>

      <p>
        Hoy es 31 de mayo, y mientras los días avanzan me doy cuenta de que
        cada vez falta menos para que regreses a Chile.
      </p>

      <p>
        Debería sentir tranquilidad al saber que estás más cerca, pero la
        verdad es que ocurre todo lo contrario. La ansiedad crece, la tristeza
        se vuelve más pesada y mi mente no deja de imaginar escenarios que no
        sé si alguna vez sucederán.
      </p>

      <p>
        Intento aferrarme a la esperanza. A la idea de que tal vez podamos
        vernos, sentarnos frente a frente y hablar.
      </p>

      <p>
        No porque crea que todo puede volver a ser como antes, porque sé que
        eso sería engañarme. Nada será igual a como era antes de que te fueras.
      </p>

      <p>
        Han pasado demasiadas cosas, demasiado tiempo y demasiados silencios.
        Pero aun sabiendo eso, sigo deseando tener la oportunidad de mirarte a
        los ojos y contarte todo lo que he pensado durante este largo mes.
      </p>

      <p>
        Me gustaría que supieras cuánto he reflexionado. Cuántas veces he
        repasado nuestros errores, mis errores, y cuántas veces he imaginado
        cómo habría actuado si hubiera tenido una segunda oportunidad.
      </p>

      <p>
        No para justificarme, sino porque hoy veo cosas que antes no veía.
        Porque hoy entiendo muchas cosas que en su momento no comprendí.
      </p>

      <p>
        Pero mientras esa esperanza sigue viva, hay una realidad que me duele
        cada día más:
      </p>

      <p>
        No saber nada de ti.
      </p>

      <p>
        Ese silencio me está consumiendo lentamente. No saber cómo estás, no
        saber qué piensas, no saber si alguna vez lees mis palabras o si
        simplemente ya forman parte de algo que dejaste atrás.
      </p>

      <p>
        La incertidumbre se ha convertido en una compañía constante. Intento
        distraerme, ocupar mi mente, enfocarme en otras cosas, pero la verdad
        es que apenas consigo olvidarte durante unos segundos antes de que
        vuelvas a aparecer en mis pensamientos.
      </p>

      <p>
        Cinco segundos.
      </p>

      <p>
        A veces ni siquiera eso.
      </p>

      <p>
        Es agotador extrañar tanto a una persona y no tener ninguna forma de
        saber si ella también te extraña.
      </p>

      <p>
        Es doloroso caminar por lugares llenos de recuerdos y sentir que cada
        esquina guarda una versión de nosotros que ya no existe.
      </p>

      <p>
        Cada calle, cada conversación que recuerdo, cada lugar donde alguna vez
        fuimos felices se ha convertido en un recordatorio de tu ausencia.
      </p>

      <p>
        Nunca había sentido la ansiedad de esta manera. Nunca había sentido esta
        desesperación silenciosa que aparece cuando despierto, que me acompaña
        durante el día y que sigue ahí cuando intento dormir.
      </p>

      <p>
        Hay momentos en los que siento que sigo avanzando únicamente porque no
        tengo otra opción.
      </p>

      <p>
        Y aun así, a pesar de todo, sigo esperando.
      </p>

      <p>
        Sigo esperando una conversación.
      </p>

      <p>
        Sigo esperando una oportunidad para decirte las cosas que quedaron
        atrapadas en mi pecho.
      </p>

      <p>
        Sigo esperando que algún día puedas ver el cambio que este tiempo ha
        provocado en mí.
      </p>

      <p>
        Tal vez sea una esperanza ingenua. Tal vez sea una batalla que ya está
        perdida y yo todavía no quiero aceptarlo.
      </p>

      <p>
        Lo único que sé es que te extraño más de lo que las palabras pueden
        explicar.
      </p>

      <p>
        Por eso, cuando la ansiedad se vuelve demasiado fuerte y siento que ya
        no puedo cargar con ella, hago lo único que me queda: le pido a Dios
        que te cuide.
      </p>

      <p>
        Que te proteja donde estés, que te acompañe en cada paso y que te
        regale toda la felicidad que yo siempre quise para ti.
      </p>

      <p>
        Y después le pido algo para mí.
      </p>

      <p>
        Le pido fuerzas.
      </p>

      <p>
        Fuerzas para soportar los días que siguen pasando sin respuestas.
      </p>

      <p>
        Fuerzas para convivir con tu ausencia.
      </p>

      <p>
        Fuerzas para seguir adelante mientras mi corazón sigue esperando algo
        que no sabe si llegará.
      </p>

      <p>
        No sé qué ocurrirá cuando regreses. No sé si volveremos a hablar. No sé
        si tendré la oportunidad de decirte todo esto algún día.
      </p>

      <p>
        Pero si algo tengo claro después de este mes, es que sigues siendo la
        persona que más extraño, la persona en la que más pienso y la persona
        cuya ausencia más ha cambiado mi vida.
      </p>

      <p>
        Y eso es una verdad que ni el tiempo ni la distancia han conseguido
        borrar.
      </p>

      <p className="mt-8">
        Con todo mi amor,
      </p>

      <p>
        Carlos.
      </p>
    </div>
  </div>
</section>
  <h2 className="text-4xl font-serif text-amber-200 mb-8 text-center">
    EL PESO DEL SILENCIO
  </h2>
  <div className="max-w-4xl mx-auto bg-black/30 p-8 rounded-lg backdrop-blur-sm">
    <p className="text-amber-100 italic mb-6">
      30 de Mayo de 2026
    </p>

    <div className="space-y-4 text-amber-50 leading-relaxed">
      <p>Sara:</p>

      <p>
        Hoy vuelvo a sentarme frente a esta página con la esperanza de que,
        en algún rincón del tiempo, estas palabras puedan llegar hasta ti.
      </p>

      <p>
        Quiero empezar pidiéndote perdón. Perdón por haberte escrito el jueves.
        Sé que probablemente no era lo correcto y sé que tal vez fue una
        molestia que no merecías recibir. No hubo ninguna mala intención detrás
        de aquel mensaje; simplemente tuve uno de esos días en los que todo pesa
        demasiado. La ansiedad me ganó la batalla y, como tantas veces en el
        pasado, mi mente buscó refugio en la única persona que siempre supo
        devolverme la calma.
      </p>

      <p>
        Tú.
      </p>

      <p>
        Durante mucho tiempo fuiste ese lugar seguro al que podía acudir cuando
        sentía que el mundo se derrumbaba sobre mí. Eras quien lograba ordenar
        mis pensamientos cuando todo parecía un caos. Y aunque hoy ya no ocupes
        ese lugar en mi vida, hay días en los que mi corazón sigue buscándote
        por costumbre, como quien intenta volver a casa después de perderse en
        la oscuridad.
      </p>

      <p>
        Lo que más me duele no es el silencio de un mensaje sin responder. Lo
        que realmente me duele es darme cuenta de que, por más caminos que
        intento encontrar para acercarme a ti, no consigo ninguna señal de que
        aún exista un espacio para mí en tu vida.
      </p>

      <p>
        Poco a poco comienzo a entender algo que llevaba meses negándome a
        aceptar.
      </p>

      <p>
        Quizás me estás olvidando.
      </p>

      <p>
        Quizás estás cumpliendo aquella promesa que hiciste aquel maldito
        sábado. Ese sábado que cambió nuestras vidas y que se convirtió en el
        día que más he lamentado desde entonces. A veces pienso en cada decisión
        que tomé, en cada palabra que dije y en todo lo que habría dado por
        tener una segunda oportunidad para hacer las cosas de otra manera.
      </p>

      <p>
        Porque si hay algo de lo que estoy seguro, es que aquel fue el peor
        error de mi vida.
      </p>

      <p>
        Los días siguen avanzando, el calendario sigue cambiando y el mundo
        continúa girando, pero hay una parte de mí que parece haberse quedado
        atrapada en el recuerdo de lo que fuimos. En las conversaciones que
        extraño. En las risas que ya no escucho. En la tranquilidad que
        encontraba simplemente sabiendo que estabas ahí.
      </p>

      <p>
        No sé si algún día leerás estas cartas.
      </p>

      <p>
        No sé si alguna vez descubrirás todas las palabras que he dejado aquí
        para ti.
      </p>

      <p>
        Pero mientras exista una mínima posibilidad, seguiré escribiendo.
      </p>

      <p>
        Porque esta página se ha convertido en el único lugar donde todavía
        puedo hablarte. El único rincón donde puedo decirte que te extraño, que
        me haces falta y que hay días en los que el vacío que dejaste sigue
        siendo imposible de ignorar.
      </p>

      <p>
        Tal vez nunca reciban respuesta.
      </p>

      <p>
        Tal vez permanezcan perdidas entre miles de páginas de internet.
      </p>

      <p>
        Pero son mi manera de conservar viva la esperanza de que algún día
        puedas ver cuánto significaste para mí y cuánto sigo lamentando haber
        dejado escapar aquello que más quería.
      </p>

      <p className="mt-8">
        Con todo lo que aún guardo en mi corazón,
      </p>

      <p>
        Carlos.
      </p>
    </div>
  </div>
</section>
<div className="carta">
  <h3>28 Mayo 2026</h3>
  <p>
    Ha pasado casi un mes desde que te fuiste, Sara Salazar…
    <br /><br />

    y aun así, el tiempo se siente completamente roto.
    <br /><br />

    No parece un mes.
    <br /><br />

    Se siente como una década entera viviendo dentro del mismo día triste.
    <br /><br />

    Nunca imaginé que la ausencia de una persona pudiera pesar tanto.
    <br /><br />

    Pero desde que ya no estás aquí, todo en Chile comenzó a sentirse extraño, vacío, ajeno.
    <br /><br />

    Como si este país hubiera perdido el sentido apenas dejaste de caminar a mi lado.
    <br /><br />

    Manejo durante horas solo para distraerme, pero no funciona.
    <br /><br />

    Porque en cada calle apareces tú.
    <br /><br />

    En cada semáforo.
    <br /><br />

    En cada canción que suena de fondo mientras conduzco de noche.
    <br /><br />

    Tu presencia me acompaña incluso cuando no estás.
    <br /><br />

    Y a veces eso duele más.
    <br /><br />

    Paso por lugares donde fuimos felices y siento que el pecho se me rompe lentamente.
    <br /><br />

    Esos sitios donde nos reiamos y hablamos sobre nuestros planes futuros.
    <br /><br />

    Las avenidas donde hablábamos del futuro como si fuera algo seguro.
    <br /><br />

    Las noches eternas dentro del auto, cuando el mundo parecía detenerse solo para escucharnos existir juntos.
    <br /><br />

    Ahora conduzco solo por esos mismos lugares y todo se siente vacío.
    <br /><br />

    Como una película abandonada después de la escena más importante.
    <br /><br />

    La verdad es que no sé cómo seguir viviendo aquí sin ti.
    <br /><br />

    Porque mi vida en este país siempre fue contigo.
    <br /><br />

    Cada recuerdo importante que tengo en Chile lleva tu nombre escondido en algún rincón.
    <br /><br />

    Y últimamente no puedo dejar de pensar que si no estoy contigo aquí…
    <br /><br />

    entonces ya no tiene sentido seguir en este lugar.
    <br /><br />

    Extraño cómo calmabas mis días malos.
    <br /><br />

    Extraño sentir que tenía un hogar aunque no supiera exactamente dónde estaba, porque mientras estuvieras tú, todo parecía estar bien.
    <br /><br />

    Ahora me siento perdido.
    <br /><br />

    Como si hubiera tomado una carretera larguísima sin dirección, esperando encontrarte en algún semáforo imposible.
    <br /><br />

    Ojalá pudieras ver cuánto te extraño.
    <br /><br />

    Ojalá pudieras sentir el vacío enorme que dejaste en cada parte de mi vida.
    <br /><br />

    Porque aunque pase el tiempo…
    <br /><br />

    sigues apareciendo en cada calle, en cada trayecto, en cada pensamiento silencioso de madrugada.
    <br /><br />

    Y honestamente… todavía no sé cómo aprender a vivir sin ti.
  </p>
</div>
<div className="carta">
  <h3>27 Mayo 2026</h3>
  <p>
    Hoy fue uno de esos días difíciles.
    <br /><br />

    De esos en los que todo pesa más de lo normal y la cabeza no deja de dar vueltas aunque intente distraerme.
    <br /><br />

    Y mientras el día avanzaba, no podía dejar de pensar en ti, Sara Salazar.
    <br /><br />

    Extraño la manera en que solías calmarme cuando me sentía así.
    <br /><br />

    Extraño escuchar tu voz diciéndome que todo iba a estar bien incluso cuando yo sentía que el mundo se estaba cayendo encima.
    <br /><br />

    Últimamente siento que no tengo rumbo.
    <br /><br />

    Como si estuviera caminando sin dirección, intentando encontrar algo que me devuelva la tranquilidad que tenía cuando estabas conmigo.
    <br /><br />

    Porque tú eras eso para mí.
    <br /><br />

    Eras la persona que lograba mantenerme centrado incluso en mis peores momentos.
    <br /><br />

    Y ahora que no estás, me doy cuenta de cuánto dependía de tu manera de cuidarme sin siquiera notarlo.
    <br /><br />

    Hay un arrepentimiento que me acompaña cada día.
    <br /><br />

    Me arrepiento cada segundo de mi vida de haberme ido aquel sábado.
    <br /><br />

    Ojalá pudiera regresar el tiempo aunque fuera solo un momento para quedarme un poco más contigo.
  </p>
</div>
  <div className="carta">
    <h3>26 Mayo 2026</h3>
    <p>
      Hoy volví a pensar en ti.
      <br /><br />
      A veces siento que el tiempo avanza demasiado rápido,
      pero mis sentimientos siguen exactamente en el mismo lugar.
    </p>
  </div>

  <div className="carta">
    <h3>26 Mayo 2026</h3>
    <p>
      Hay canciones que todavía me recuerdan a ti.
      <br /><br />
      Y aunque intento distraerme, siempre termino pensando en nosotros.
    </p>
  </div>
  
<div className="carta">
  <h3>25 Mayo 2026</h3>
  <p>
    No sé en qué momento las pequeñas cosas comenzaron a doler tanto.
    <br /><br />

    Extraño la manera en que me hablabas, tus mensajes, tu voz calmándome incluso cuando no decías nada importante.
    <br /><br />

    Extraño nuestros sobrenombres, esas palabras tontas que solo tenían sentido entre nosotros y que ahora resuenan en mi cabeza como recuerdos imposibles de repetir.
    <br /><br />

    Extraño tu risa.
    <br /><br />

    Extraño tu olor en mi ropa, en las almohadas, en esos lugares donde aún parece que sigues aquí aunque ya no estés.
    <br /><br />

    Hay días en los que cierro los ojos solo para intentar recordar exactamente cómo sonaba tu voz diciendo mi nombre, Sara Salazar.
    <br /><br />

    Y lo peor es que sigo pensando en las cosas más simples…
    <br /><br />

    Hoy hice un omelet, como el que tanto te gustó aquellos últimos días.
    <br /><br />

    Mientras cocinaba no podía dejar de imaginar tu reacción, tus comentarios y esa pequeña sonrisa que hacías cuando algo realmente te gustaba.
    <br /><br />

    Me duele.
    <br /><br />

    Me parte el alma pensar que quizás nunca vuelva a cocinarte algo otra vez.
  </p>
</div>
</section>
            Nunca dejé de amarte.
            <br /><br />
            Lo que pasó fue que dejé de saber cómo sostenerme a mí mismo.
            <br /><br />
            Mis inseguridades, mis heridas y mis miedos
            terminaron destruyendo partes de nosotros.
            <br /><br />
            Pero hoy entiendo que no quiero volver al pasado.
            <br /><br />
            Quiero construir contigo una nueva versión de nosotros.
            <br /><br />
            Más sana.
            <br />
            Más fuerte.
            <br />
            Más real.
            <br /><br />
            Y si algún día decides volver a tomar mi mano…
            prometo que esta vez quiero caminar contigo desde la paz y no desde el miedo.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#7b1e3c] text-white px-10 py-5 rounded-full text-xl shadow-2xl"
          >
            SI AÚN CREES EN MÍ, EN LO QUE FUIMOS Y EN LO QUE PODEMOS LLEGAR A SER… PRESIONA
          </motion.button>

        </div>

      </section>

    </main>
  );
}