import { Box } from "@mui/material";
import clsx from "clsx";

interface TextSectionProps {
  title: string;
  text: string;
  src: string;
  alt?: string;
  maxHeight?: number;
  textFirst: boolean;
  textColour?: string;
}

export const TextSection = ({
  title,
  text,
  src,
  alt,
  maxHeight = 382,
  textFirst = true,
  textColour = "tw-text-white"
}: TextSectionProps) => {
  const TextBox = (
    <Box className={clsx("tw-w-[687px] tw-space-y-6", textColour)}>
      <p className="tw-text-4.5xl">{title}</p>
      <p className="tw-text-xl tw-whitespace-pre-line">{text}</p>
    </Box>
  );

  const ImageBox = <img src={src} alt={alt} loading="lazy" style={{ maxHeight: maxHeight }} />;

  if (textFirst) {
    return (
      <Box className="tw-w-[1440px] tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-8 tw-py-12">
        {TextBox}
        {ImageBox}
      </Box>
    );
  }
  return (
    <Box className="tw-w-[1440px] tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-8 tw-py-12">
      {ImageBox}
      {TextBox}
    </Box>
  );
};
