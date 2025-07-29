import { BeforeAfterImageSection } from "@/components/ImageSection";
import { BeforeAfterImageSectionData, ImageSectionData } from "@/dtypes";
import { Box } from "@mui/material";

export const Section5Content = ({ data }: { data: ImageSectionData | BeforeAfterImageSectionData }) => {
  if ("imgSrc" in data) {
    // Image Section
    return (
      <Box className="tw-flex tw-flex-col tw-px-12 tw-py-20 tw-gap-[90px] tw-items-center">
        <img
          className="tw-flex tw-flex-col tw-justify-center tw-items-center"
          src={data.imgSrc}
          alt={data.imgAlt}
          loading="lazy"
          style={{ maxHeight: "1028px" }}
        />
      </Box>
    );
  }

  // Before/After Section
  return (
    <Box
      className="tw-w-full tw-flex tw-justify-center tw-items-center tw-px-4 tw-py-24"
      sx={{
        backgroundImage: data.beforeAfterBackground ? `url(${data.beforeAfterBackground})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: 900
      }}
    >
      <Box className="tw-relative tw-flex tw-flex-row tw-gap-16 tw-items-center tw-justify-center">
        {/* iPad device mockup with before/after images inside */}
        <Box className="tw-relative tw-flex tw-justify-center tw-items-center">
          <img src="/design/shared/device-ipad.svg" alt="iPad Mockup" className="tw-w-auto tw-drop-shadow-2xl" style={{ zIndex: 2 }} />
          {/* Absolutely center the before/after images inside the iPad mockup */}
          <Box
            className="tw-absolute"
            style={{
              top: "9.5%", // Adjust as needed to fit inside the white area of the iPad
              left: "5.4%",
              width: "90.0%",
              height: "81%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3
            }}
          >
            {data.beforeAfterImages && <BeforeAfterImageSection beforeAfterImages={data.beforeAfterImages} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
