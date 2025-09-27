import { Button } from "@/components/Button";
import { ContentBlock } from "@/components/ContentBlock";
import { HeroSection } from "@/pages/home/hero";
import { theme } from "@/theme";
import { Icon } from "@iconify/react";
import { Box, Link, Typography } from "@mui/material";

const titleTextColour = "tw-text-textMain";
const backgroundColour = "tw-bg-primary";

const contentData = {
  design: {
    title: "Design",
    subtitle: "/01",
    blurb: (
      <Box className="tw-flex tw-flex-col tw-gap-6">
        <Box>
          <Typography variant="body" className={titleTextColour}>
            I'm a UX/UI designer with 4 years of end-to-end product experience across industries like mining, health, EdTech, eCommerce, and
            travel. I've worked with brands including Sanitarium, Intrepid, Michael Hill, Scenic, and Sandvik. Some of my work is
            confidential, but I'd love to walk you through it in conversation.
          </Typography>
        </Box>

        <Box>
          <Button
            variant="text"
            href="/design"
            sx={{
              "&:hover": {
                textDecorationColor: theme.palette.textMain.main
              }
            }}
            className="tw-flex tw-items-center tw-gap-1 tw-py-2"
          >
            <Typography variant="h2" className={titleTextColour}>
              View design work
            </Typography>
            <Icon
              icon="material-symbols:arrow-forward"
              className={titleTextColour}
              style={{
                fontVariationSettings: "'wght' 700",
                fontSize: "2rem",
                width: "2rem",
                height: "2rem"
              }}
            />
          </Button>
        </Box>
      </Box>
    ),

    imgSrc: "/home/design.jpg",
    imgAlt: "Design Portfolio",
    titleTextColour: titleTextColour,
    subtitleTextColour: titleTextColour,
    backgroundColour: backgroundColour
  },

  photography: {
    title: "Photography",
    subtitle: "/02",
    blurb: (
      <Box className="tw-flex tw-flex-col tw-gap-6">
        <Box>
          <Typography variant="body" className={titleTextColour}>
            Before moving into design, I spent 8 years as a fashion and lifestyle photographer and videographer, leading shoots from concept
            to post-production. My work spanned editorial, eCommerce, and campaigns for brands like Canberra Outlet Centre, Diakrit, QT
            Hotels, and Mercedes Benz Fashion Week, as well as in-house roles at Esther & Co.
          </Typography>
        </Box>

        <Box>
          <Button
            variant="text"
            href="/photography"
            sx={{
              "&:hover": {
                textDecorationColor: theme.palette.textMain.main
              }
            }}
            className="tw-flex tw-items-center tw-gap-1 tw-py-2"
          >
            <Typography variant="h2" className={titleTextColour}>
              View photography
            </Typography>
            <Icon
              icon="material-symbols:arrow-forward"
              className={titleTextColour}
              style={{
                fontVariationSettings: "'wght' 700",
                fontSize: "2rem",
                width: "2rem",
                height: "2rem"
              }}
            />
          </Button>
        </Box>
      </Box>
    ),

    imgSrc: "/home/photography.jpg",
    imgAlt: "Photography Portfolio",
    titleTextColour: titleTextColour,
    subtitleTextColour: titleTextColour,
    backgroundColour: backgroundColour
  }
};

export const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <ContentBlock
        showTitleBeforeSubtitle={false}
        {...contentData.design}
        imgComponent={
          <a href="/design" style={{ display: "block" }}>
            <img
              src={contentData.design.imgSrc}
              alt={contentData.design.imgAlt}
              className="tw-cursor-pointer tw-transition-opacity hover:tw-opacity-80"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
        }
      />
      <ContentBlock
        showTitleBeforeSubtitle={false}
        showTextFirst={false}
        {...contentData.photography}
        imgComponent={
          <Link href="/photography" style={{ display: "block" }}>
            <img
              src={contentData.photography.imgSrc}
              alt={contentData.photography.imgAlt}
              className="tw-cursor-pointer tw-transition-opacity hover:tw-opacity-80"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        }
      />
    </Box>
  );
};
