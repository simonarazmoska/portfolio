import { theme } from "@/theme";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <Box className="tw-bg-orange tw-flex tw-justify-center">
      <Box className="tw-flex tw-flex-col tw-items-center tw-justify-start tw-gap-20 tw-pb-20 tw-px-12 tw-relative">
        {/* Entire Section */}
        <Box className="tw-w-[1344px] tw-flex tw-flex-row tw-gap-12">
          {/* TODO should try having it percentage width based */}
          {/* Top Section with Name */}
          <Box className="tw-flex tw-flex-col tw-gap-[136px]">
            <Box>
              <Typography variant="mainHeading" className="tw-font-textMain">
                SIMONA
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="tw-w-[1344px] tw-items-center tw-justify-end tw-px-12 tw-pt-12 tw-border-t-[1px] tw-border-textMain">
          <Box className="tw-h-[301px] tw-flex tw-flex-col tw-gap-20 tw-justify-center">
            {/* First Row */}
            <Box className="tw-flex tw-flex-row tw-gap-20">
              <HeroKeyPointSection icon="tdesign:device" mainText="PRODUCT DESIGNER" secondaryText="(UX/UI)" />
              <HeroKeyPointSection icon="mdi:location" mainText="BASED IN SYDNEY" secondaryText="AUSTRALIA" />
            </Box>
            {/* Second Row */}
            <Box className="tw-flex tw-flex-row tw-gap-20">
              <HeroKeyPointSection icon="material-symbols-light:verified-rounded" mainText="FIGMA" secondaryText="IS MY LOVE LANGUAGE" />
              <HeroKeyPointSection icon="fluent-mdl2:website" mainText="LEARNING WEB DEV" secondaryText="JAVASCRIPT (REACT)" />
            </Box>
          </Box>
          <Box></Box>
        </Box>
        <img
          src="/home/simona.svg"
          alt="Me"
          loading="lazy"
          height={617}
          width={617}
          style={{ borderRadius: 100 }}
          className="tw-absolute tw-bottom-0 tw-right-0"
        />
      </Box>
    </Box>
  );
};

interface HeroKeyPointSectionProps {
  icon: string;
  mainText: string;
  secondaryText: string;
}

const HeroKeyPointSection = ({ icon, mainText, secondaryText }: HeroKeyPointSectionProps) => {
  return (
    <Box className="tw-w-[210px] tw-flex tw-flex-col tw-gap-3">
      <Box className="tw-h-[24px] tw-w-[24px] tw-flex tw-bg-tertiary-light tw-rounded-full tw-justify-center tw-items-center">
        <Icon icon={icon} color={theme.palette.white.main} />
      </Box>
      <Box className="tw-flex tw-flex-col tw-gap-[2px]">
        <Box>
          <Typography variant="title" className="tw-text-white">
            {mainText}
          </Typography>
        </Box>
        <Box className="tw-flex tw-flex-col tw-gap-2">
          <Typography variant="body" className="tw-text-mainText">
            {secondaryText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
