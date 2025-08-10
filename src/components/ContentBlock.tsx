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
  loadImageStyle?: "lazy" | "eager";
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
  showTitleBeforeSubtitle = true,
  loadImageStyle = "lazy"
}: ContentBlockProps) => {
  const TextSection = (
    <Box className="tw-h-full tw-w-[100vw] tw-flex tw-flex-col tw-justify-between tw-px-8 tw-pb-8">
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
    <Box className="tw-h-full tw-w-full">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="tw-object-cover tw-w-full tw-h-full"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ensures cropping/zoom
          display: "block"
        }}
        loading={loadImageStyle}
      />
    </Box>
  );

  return (
    <Box className={clsx("tw-h-[100vh]", backgroundColour)}>
      <Box className="tw-h-full tw-flex tw-flex-col tw-pb-24 tw-gap-12">
        <Box />
        <Box className="tw-h-full tw-flex tw-flex-row tw-justify-start">
          {showTextFirst ? TextSection : ImageSection}
          {showTextFirst ? ImageSection : TextSection}
        </Box>
      </Box>
    </Box>
  );
};
