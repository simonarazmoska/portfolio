import { DesignProjectsSection } from "@/components/designProjectsSection";
import { PageData } from "@/components/dtypes";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImageSection } from "@/components/imageSection";
import { TextSection } from "@/components/textSection";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export const TemplatePage = ({ data }: { data: PageData }) => {
  return (
    <>
      <Header />
      <Box className="tw-bg-nearblack tw-h-full tw-space-y-20">
        {/* Hero Section */}
        <Box>
          <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-12 tw-py-8">
            <Box className="tw-space-y-14">
              <Box className="tw-space-y-4">
                <Box className="tw-space-y-4">
                  <ArrowDownwardIcon style={{ color: "#FFFFFF" }} fontSize="large" />
                  <p className="tw-text-5xl tw-font-bold tw-text-white">{data.hero.title}</p>
                </Box>
                <p className="tw-text-xl tw-text-white tw-whitespace-pre-line">{data.hero.subheading}</p>
              </Box>

              <Box className="tw-px-8 tw-py-2 tw-space-x-2 tw-flex tw-flex-row tw-items-center">
                <p className="tw-text-xl tw-text-white">View live website</p>
                <ArrowForwardIcon style={{ color: "#FFFFFF" }} />
              </Box>
            </Box>
            <img src={data.hero.imgSrc} alt={data.hero.imgAlt} loading="lazy" style={{ maxHeight: 518 }} />
          </Box>

          <p className="tw-text-white tw-text-3xl tw-px-12 tw-py-8  tw-whitespace-pre-line">{data.section1.text}</p>
        </Box>

        {/* Image Section 1 (Image 1) */}
        <ImageSection src={data.section2.imgSrc} alt={data.section2.imgAlt} maxHeight={697} />

        <Box className="tw-flex tw-flex-row tw-items-center tw-px-8 tw-py-12">
          <Box className="tw-space-y-6">
            <p className="tw-text-4.5xl tw-text-white">{data.section3.title}</p>
            <p className="tw-text-xl tw-text-white">{data.section3.text}</p>
          </Box>
          <img src={data.section3.imgSrc} alt={data.section3.imgAlt} loading="lazy" style={{ maxHeight: 382 }} />
        </Box>

        {/* Image Section 2 (Image 3) */}
        <ImageSection src={data.section4.imgSrc} alt={data.section4.imgAlt} maxHeight={697} />

        <TextSection
          title={data.section5.title}
          text={data.section5.text}
          src={data.section5.imgSrc}
          alt={data.section5.imgAlt}
          maxHeight={382}
          textFirst={false}
        />

        {/* Image Section 3 (Image 4) */}
        <ImageSection src={data.section6.imgSrc} alt={data.section6.imgAlt} maxHeight={697} />

        <TextSection
          title={data.section7.title}
          text={data.section7.text}
          src={data.section7.imgSrc}
          alt={data.section7.imgAlt}
          maxHeight={382}
          textFirst={true}
        />

        <DesignProjectsSection />
        <Footer />
      </Box>
    </>
  );
};
