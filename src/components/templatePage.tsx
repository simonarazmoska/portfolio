import { ContentBlock } from "@/components/ContentBlock";
import { DesignProjectsSection } from "@/components/designProjectsSection";
import { OverviewColumnData, OverviewSectionData, PageData } from "@/components/dtypes";
import { HybridSection } from "@/components/hybridSection";
import { BeforeAfterImageSection, ImageSection } from "@/components/imageSection";
import { Box, Typography } from "@mui/material";

export const TemplatePage = ({ data }: { data: PageData }) => {
  const defaultTextColour = data.textColour ? data.textColour : "tw-text-white";
  const isLightTextColour = defaultTextColour === "tw-text-white";

  return (
    <>
      <Box data-header-bg={isLightTextColour ? "dark" : "light"} className={"tw-h-full"}>
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
        />

        {/* Overview Section */}
        <OverviewSection columns={data.overview.columns} imgSrc={data.overview.imgSrc} imgAlt={data.overview.imgAlt} />

        {/* Content */}
        <Box className="tw-flex tw-flex-col tw-items-center tw-px-1 md:tw-px-3">
          <Box className="tw-w-full tw-h-auto tw-object-contain tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-[6rem] md:tw-space-y-[10rem]">
            {/* Section 1 */}
            <ImageSection src={data.section1.imgSrc} alt={data.section1.imgAlt} />

            {/* Section 2 */}
            <HybridSection
              title={data.section2.title}
              subHeading={data.section2.subHeading}
              text={data.section2.text}
              src={data.section2.imgSrc}
              alt={data.section2.imgAlt}
              textColour={data.section2.textColour ? data.section2.textColour : defaultTextColour}
              textFirst={true}
            />

            {/* Section 3 */}
            <HybridSection
              title={data.section3.title}
              subHeading={data.section3.subHeading}
              text={data.section3.text}
              src={data.section3.imgSrc}
              alt={data.section3.imgAlt}
              textColour={data.section3.textColour ? data.section3.textColour : defaultTextColour}
              textFirst={false}
            />

            {/* Section 4 */}
            <HybridSection
              title={data.section4.title}
              subHeading={data.section4.subHeading}
              text={data.section4.text}
              src={data.section4.imgSrc}
              alt={data.section4.imgAlt}
              textColour={data.section4.textColour ? data.section4.textColour : defaultTextColour}
              textFirst={true}
            />

            {/* Section 5 */}
            <ImageSection src={data.section5.imgSrc} alt={data.section5.imgAlt} />

            {/* Section 6 - Before/After Images */}
            {data.section6.beforeAfterImages ? (
              <BeforeAfterImageSection
                alt={data.section6.imgAlt}
                beforeAfterImages={data.section6.beforeAfterImages}
                beforeAfterBackground={data.section6.beforeAfterBackground}
              />
            ) : (
              <></>
              // <ImageSection src={data.section6.imgSrc} alt={data.section6.imgAlt} />
            )}
          </Box>
        </Box>
      </Box>
      <Box data-header-bg="light" className="tw-bg-textMain tw-space-y-0">
        <DesignProjectsSection />
      </Box>
    </>
  );
};

const OverviewSection = ({ columns, imgSrc, imgAlt }: OverviewSectionData) => {
  return (
    <Box className="tw-bg-primary">
      <Box className="tw-flex tw-flex-col tw-items-center tw-gap-24 tw-px-8 tw-py-24">
        {/* Overviews */}
        <Box className="tw-w-full tw-flex tw-flex-row tw-justify-center tw-border-b-[1px] tw-pb-8 tw-border-blue-sanitarium">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-start tw-w-full">
            {columns.map((column, idx) => (
              <TextColumnSection key={column.title + idx} title={column.title} contentArray={column.contentArray} />
            ))}
          </Box>
        </Box>

        {/* Image */}
        <img
          src={imgSrc}
          alt={imgAlt}
          // style={{ height: "725px", width: "500px" }}
          className="tw-h-full tw-object-cover"
          // className="tw-w-full tw-h-auto tw-object-cover"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

const TextColumnSection = ({ title, contentArray }: OverviewColumnData) => {
  return (
    <Box className="tw-w-[344px] tw-flex tw-flex-col tw-text-textMain tw-gap-4">
      <Typography variant="title">{title}</Typography>
      <Box className="tw-flex tw-flex-col tw-gap-2">
        {contentArray.map((item, idx) => (
          <Typography key={idx} variant="body">
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
