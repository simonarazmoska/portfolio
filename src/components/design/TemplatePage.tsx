import { ContentBlock } from "@/components/ContentBlock";
import { DesignProjectsSection } from "@/components/design/DesignProjectsSection";
import { OverviewSection } from "@/components/design/Overview";
import { Section5Content } from "@/components/design/Section5";
import { PageData } from "@/dtypes";
import { Box } from "@mui/material";

export const TemplatePage = ({ data }: { data: PageData }) => {
  return (
    <>
      <Box className="tw-h-full">
        {/* Hero Section */}
        <ContentBlock
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          blurb={data.hero.blurb}
          imgSrc={data.hero.imgSrc}
          imgAlt={data.hero.imgAlt}
          titleTextColour={data.hero.titleTextColour}
          subtitleTextColour={data.hero.subtitleTextColour}
          backgroundColour={data.hero.backgroundColour}
          showTitleBeforeSubtitle={true}
        />
      </Box>
      {/* Overview Section */}
      <Box>
        <OverviewSection
          columns={data.overview.columns}
          imgSrc={data.overview.imgSrc}
          imgAlt={data.overview.imgAlt}
          borderColour={data.overview.borderColour}
        />
      </Box>

      {/* Content */}
      {/* Section 1 */}
      <ContentBlock
        title={data.section1.title}
        subtitle={data.section1.subtitle}
        blurb={data.section1.blurb}
        imgSrc={data.section1.imgSrc}
        imgAlt={data.section1.imgAlt}
        titleTextColour={data.section1.titleTextColour}
        subtitleTextColour={data.section1.subtitleTextColour}
        showTextFirst={true}
        showTitleBeforeSubtitle={false}
      />

      {/* Section 2 */}
      <ContentBlock
        title={data.section2.title}
        subtitle={data.section2.subtitle}
        blurb={data.section2.blurb}
        imgSrc={data.section2.imgSrc}
        imgAlt={data.section2.imgAlt}
        titleTextColour={data.section2.titleTextColour}
        subtitleTextColour={data.section2.subtitleTextColour}
        showTextFirst={false}
        showTitleBeforeSubtitle={false}
      />

      {/* Section 3 */}
      <ContentBlock
        title={data.section3.title}
        subtitle={data.section3.subtitle}
        blurb={data.section3.blurb}
        imgSrc={data.section3.imgSrc}
        imgAlt={data.section3.imgAlt}
        titleTextColour={data.section3.titleTextColour}
        subtitleTextColour={data.section3.subtitleTextColour}
        showTextFirst={true}
        showTitleBeforeSubtitle={false}
      />

      {/* Section 4 */}
      <ContentBlock
        title={data.section4.title}
        subtitle={data.section4.subtitle}
        blurb={data.section4.blurb}
        imgSrc={data.section4.imgSrc}
        imgAlt={data.section4.imgAlt}
        titleTextColour={data.section4.titleTextColour}
        subtitleTextColour={data.section4.subtitleTextColour}
        showTextFirst={false}
        showTitleBeforeSubtitle={false}
      />

      {/* Section 5 with background image */}
      <Section5Content data={data.section5} />

      {/* Design Projects Section */}
      <Box className="tw-bg-textMain tw-space-y-0">
        <DesignProjectsSection />
      </Box>
    </>
  );
};
