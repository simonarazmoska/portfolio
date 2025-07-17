import { DesignProjectsSection } from "@/components/designProjectsSection";
import { PageData } from "@/components/dtypes";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HybridSection } from "@/components/hybridSection";
import { BeforeAfterImageSection, ImageSection } from "@/components/imageSection";
import { TextSection } from "@/components/textSection";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Link } from "@mui/material";
import clsx from "clsx";

const HeroSection = ({ data }: { data: PageData }) => {
  const defaultTextColour = data.textColour ? data.textColour : "tw-text-white";

  return (
    <Box className="tw-space-y-20">
      <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-px-1 md:tw-px-3 tw-py-1 md:tw-py-3 tw-gap-3">
        <Box className="tw-space-y-14">
          <Box className="tw-space-y-2">
            <Box className="tw-space-y-4">
              <p
                className={clsx("tw-text-3xl md:tw-text-5xl tw-font-bold", data.hero.textColour ? data.hero.textColour : defaultTextColour)}
              >
                {data.hero.title}
              </p>
            </Box>
            <p
              className={clsx(
                "tw-text-base md:tw-text-xl tw-whitespace-pre-line",
                data.hero.textColour ? data.hero.textColour : defaultTextColour
              )}
            >
              {data.hero.subheading}
            </p>

            <TextSection text={data.section1.text} textColour={data.section1.textColour ? data.section1.textColour : defaultTextColour} />
          </Box>
          {data.link ? (
            <Box className="tw-px-8 tw-py-2 tw-space-x-2 tw-flex tw-flex-row tw-items-center">
              <p className={clsx("tw-text-xl", data.hero.textColour ? data.hero.textColour : defaultTextColour)}>
                <Link underline="hover" color="inherit" href={data.link} rel="noopener noreferrer" target="_blank">
                  {data.hero.viewText ? data.hero.viewText : "View live website"}
                </Link>
              </p>
              <ArrowForwardIcon className={clsx(data.hero.textColour ? data.hero.textColour : defaultTextColour)} />
            </Box>
          ) : (
            <></>
          )}
        </Box>
        <img
          src={data.hero.imgSrc}
          alt={data.hero.imgAlt}
          loading="lazy"
          className="tw-max-w-full tw-h-auto tw-object-contain"
          style={{ maxHeight: data.hero.maxImageHeight ? data.hero.maxImageHeight : 518 }}
        />
      </Box>
    </Box>
  );
};

export const TemplatePage = ({ data }: { data: PageData }) => {
  const defaultTextColour = data.textColour ? data.textColour : "tw-text-white";
  return (
    <>
      <Header />
      <Box className={clsx("tw-h-full", data.background ? data.background : "tw-bg-nearblack")}>
        {/* Hero Section */}
        <HeroSection data={data} />

        <Box className="tw-flex tw-flex-col tw-items-center tw-px-1 md:tw-px-3">
          <Box className="tw-w-full tw-h-auto tw-object-contain tw-flex tw-flex-col tw-items-start tw-justify-center tw-space-y-[6rem] md:tw-space-y-[10rem]">
            {/* Image Section 2 (Image 1) */}
            <ImageSection src={data.section2.imgSrc} alt={data.section2.imgAlt} />

            <HybridSection
              title={data.section3.title}
              subheading={data.section3.subheading}
              text={data.section3.text}
              src={data.section3.imgSrc}
              alt={data.section3.imgAlt}
              textColour={data.section3.textColour ? data.section3.textColour : defaultTextColour}
              textFirst={true}
            />

            <HybridSection
              title={data.section4.title}
              subheading={data.section4.subheading}
              text={data.section4.text}
              src={data.section4.imgSrc}
              alt={data.section4.imgAlt}
              textColour={data.section4.textColour ? data.section4.textColour : defaultTextColour}
              textFirst={false}
            />

            <HybridSection
              title={data.section5.title}
              subheading={data.section5.subheading}
              text={data.section5.text}
              src={data.section5.imgSrc}
              alt={data.section5.imgAlt}
              textColour={data.section5.textColour ? data.section5.textColour : defaultTextColour}
              textFirst={true}
            />

            {/* Image Section 2 (Image 5) */}
            <ImageSection src={data.section6.imgSrc} alt={data.section6.imgAlt} />

            {/* Image Section 3 (Image 6) */}
            {data.section7.beforeAfterImages ? (
              <BeforeAfterImageSection
                alt={data.section7.imgAlt}
                beforeAfterImages={data.section7.beforeAfterImages}
                beforeAfterBackground={data.section7.beforeAfterBackground}
              />
            ) : (
              <></>
              // <ImageSection src={data.section7.imgSrc} alt={data.section7.imgAlt} />
            )}
          </Box>
        </Box>
      </Box>
      <Box className="tw-bg-nearblack tw-space-y-0">
        <DesignProjectsSection />
        <Footer />
      </Box>
    </>
  );
};
