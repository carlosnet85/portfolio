

interface SectionContainerHeaderTitleProps {
  title: string;
  description: string;
}

export const SectionContainerHeaderTitle: React.FC<SectionContainerHeaderTitleProps> = ({ title, description }) => {
  return (
    <header className="px-8 py-4 font-bold">
      <h1 className="text-5xl md:text-6xl text-blue-400">{title}</h1>
      <p className="mt-2 text-sm md:text-base text-blue-300">{description}</p>
    </header>
  );
};
