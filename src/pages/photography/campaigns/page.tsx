import { ContentBlock } from "@/components/ContentBlock";
import { FullWidthImageSection } from "@/components/ImageSection";
import { Box, Typography } from "@mui/material";

const data = {
  title: "Campaigns",
  subtitle: "Seasonal fashion campaigns",
  blurb: (
    <Box>
      <Typography variant="body" className="tw-text-primary" paragraph>
        Seasonal campaigns crafted end-to-end, from concept to delivery. I work closely with brands to create fashion-forward visuals that
        speak to identity, detail, and direction.
      </Typography>
    </Box>
  ),
  imgSrc: "/photography/campaigns/hero.jpg",
  imgAlt: "Campaigns Hero"
};

export const CampaignsPage = () => {
  return (
    <Box>
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

      {/* Image Section 1*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-4 md:tw-px-20 tw-py-10 md:tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-start md:tw-items-center tw-w-full tw-mb-3 tw-gap-4">
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              DOS Emporium
            </Typography>
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              Spring/Summer 2020
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/1-A.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/1-B.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
      </Box>

      {/* Image Section 2*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-4 md:tw-px-20 tw-py-10 md:tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-start md:tw-items-center tw-w-full tw-mb-3 tw-gap-4">
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              Esther & Co.
            </Typography>
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              2022
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/2-A.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/2-B.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
      </Box>

      {/* Image Section 3*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-4 md:tw-px-20 tw-py-10 md:tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-start md:tw-items-center tw-w-full tw-mb-3 tw-gap-4">
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              Canberra Outlet Centre
            </Typography>
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              Autumn/Winter 2021
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/3-A.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/3-B.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
      </Box>

      {/* Image Section 4*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-4 md:tw-px-20 tw-py-10 md:tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-start md:tw-items-center tw-w-full tw-mb-3 tw-gap-4">
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              DOS Emporium
            </Typography>
            <Typography variant="title" className="tw-text-secondary" sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}>
              Autumn/Winter 2020
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/4-A.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/4-B.jpg" alt="Campaigns" sx={{ maxHeight: { xs: "60vh", md: "600px" } }} />
      </Box>
    </Box>
  );
};
