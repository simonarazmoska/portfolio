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
  imgSrc: "/photography/editorials/landing-hero.jpg",
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
      <PhotographyImageSection src={"/photography/editorials/landing.jpg"} alt={"Editorials"} url={"/photography/editorials"} />
      <PhotographyImageSection src={"/photography/campaigns/landing.jpg"} alt={"Campaigns"} url={"/photography/campaigns"} />
      <PhotographyImageSection src={"/photography/motion/landing.jpg"} alt={"Motion"} url={"/photography/motion"} />
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
    <Box
      className="tw-flex tw-flex-col tw-items-center"
      sx={{
        gap: { xs: 4, md: "90px" }, // Less gap on mobile, large gap on desktop
        px: { xs: 2, md: 12 },
        py: { xs: 6, md: 20 }
      }}
    >
      <Link
        href={url}
        underline="hover"
        className="tw-group"
        sx={{
          textDecoration: "none"
        }}
      >
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
            <Box
              className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4 tw-rounded-tr-lg"
              sx={{
                width: { xs: "100%", sm: "auto" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                minHeight: { xs: 56, sm: "unset" },
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                px: { xs: 2, sm: 4 },
                py: { xs: 1, sm: 4 },
                transition: "background 0.2s"
              }}
            >
              <Typography
                variant="h1"
                className={`tw-text-primary group-hover:tw-underline`}
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
                  textAlign: { xs: "center", sm: "left" },
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "left", sm: "flex-start" },
                  transition: "color 0.2s"
                }}
              >
                {alt}
                <ArrowForwardIcon
                  fontSize="inherit"
                  className="tw-ml-2 group-hover:tw-translate-x-1"
                  sx={{
                    transition: "transform 0.2s"
                  }}
                />
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Box>
  );
};
