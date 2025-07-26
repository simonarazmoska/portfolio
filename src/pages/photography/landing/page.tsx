import { ContentBlock } from "@/components/ContentBlock";
import { Box, Typography } from "@mui/material";

const data = {
  title: "Photography",
  subtitle: "& Videography",
  blurb: (
    <Box>
      <Typography variant="body1" className="tw-text-primary" paragraph>
        Before my time in design, I’d spent eight years working as a fashion and lifestyle photographer and videographer, leading end-to-end
        shoots from concept to post-production.
      </Typography>
      <Typography variant="body1" className="tw-text-primary" paragraph>
        My work spans editorial, eCommerce, and campaign content - freelancing for brands like Diakrit, QT Hotels, and Mercedes Benz Fashion
        Week. I also worked in-house at Esther & Co. and led seasonal campaign shoots for Canberra Outlet Centre.
      </Typography>
    </Box>
  ),
  imgSrc: "/photography/landing/hero.png",
  imgAlt: "photography-hero"
};

export const PhotographyLandingPage = () => {
  return (
    <Box>
      <ContentBlock
        title={data.title}
        subtitle={data.subtitle}
        blurb={data.blurb}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
        titleTextColour="tw-text-secondary"
        subtitleTextColour="tw-text-primary"
        backgroundColour="tw-bg-textMain"
      />
    </Box>
  );
};
