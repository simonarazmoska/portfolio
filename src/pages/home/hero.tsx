import { theme } from "@/theme";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <Box className="tw-bg-orange tw-flex tw-justify-center tw-relative">
      <Box className="tw-flex tw-flex-col tw-items-center tw-justify-start tw-gap-20 tw-pb-8 tw-px-6 md:tw-px-12 tw-relative tw-w-full">
        {/* Name Row */}
        <Box className="tw-w-full md:tw-w-[1344px] tw-flex tw-flex-col md:tw-flex-row tw-gap-12">
          <Box className="tw-flex tw-flex-col md:tw-gap-[136px] tw-gap-8">
            <Typography
              variant="mainHeading"
              className="tw-font-textMain tw-leading-none"
              sx={{
                fontSize: { xs: "88px", md: "350px" },
                wordBreak: "break-word"
              }}
            >
              SIMONA
            </Typography>
          </Box>
        </Box>

        {/* Key Points */}
        <Box className="tw-w-full md:tw-w-[1344px] tw-flex tw-flex-col tw-items-start md:tw-block tw-gap-8 md:tw-gap-0 tw-pt-12 tw-border-t tw-border-textMain">
          {/* MOBILE: custom layout */}
          <Box className="tw-flex tw-flex-col md:tw-hidden tw-w-full">
            {/* First row: two key points side by side */}
            <Box className="tw-flex tw-flex-col tw-gap-4 tw-w-full">
              <HeroKeyPointSection icon="tdesign:device" mainText="PRODUCT DESIGNER" secondaryText="(UX/UI)" />
              <HeroKeyPointSection icon="mdi:location" mainText="BASED IN SYDNEY" secondaryText="AUSTRALIA" />

              <HeroKeyPointSection icon="material-symbols-light:verified-rounded" mainText="FIGMA" secondaryText="IS MY LOVE LANGUAGE" />
              <HeroKeyPointSection icon="fluent-mdl2:website" mainText="LEARNING WEB DEV" secondaryText="JAVASCRIPT (REACT)" />
            </Box>
          </Box>

          {/* DESKTOP */}
          <Box className="tw-hidden md:tw-block tw-w-[1344px] tw-items-center tw-justify-end tw-px-12">
            <Box className="tw-h-[301px] tw-flex tw-flex-col tw-gap-20 tw-justify-center">
              <Box className="tw-flex tw-flex-row tw-gap-20">
                <HeroKeyPointSection icon="tdesign:device" mainText="PRODUCT DESIGNER" secondaryText="(UX/UI)" />
                <HeroKeyPointSection icon="mdi:location" mainText="BASED IN SYDNEY" secondaryText="AUSTRALIA" />
              </Box>
              <Box className="tw-flex tw-flex-row tw-gap-20">
                <HeroKeyPointSection icon="material-symbols-light:verified-rounded" mainText="FIGMA" secondaryText="IS MY LOVE LANGUAGE" />
                <HeroKeyPointSection icon="fluent-mdl2:website" mainText="LEARNING WEB DEV" secondaryText="JAVASCRIPT (REACT)" />
              </Box>
            </Box>
            <img
              src="/home/simona.png"
              alt="Me"
              loading="eager"
              height={617}
              width={325}
              style={{ right: "48rem" }}
              className="tw-absolute tw-bottom-0 tw-right-0 tw-translate-x-48"
            />
          </Box>
        </Box>

        <Box className="md:tw-hidden tw-w-full tw-absolute tw-left-1/2 tw-bottom-0 tw-translate-x-[-50%] tw-flex tw-justify-end">
          <img src="/home/simona.png" alt="Me" loading="eager" className="tw-w-36  tw-object-cover  " />
        </Box>
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
    <Box className="tw-w-full md:tw-w-[210px] tw-flex tw-flex-col tw-gap-3">
      <Box className="tw-h-[24px] tw-w-[24px] tw-flex tw-bg-tertiary-light tw-rounded-full tw-justify-center tw-items-center">
        <Icon icon={icon} color={theme.palette.white.main} />
      </Box>
      <Typography variant="title" className="tw-text-white tw-break-words">
        {mainText}
      </Typography>
      <Typography variant="body" className="tw-text-mainText">
        {secondaryText}
      </Typography>
    </Box>
  );
};
