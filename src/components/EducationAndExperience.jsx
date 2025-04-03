/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import CustomTitle from "./CustomTitle.jsx";
import { experience, education } from "./data/config.js";

const SectionItem = ({ title, subtitle, year, details, icon }) => {
  return (
    <motion.article
      className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute
        before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-primary before:to-secondary before:z-[-10]
        after:absolute after:inset-0 after:bg-gradient-to-br after:from-secondary after:to-primary after:scale-[0.95] after:blur-[20px] 
        hover:after:blur-[30px] mt-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      <section className="bg-black z-20 text-white rounded-xl">
        <section className="border border-primary bg-[#ffffff29] rounded-xl p-2 flex flex-col lg:flex-row items-center">
              <img src={icon} alt={icon} width={128} height={128} style={{ backgroundColor: 'white', borderRadius: '5%' }} />
            <div className="ml-2 mt-5 lg:mt-0 lg:ml-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm">{subtitle}</p>
              <p className="text-sm">{year}</p>
              {details && <p className="mt-2 text-xs font-light">{details}</p>}
            </div>
        </section>
      </section>
    </motion.article>
  );
};
export default function EducationAndExperience() {
  return (
    <section className="relative mt-40" id="experiencie">
      <CustomTitle>
        <span>Educacion y </span>
        {window.innerWidth <= 768 && <br />}
        <span>Experiencia</span>
      </CustomTitle>
      <section className="flex flex-wrap justify-center gap-6 lg:gap-8 p-10 mt-10 max-w-lg mx-auto lg:max-w-4xl">

        {education.map((edu) => (
          <SectionItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
          />
        ))}
        {experience.map((exp) => (
          <SectionItem
            key={exp.id}
            title={exp.title}
            subtitle={exp.company}
            year={exp.year}
            details={exp.description}
            icon={exp.icon}
          />
        ))}
      </section>
    </section>
  );
}
