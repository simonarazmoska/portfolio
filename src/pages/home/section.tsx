import { Box, Link, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  content: string;
  imgSrc: string;
  imgAlt: string;
  imageTextColor: string;
  imageUrl: string;
}

export const Section = ({ title, content, imgSrc, imgAlt, imageTextColor, imageUrl }: SectionProps) => {
  return (
    <Box className="tw-bg-white tw-flex tw-justify-center tw-mb-[96px]">
      <Box className="tw-w-[1440px]">
        {/* Text Section */}
        <Box className="tw-flex tw-flex-col tw-gap-8 tw-px-12 tw-pt-20">
          <Box className="tw-flex tw-flex-col tw-gap-10"></Box>
          <Typography variant="h1">{title}</Typography>
          <Box className="tw-w-[860px]">
            <Typography variant="body">{content}</Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box className="tw-flex tw-flex-col tw-gap-8 tw-px-12 tw-pt-10">
          <Link href={imageUrl} underline="none" className="tw-cursor-pointer tw-gap-1 tw-py-2 tw-flex tw-justify-center tw-items-center">
            <img src={imgSrc} alt={imgAlt} loading="lazy" style={{ maxHeight: "745px" }} className="tw-h-auto tw-object-contain" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
