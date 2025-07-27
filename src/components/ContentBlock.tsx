import { Box, Typography } from "@mui/material";
import clsx from "clsx";

interface ContentBlockProps {
  title: string;
  subtitle: string;
  blurb?: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  titleTextColour: string;
  subtitleTextColour: string;
  backgroundColour?: string;
  showTextFirst?: boolean;
}

export const ContentBlock = ({
  title,
  subtitle,
  blurb,
  imgSrc,
  imgAlt,
  titleTextColour,
  subtitleTextColour,
  backgroundColour = "tw-bg-primary",
  showTextFirst = true
}: ContentBlockProps) => {
  const TextSection = (
    <Box className="tw-h-full tw-w-[1085px] tw-flex tw-flex-col tw-justify-between tw-pb-20">
      {/* Header */}
      <Box>
        <Typography variant="h1" className={titleTextColour}>
          {title}
        </Typography>
        <Typography variant="h2" className={subtitleTextColour}>
          {subtitle}
        </Typography>
      </Box>

      {/* Footer */}
      {blurb && blurb}
    </Box>
  );

  const ImageSection = (
    <img
      src={imgSrc}
      alt={imgAlt}
      style={{ maxHeight: "1056px" }}
      className="tw-h-full tw-object-cover"
      // className="tw-w-full tw-h-auto tw-object-cover"
      loading="lazy"
    />
  );

  return (
    <Box className={clsx("tw-h-[1290px]", backgroundColour)}>
      <Box className="tw-h-full tw-flex tw-flex-col tw-px-8 tw-pb-24 tw-gap-24">
        <Box></Box>
        <Box className="tw-h-full tw-flex tw-flex-row tw-justify-start tw-gap-48">
          {showTextFirst ? TextSection : ImageSection}
          {showTextFirst ? ImageSection : TextSection}
        </Box>
      </Box>
    </Box>
  );
};
