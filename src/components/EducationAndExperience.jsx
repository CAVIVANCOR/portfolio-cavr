/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import CustomTitle from "./CustomTitle.jsx";
import { experience, education } from "./data/config.js";

const SectionItem = ({ title, subtitle, year, details, icon }) => {
  return (
    <motion.article
      className="relative flex flex-col h-min-[250px] justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute
        before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-primary before:to-secondary before:z-[-10]
        after:absolute after:inset-0 after:bg-gradient-to-br after:from-secondary after:to-primary after:scale-[0.95] after:blur-[20px] 
        hover:after:blur-[30px] mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      <section className="bg-black z-20 text-white rounded-xl">
        <section className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center">
          <img src={icon} alt={icon} width={64} height={64} />
          <div className="ml-5 h-fit">
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
    <section className="relative mt-40" id="Experiencie">
      <CustomTitle title="Educacion & Experiencia" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-58 mt-32">
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
          via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block'>
        </header>
        <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
          via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block'>
        </header>
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
