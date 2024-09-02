import { CardKnowledge } from "../components/CardKnowledge/CardKnowledge";
import { SectionContainerHeaderTitle } from "../components/layout/SectionContainerHeaderTitle/SectionContainerHeaderTitle";

import { skills } from "../data/SkillsData";
import { SectionContainer } from "../components/layout/SectionContainer/SectionContainer";

export const SectionKnowledge = () => {
  return (
    <SectionContainer id="skills">
      <SectionContainerHeaderTitle
        title="Skills"
        description="— A set of technologies I use. Doesn't mean that I mastered them all... 🤪"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mx-auto">
        {skills.map((skill) => (
          <CardKnowledge key={skill.id} {...skill} />
        ))}
      </div>
    </SectionContainer>
  );
};
