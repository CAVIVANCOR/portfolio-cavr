import React from "react";
import { motion } from "motion/react";
import CustomTitle from "./CustomTitle.jsx";
import { experience, education } from "./data/config.js";

const SectionItem = ({ title, subtitle, year, details, icon }) => {
  return (
    <motion.article
      className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute
        before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-primary before:to-secondary before:z-[-10]
        after:absolute after:inset-0 after:bg-gradient-to-br after:from-secondary after:to-primary after:scale-[0.98] after:blur-[20px] 
        hover:after:blur-[30px] mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <section className="bg-black z-20 text-white rounded-xl">
        <section className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center">
          <img src={icon} alt={icon} width={64} height={64} />
          <div className="ml-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{subtitle}</p>
            <p className="text-sm">{year}</p>
            <p className="text-xs font-light">{details}</p>
          </div>
        </section>
      </section>
    </motion.article>
  );
};
export default function EducationAndExperience() {
  return (
    <section
      className="relative container mx-auto px-4 py-12 lg:p-16"
      id="Experiencie"
    >
      <CustomTitle title="Educacion & Experiencia" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
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
