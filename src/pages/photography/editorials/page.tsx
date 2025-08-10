import { ContentBlock } from "@/components/ContentBlock";
import { FullWidthImageSection } from "@/components/ImageSection";
import { Box, Typography } from "@mui/material";

const data = {
  title: "Editorials",
  subtitle: "Fashion & lifestyle editorials",
  blurb: (
    <Box>
      <Typography variant="body" className="tw-text-primary" paragraph>
        Curated stories told through fashion, light, and mood. My editorial work blends creative direction with visual storytelling -
        whether for print or digital, each shoot is crafted to capture tone, texture, and emotion.
      </Typography>
    </Box>
  ),
  imgSrc: "/photography/editorials/hero.jpg",
  imgAlt: "Editorials Hero"
};

export const EditorialsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <ContentBlock
        title={data.title}
        subtitle={data.subtitle}
        blurb={data.blurb}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
        titleTextColour="tw-text-secondary"
        subtitleTextColour="tw-text-primary"
        backgroundColour="tw-bg-textMain"
        showTitleBeforeSubtitle={true}
        loadImageStyle="eager"
      />
      {/* Image Section */}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        {[
          "/photography/editorials/1.jpg",
          "/photography/editorials/2.jpg",
          "/photography/editorials/3.jpg",
          "/photography/editorials/4.jpg",
          "/photography/editorials/5.jpg",
          "/photography/editorials/6.jpg",
          "/photography/editorials/7.jpg",
          "/photography/editorials/8.jpg",
          "/photography/editorials/9.jpg",
          "/photography/editorials/10.jpg",
          "/photography/editorials/11.jpg",
          "/photography/editorials/12.jpg",
          "/photography/editorials/13.jpg",
          "/photography/editorials/14.jpg"
        ].map((src) => (
          <FullWidthImageSection key={src} src={src} alt="Editorials" maxHeight={null} />
        ))}
      </Box>
    </>
  );
};
