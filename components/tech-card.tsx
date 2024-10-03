import { ReactNode } from "react";

type Props = {
  title: string;
  icon: () => ReactNode;
};

const TechCard = ({ title, icon }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="rounded-lg backdrop-blur-lg bg-slate-800/50 p-2 text-white">
        {icon()}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default TechCard;
