import { FC } from "react";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero: FC<HeroProps> = (props) => {
  const { title, description } = props;

  return (
    <header className="flex flex-col items-center justify-center max-w-3xl mt-40">
      <h1 className="text-xl font-semibold text-silver-100 mb-6">{title}</h1>
      <p className="text-md text-silver-200">{description}</p>
    </header>
  );
};
