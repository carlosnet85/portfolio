import { CardWorkButton } from "./CardWorkButton";
import { CardWorkTag } from "./CardWorkTag";
import { WorksData } from "../../data/WorksData";
import { motion } from "framer-motion";

export const CardWork: React.FC<WorksData> = (props: WorksData) => {
  return (
    <motion.article
      className="merenda mb-4 relative flex flex-col gap-4 outline outline-1 outline-zinc-800 dark:outline-zinc-700 rounded-xl w-full h-[30rem] transition-[transform, color] duration-500"
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0)" }}
      transition={{ duration: 0.5, delay: props.id ? props.id * 0.1 : 0 }}
      viewport={{ once: true }}
    >
      <img
        src={props.thumbnailUrl}
        alt={props.title}
        className="rounded-t-xl max-h-[8rem] object-fit"
      />

      <h1 className="text-blue-500 text-3xl font-bold mx-2">{props.title}</h1>

        <p className="h-[8rem] max-h-[12rem] px-2 overflow-auto text-sm break-all text-justify">{props.description}</p>

      <div className="flex flex-row flex-wrap gap-2 mx-2">
        {props.tags.map((tag) => (
          <CardWorkTag key={tag} value={tag} />
        ))}
      </div>

      <div className="w-full mx-auto absolute bottom-0 max-h-[1.5rem] bg-zinc-800 dark:bg-transparent flex gap-2 p-1 rounded-b-xl">
        {props.buttons?.map((button) => (
          <CardWorkButton
            key={button.buttonTitle}
            buttonTitle={button.buttonTitle}
            url={button.url}
            Icon={button.Icon}
          />
        ))}
      </div>
    </motion.article>
  );
};
