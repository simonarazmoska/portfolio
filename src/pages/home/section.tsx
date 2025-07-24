import { Box, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imageTextColor?: string;
}

export const Section = ({ title, content, imageSrc, imageAlt, imageTextColor }: SectionProps) => {
  return (
    <Box className="tw-bg-white tw-flex tw-justify-center">
      <Box className="tw-w-[1440px]">
        {/* Text Section */}
        <Box className="tw-flex tw-flex-col tw-gap-20 tw-px-12 tw-pt-20">
          <Box className="tw-flex tw-flex-col tw-gap-10"></Box>
          <Typography variant="h1">{title}</Typography>
          <Box className="tw-w-[860px]">
            <Typography variant="body">{content}</Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box className="tw-flex tw-flex-col tw-gap-20 tw-px-12 tw-pt-10">
          <Box>
            <img src={imageSrc} alt={imageAlt} loading="lazy" style={{ maxHeight: "745px" }} className="tw-h-auto tw-object-contain" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
