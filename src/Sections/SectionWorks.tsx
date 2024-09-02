import { CardWork } from "../components/CardWork/CardWork";
import { SectionContainerHeaderTitle } from "../components/layout/SectionContainerHeaderTitle/SectionContainerHeaderTitle";
import { SectionContainer } from "../components/layout/SectionContainer/SectionContainer";
import { works } from "../data/WorksData";

export const SectionWorks = () => {
  return (
    <SectionContainer id="works">
      <SectionContainerHeaderTitle
        title="Works"
        description="— Some of my most relevant projects."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mx-auto">
        {works.map((work) => (
          <CardWork key={work.id} {...work} />
        ))}
      </div>
    </SectionContainer>
  );
};
