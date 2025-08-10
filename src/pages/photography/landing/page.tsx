import { ContentBlock } from "@/components/ContentBlock";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";

const data = {
  title: "Photography",
  subtitle: "& Videography",
  blurb: (
    <Box>
      <Typography variant="body" className="tw-text-primary" paragraph>
        Before my time in design, I'd spent eight years working as a fashion and lifestyle photographer and videographer, leading end-to-end
        shoots from concept to post-production.
      </Typography>
      <Typography variant="body" className="tw-text-primary" paragraph>
        My work spans editorial, eCommerce, and campaign content - freelancing for brands like Diakrit, QT Hotels, and Mercedes Benz Fashion
        Week. I also worked in-house at Esther & Co. and led seasonal campaign shoots for Canberra Outlet Centre.
      </Typography>
    </Box>
  ),
  imgSrc: "/photography/editorials/landingHero.svg",
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
        loadImageStyle="eager"
      />
      {/* Sections */}
      <PhotographyImageSection src={"/photography/editorials/landing.svg"} alt={"Editorials"} url={"/photography/editorials"} />
      <PhotographyImageSection src={"/photography/campaigns/landing.svg"} alt={"Campaigns"} url={"/photography/campaigns"} />
      <PhotographyImageSection src={"/photography/motion/landing.svg"} alt={"Motion"} url={"/photography/motion"} />
    </Box>
  );
};

interface PhotographyImageSectionProps {
  src: string;
  alt: string;
  url: string;
}

const PhotographyImageSection = ({ src, alt, url }: PhotographyImageSectionProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box className="tw-flex tw-flex-col tw-gap-[90px] tw-px-12 tw-py-20 tw-items-center">
      <Link href={url} underline="hover">
        <Box className="tw-relative">
          <img
            src={src}
            alt={alt}
            loading="eager"
            style={{ maxHeight: "1056px" }}
            className="tw-h-auto tw-object-contain"
            onLoad={() => setLoaded(true)}
          />
          {loaded && (
            <Box className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4 tw-rounded-tr-lg">
              <Typography variant="h1" className="tw-text-primary">
                {alt} <ArrowForwardIcon fontSize="inherit" className="tw-ml-2" />
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Box>
  );
};
