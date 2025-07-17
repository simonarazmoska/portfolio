import clsx from "clsx";

interface TextSectionProps {
  text: string;
  textColour?: string;
}

export const TextSection = ({ text, textColour = "tw-text-white" }: TextSectionProps) => {
  return <p className={clsx("tw-text-lg tw-px-0 tw-py-4 m:tw-py-6 md:tw-py-12", textColour)}>{text}</p>;
};
