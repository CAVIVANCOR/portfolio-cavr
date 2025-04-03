import { motion } from "motion/react";
import { variants } from "./data/config.js";
import InteractiveButton from "./InteractiveButton.jsx";
import SocialButtons from "./SocialButtons.jsx";
import fotoSinFondo from "../assets/fotoredonda.png";
import splitStringUsingRegex from "./data/splitStringUsingregex.js";
import LetrasOlas from "./LetrasOlas.jsx";
const heading = "Soy Carlos";
const quienSoy =
  "🌐✨Desarrollador de software creo soluciones modernas, creativas y fáciles de usar. Con formación en informática, 🧠soy un solucionador de problemas apasionado que disfruta asumir proyectos complejos y desafiantes. Como desarrollador full-stack, soy una solución integral, capaz de llevar las ideas desde la concepción hasta la finalización. Durante más de 20 años, he ayudado a fundadores y dueños de empresas a desarrollar la tecnología que impulsa sus organizaciones. Gracias a mi experiencia trabajando de forma independiente, 🚀soy ágil y puedo actuar con rapidez.";
const descargarCV = () => {
  fetch("/CV-CAVR-SP.pdf")
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "CV-CAVR-SP.pdf";
      link.click();
    });
};
const texto = "Uso mi pasión para ayudarte a perseguir la tuya";
const parte1 = texto.substring(0, texto.length / 2);
const parte2 = texto.substring(texto.length / 2);
const quienSoyChars = splitStringUsingRegex(quienSoy);
const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
function HeroSection() {
  return (
    <section className="w-full px-2 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <article className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 xl:gap-6 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx:auto">
        <section className="lg:py-6 flex-col justify-between">
          <section className="ml-0 md:ml-12">
              <LetrasOlas titulo={heading} />
            <motion.h1
              initial="hidden"
              whileInView={"visible"}
              transition={{ staggerChildren: 0.002 }}
              className="mt-24"
            >
              {quienSoyChars.map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.001 }}
                  variants={charVariants}
                  className="text-white pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl text-sm font-extralight md:text-base"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div className="text-white pt-8 flex justify-center mx-auto max-w-[370px] md:max-w-xl text-sm italic font-extralight md:text-base">
              {Array.from(parte1).map((char, index) => (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (parte1.length - index - 1) * 0.1,
                    duration: 0.25,
                  }}
                  className="text-[#FFC107]"
                >
                  {char === " " ? <>&nbsp;</> : char}
                </motion.h1>
              ))}
              {Array.from(parte2).map((char, index) => (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.25 }}
                  className="text-[#FFC107]"
                >
                  {char === " " ? <>&nbsp;</> : char}
                </motion.h1>
              ))}
            </motion.div>
            <SocialButtons />
            <section className="flex items-center gap-3 pt-2 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
              <figure className="w-56">
                <InteractiveButton text="Contratame" to={"contact"} cb={null} />
              </figure>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center px-4 py-2 bg-transparent text-primary border border-primary rounded-3xl"
                onClick={descargarCV}
              >
                <svg viewBox="0 0 24 24" width={40} height={40}>
                  <motion.path
                    d="M12 15.586l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05 12 15.586zm-7 2h14v2H5v-2z"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth={0.5}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  />
                </svg>
                <span className="pl-2">Descargar CV</span>
              </motion.button>
            </section>
          </section>
        </section>
        <figure className="lg:h-full md:flex justify-center lg:justify-end mt-1 mb-8 md:mt-16">
          <motion.div
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] flex justify-center items-center p-3 rounded-full overflow-hidden relative"
            animate={{
              backgroundColor: ["#ffc107", "#ff7556", "#ff6667"],
              scale: [1, 1.1, 1],
              rotate: [1, 5, 5, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ff6667] blur-3xl opacity-60 h-full w-full" />
            <img
              src={fotoSinFondo}
              alt="fotoCAVR"
              className="relative z-10 rounded-full max-h-full shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </motion.div>
        </figure>
      </article>
    </section>
  );
}

export default HeroSection;
