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
    <Box className="tw-bg-white tw-flex tw-justify-center tw-mb-24">
      <Box className="tw-w-full tw-max-w-[1200px] tw-flex tw-flex-col md:tw-flex-row tw-gap-12 tw-px-4 md:tw-px-12">
        {/* Text Section */}
        <Box className="tw-flex-1 tw-flex tw-flex-col tw-gap-20 tw-pt-12 md:tw-pt-20">
          <Typography variant="h1">{title}</Typography>
          <Box>
            <Typography variant="body">{content}</Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box className="tw-flex-1 tw-flex tw-items-center tw-justify-center tw-pt-10">
          <Link href={imageUrl} underline="none" className="tw-cursor-pointer tw-gap-1 tw-py-2 tw-flex tw-justify-center tw-items-center">
            <img
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
              className="tw-h-auto tw-object-contain tw-w-full tw-max-w-[600px] md:tw-max-w-[745px] tw-rounded-lg"
              style={{ display: "block" }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
