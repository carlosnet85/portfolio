import React from "react";
import { motion } from "framer-motion"
import { SkillData } from "../../data/SkillsData";

export const CardKnowledge: React.FC<SkillData> = (props: SkillData) => {
  return (
    <motion.article className="my-2 p-1.5 gap-2 flex flex-col place-content-center h-[13rem]  outline outline-2 outline-transparent hover:outline-blue-500 hover:card-hover-effect rounded-xl transition-[color, transform] duration-300 overflow-auto"
    initial={{ opacity: 0, filter: "blur(5px)" }}
    whileInView={{ opacity: 1, filter: "blur(0)" }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true}}
    > 
      <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-400">
        <props.Icon className="w-18 h-18 p-2 bg-zinc-800 dark:bg-transparent rounded-xl text-[3.5rem]" />
        {props.title}
      </h1>

      <p className="h-[6rem]">{props.description}</p>
    </motion.article>
  );
};
