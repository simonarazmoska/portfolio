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
  showTitleBeforeSubtitle?: boolean;
}

export const ContentBlock = ({
  subtitle,
  title,
  blurb,
  imgSrc,
  imgAlt,
  titleTextColour,
  subtitleTextColour,
  backgroundColour = "tw-bg-primary",
  showTextFirst = true,
  showTitleBeforeSubtitle = true
}: ContentBlockProps) => {
  const TextSection = (
    <Box className="tw-h-full tw-max-w-[1085px] tw-flex tw-flex-col tw-justify-between tw-px-8">
      {/* Header */}
      <Box className="tw-flex tw-flex-col tw-gap-4">
        {showTitleBeforeSubtitle ? (
          <>
            <Typography variant="h1" className={titleTextColour}>
              {title}
            </Typography>
            <Typography variant="h2" className={subtitleTextColour}>
              {subtitle}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h2" className={subtitleTextColour}>
              {subtitle}
            </Typography>
            <Typography variant="h1" className={titleTextColour}>
              {title}
            </Typography>
          </>
        )}
      </Box>

      {/* Footer */}
      {blurb && blurb}
    </Box>
  );

  const ImageSection = (
    <Box className="tw-h-full tw-w-[80vw]">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="tw-object-cover"
        style={{ height: "100%", width: "100%", display: "block" }}
        loading="lazy"
      />
    </Box>
  );

  return (
    <Box className={clsx("tw-h-[1290px]", backgroundColour)}>
      <Box className="tw-h-full tw-flex tw-flex-col tw-pb-24 tw-gap-24">
        <Box />
        <Box className="tw-h-full tw-flex tw-flex-row tw-justify-start tw-gap-48">
          {showTextFirst ? TextSection : ImageSection}
          {showTextFirst ? ImageSection : TextSection}
        </Box>
      </Box>
    </Box>
  );
};
