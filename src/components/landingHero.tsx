import { Box, Typography } from "@mui/material";

interface LandingHeroSectionProps {
  title: string;
  subtitle: string;
  blurb?: React.ReactNode;
}

export const LandingHeroSection = ({ title, subtitle, blurb }: LandingHeroSectionProps) => {
  return (
    <Box className="tw-h-[1290px] tw-bg-textMain">
      <Box className="tw-h-full tw-flex tw-flex-col tw-px-8 tw-pb-24 tw-gap-24">
        <Box></Box>
        <Box className="tw-h-full tw-flex tw-flex-row tw-justify-start tw-gap-48">
          {/* Text Column */}
          <Box className="tw-h-full tw-w-[725px] tw-flex tw-flex-col tw-justify-between tw-pb-20">
            {/* Header */}
            <Box>
              <Typography variant="h1" className="tw-text-secondary">
                {title}
              </Typography>
              <Typography variant="h2" className="tw-text-primary">
                {subtitle}
              </Typography>
            </Box>

            {/* Footer */}
            {blurb && blurb}
          </Box>

          {/* Image Column */}
          <img
            src="/design/up-and-go/hero.svg"
            alt="Design Hero"
            // style={{ height: "725px", width: "500px" }}
            className="tw-h-full tw-object-cover"
            // className="tw-w-full tw-h-auto tw-object-cover"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};
