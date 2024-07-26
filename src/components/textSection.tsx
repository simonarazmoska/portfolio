import { Box } from "@mui/material";

interface TextSectionProps {
  title: string;
  text: string;
  src: string;
  alt: string | undefined;
  maxHeight: number | undefined;
  textFirst: boolean;
}

export const TextSection = ({ title, text, src, alt, maxHeight = 382, textFirst = true }: TextSectionProps) => {
  const TextBox = (
    <Box className="tw-space-y-6 tw-justify-between tw-text-white">
      <p className="tw-text-4.5xl ">{title}</p>
      <p className="tw-text-xl">{text}</p>
    </Box>
  );

  const ImageBox = <img src={src} alt={alt} loading="lazy" style={{ maxHeight: maxHeight }} />;

  if (textFirst) {
    return (
      <Box className="tw-flex tw-flex-row tw-items-center tw-px-8 tw-py-12">
        {TextBox}
        {ImageBox}
      </Box>
    );
  }
  return (
    <Box className="tw-flex tw-flex-row tw-items-center tw-px-8 tw-py-12">
      {ImageBox}
      {TextBox}
    </Box>
  );
};
