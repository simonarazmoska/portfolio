import { Box } from "@mui/material";
import clsx from "clsx";

interface HybridSectionProps {
  title: string;
  subheading: string;
  text: string;
  src: string;
  alt?: string;
  maxHeight?: number;
  maxWidth?: number;
  textFirst: boolean;
  textColour?: string;
}

export const HybridSection = ({
  title,
  subheading,
  text,
  src,
  alt,
  maxHeight = 382,
  maxWidth = undefined,
  textFirst = true,
  textColour = "tw-text-white"
}: HybridSectionProps) => {
  const TextBox = (
    <Box className={clsx("tw-w-full md:tw-w-1/2 tw-space-y-6", textColour)}>
      <p className="tw-text-3xl md:tw-text-4.5xl">{title}</p>
      <p className="tw-text-3xl md:tw-text-4.5xl">{subheading}</p>
      <p className="tw-text-base md:tw-text-xl tw-whitespace-pre-line">{text}</p>
    </Box>
  );

  const ImageBox = (
    <Box className="tw-w-full md:tw-w-1/2 tw-flex tw-justify-center">
      <img src={src} alt={alt} loading="lazy" className="tw-max-w-full tw-h-auto tw-object-contain" style={{ maxHeight, maxWidth }} />
    </Box>
  );

  return (
    <Box
      className={clsx(
        "tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-10 tw-px-4 md:tw-px-12 tw-py-12",
        textFirst ? "" : "md:tw-flex-row-reverse"
      )}
    >
      {TextBox}
      {ImageBox}
    </Box>
  );
};
