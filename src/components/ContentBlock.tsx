import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";

interface ContentBlockProps {
  title: string;
  subtitle: string;
  blurb?: React.ReactNode;
  imgComponent?: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
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
  imgComponent,
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
    <Box className="tw-flex-1 tw-flex tw-flex-col tw-justify-between tw-px-4 md:tw-px-8 tw-pb-8">
      {/* Header */}
      <Box className="tw-flex tw-flex-col tw-gap-4">
        {showTitleBeforeSubtitle ? (
          <>
            <Typography
              variant="h1"
              className={titleTextColour}
              sx={{
                fontSize: { xs: "54px", md: "100px" },
                lineHeight: 1,
                wordBreak: "break-word"
              }}
            >
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
            <Typography
              variant="h1"
              className={titleTextColour}
              sx={{
                fontSize: { xs: "54px", md: "100px" },
                lineHeight: 1,
                wordBreak: "break-word"
              }}
            >
              {title}
            </Typography>
          </>
        )}
      </Box>

      {/* Footer */}
      {blurb && <Box className="tw-mt-4 md:tw-mt-8">{blurb}</Box>}
    </Box>
  );

  const ImageSection = (
    <Box className="tw-flex-1 tw-flex tw-items-center tw-justify-center tw-px-4 md:tw-px-0">
      {imgComponent ? (
        imgComponent
      ) : imgSrc ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="tw-object-cover tw-w-full tw-h-auto tw-max-h-[960px] md:tw-max-h-[1000px]"
          style={{
            display: "block",
            width: "100%"
          }}
          loading={loadImageStyle}
        />
      ) : null}
    </Box>
  );

  return (
    <Box className={clsx("tw-w-full tw-py-8 md:tw-py-24", backgroundColour)}>
      <Box className="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 md:tw-gap-12 tw-items-center md:tw-items-stretch tw-mx-auto">
        {showTextFirst ? (
          <>
            {TextSection}
            {ImageSection}
          </>
        ) : (
          <>
            {ImageSection}
            {TextSection}
          </>
        )}
      </Box>
    </Box>
  );
};
