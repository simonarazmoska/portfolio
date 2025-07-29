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
  imgSrc: "/photography/campaigns/hero.svg",
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
      />

      {/* Image Section 1*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              DOS Emporium
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              Spring/Summer 2020
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/1-A.svg" alt="Campaigns" />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/1-B.svg" alt="Campaigns" />
      </Box>

      {/* Image Section 2*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              Esther & Co.
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              2022
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/2-A.svg" alt="Campaigns" />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/2-B.svg" alt="Campaigns" />
      </Box>

      {/* Image Section 3*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              Canberra Outlet Centre
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              Autumn/Winter 2021
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/3-A.svg" alt="Campaigns" />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/3-B.svg" alt="Campaigns" />
      </Box>

      {/* Image Section 4*/}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              DOS Emporium
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              Autumn/Winter 2020
            </Typography>
          </Box>
          <FullWidthImageSection src="/photography/campaigns/4-A.svg" alt="Campaigns" />
        </Box>
        <FullWidthImageSection src="/photography/campaigns/4-B.svg" alt="Campaigns" />
      </Box>
    </Box>
  );
};
