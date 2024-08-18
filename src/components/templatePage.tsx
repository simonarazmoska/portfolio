import { DesignProjectsSection } from "@/components/designProjectsSection";
import { PageData } from "@/components/dtypes";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImageSection } from "@/components/imageSection";
import { TextSection } from "@/components/textSection";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Link } from "@mui/material";
import clsx from "clsx";

export const TemplatePage = ({ data }: { data: PageData }) => {
  const defaultTextColour = data.textColour ? data.textColour : "tw-text-white";
  return (
    <>
      <Header />
      <Box className={clsx("tw-h-full", data.background ? data.background : "tw-bg-nearblack")}>
        {/* Hero Section */}
        <Box className="tw-space-y-20">
          <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-8 tw-py-12 tw-space-y-[87px]">
            <Box className="tw-space-y-14">
              <Box className="tw-space-y-4">
                <Box className="tw-space-y-4">
                  <ArrowDownwardIcon className={clsx(data.hero.textColour ? data.hero.textColour : defaultTextColour)} fontSize="large" />
                  <p className={clsx("tw-text-5xl tw-font-bold", data.hero.textColour ? data.hero.textColour : defaultTextColour)}>
                    {data.hero.title}
                  </p>
                </Box>
                <p className={clsx("tw-text-xl tw-whitespace-pre-line", data.hero.textColour ? data.hero.textColour : defaultTextColour)}>
                  {data.hero.subheading}
                </p>
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
              style={{ maxHeight: data.hero.maxImageHeight ? data.hero.maxImageHeight : 518 }}
            />
          </Box>

          <p
            className={clsx(
              "tw-text-3xl tw-px-20 tw-py-12 tw-space-y-[87px] tw-whitespace-pre-line",
              data.section1.textColour ? data.section1.textColour : defaultTextColour
            )}
          >
            {data.section1.text}
          </p>
        </Box>

        <Box className="tw-flex tw-flex-col tw-items-center">
          <Box className="tw-w-[1440px] tw-flex tw-flex-col tw-items-start tw-justify-center tw-space-y-[104px]">
            {/* Image Section 1 (Image 1) */}
            <ImageSection
              src={data.section2.imgSrc}
              alt={data.section2.imgAlt}
              maxHeight={data.section2.maxImageHeight ? data.section2.maxImageHeight : 697}
            />

            <TextSection
              title={data.section3.title}
              text={data.section3.text}
              src={data.section3.imgSrc}
              alt={data.section3.imgAlt}
              textColour={data.section3.textColour ? data.section3.textColour : defaultTextColour}
              maxHeight={data.section3.maxImageHeight ? data.section3.maxImageHeight : 382}
              textFirst={true}
            />

            {/* Image Section 2 (Image 3) */}
            <ImageSection
              src={data.section4.imgSrc}
              alt={data.section4.imgAlt}
              maxHeight={data.section4.maxImageHeight ? data.section4.maxImageHeight : 697}
            />

            <TextSection
              title={data.section5.title}
              text={data.section5.text}
              src={data.section5.imgSrc}
              alt={data.section5.imgAlt}
              textColour={data.section5.textColour ? data.section5.textColour : defaultTextColour}
              maxHeight={data.section5.maxImageHeight ? data.section5.maxImageHeight : 382}
              textFirst={false}
            />

            {/* Image Section 3 (Image 4) */}
            <ImageSection
              src={data.section6.imgSrc}
              alt={data.section6.imgAlt}
              maxHeight={data.section6.maxImageHeight ? data.section6.maxImageHeight : 697}
            />

            <TextSection
              title={data.section7.title}
              text={data.section7.text}
              src={data.section7.imgSrc}
              alt={data.section7.imgAlt}
              textColour={data.section7.textColour ? data.section7.textColour : defaultTextColour}
              maxHeight={data.section7.maxImageHeight ? data.section7.maxImageHeight : 382}
              textFirst={true}
            />
          </Box>
        </Box>
      </Box>
      <Box className="tw-bg-nearblack tw-space-y-[104px]">
        <DesignProjectsSection />
        <Footer />
      </Box>
    </>
  );
};
