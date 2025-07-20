import { DesignProjectsSection } from "@/components/designProjectsSection";
import { Typer } from "@/components/typer";
import { Box, Link } from "@mui/material";

const ABOUT_ME_TEXT_GROUPS = ["Product Designer.", "Figma guru.", "Learning web development.", "Sydney-based.", "Photography enthusiast."];

export const HomePage = () => {
  return (
    <Box className="tw-bg-secondary">
      <Box className="tw-max-h-[780px] tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-8 tw-py-16">
        {/* Text Box */}
        <Box className="tw-max-w-[780px] tw-justify-between tw-space-y-14">
          <p className="tw-text-[48px]">
            Hi, I'm Simona
            <Typer dataText={ABOUT_ME_TEXT_GROUPS} />
          </p>
          <p className="tw-text-[32px]">
            Product Designer (UX/UI) with a unique visual perspective thanks to my{" "}
            <Link
              color="inherit"
              href="https://www.instagram.com/simonarazmoska_/"
              className="tw-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              photography
            </Link>{" "}
            experience. Currently shaping products at{" "}
            <Link color="inherit" href="https://www.endava.com" className="tw-underline" rel="noopener noreferrer" target="_blank">
              Endava
            </Link>
            .
          </p>
        </Box>

        {/* Image */}
        <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-space-y-3">
          <img src={"/home/sepia_photo.png"} alt="Me" loading="lazy" height={528} width={396} style={{ borderRadius: 100 }} />
          {/* <Box className="tw-px-8 tw-py-2 tw-space-x-2 tw-flex tw-flex-row tw-items-center">
            <p className="tw-text-2xl ">Get in touch</p>
            <ArrowForwardIcon />
          </Box> */}
        </Box>
      </Box>
      <DesignProjectsSection textColour="textMain" cardBackgroundOpacity={0.5} />
    </Box>
  );
};
