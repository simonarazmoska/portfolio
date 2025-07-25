import { LandingHeroSection } from "@/components/landingHero";
import { Box, Typography } from "@mui/material";

const data = {
  title: "About me",
  subtitle: "Product designer with a creative edge",
  blurb: (
    <Box>
      <Typography variant="body1" className="tw-text-primary" paragraph>
        I'm a multidisciplinary product designer with a background in graphic design, photography and storytelling - bringing over eight
        years of creative experience into my UX practice.
      </Typography>
      <Typography variant="body1" className="tw-text-primary" paragraph>
        Whether designing intuitive digital products or crafting visual campaigns, I combine aesthetics with user-first thinking to create
        purposeful experiences across industries.
      </Typography>
    </Box>
  ),
  imageSrc: "/design/up-and-go/hero.png",
  imageAlt: "placeholder" // TODO
};

export const AboutPage = () => {
  return (
    <Box>
      <LandingHeroSection title={data.title} subtitle={data.subtitle} blurb={data.blurb} />
    </Box>
  );
};
