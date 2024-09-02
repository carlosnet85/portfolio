export interface CardWorkTagProps {
  value: string;
}

export const CardWorkTag: React.FC<CardWorkTagProps> = (props: CardWorkTagProps) => {
  return (
    <div className="bg-blue-500 hover:bg-blue-400 rounded-md p-0.5 transition-colors duration-300">
      <span className="text-sm text-white">#{props.value}</span>
    </div>
  );
};
