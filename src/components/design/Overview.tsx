import { OverviewColumnData, OverviewSectionData } from "@/dtypes";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";

// The OverviewSection component displays columns and an image.
// On mobile, everything stacks vertically with good spacing and no overlap.
export const OverviewSection = ({ columns, imgSrc, imgAlt, borderColour }: OverviewSectionData) => {
  return (
    <Box className="tw-bg-primary">
      <Box className="tw-flex tw-flex-col tw-items-center tw-gap-16 md:tw-gap-24 tw-px-4 md:tw-px-8 tw-py-12 md:tw-py-24">
        {/* Overviews */}
        <Box className={clsx("tw-w-full tw-border-b-[1px] tw-pb-8", borderColour)}>
          <Box
            className={clsx(
              "tw-w-full",
              // On mobile: stack columns vertically with gap
              "tw-flex tw-flex-col tw-gap-8",
              // On medium: 2-column grid with spacing
              "md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-12 md:tw-gap-y-8",
              // On large: horizontal flex row
              "lg:tw-flex lg:tw-flex-row lg:tw-justify-between"
            )}
          >
            {columns.map((column, idx) => (
              <TextColumnSection key={column.title + idx} title={column.title} contentArray={column.contentArray} />
            ))}
          </Box>
        </Box>

        {/* Image */}
        <Box className="tw-w-full tw-flex tw-justify-center">
          <img src={imgSrc} alt={imgAlt} className="tw-w-full  tw-h-auto tw-object-cover" loading="lazy" style={{ maxHeight: "60vh" }} />
        </Box>
      </Box>
    </Box>
  );
};

// Each column stacks its title and content with spacing.
// On mobile, there is extra margin below the title for clarity.
const TextColumnSection = ({ title, contentArray }: OverviewColumnData) => {
  return (
    <Box className="tw-w-full lg:tw-w-[344px] tw-flex tw-flex-col tw-text-textMain tw-gap-4">
      <Typography variant="title" className="tw-mb-4 md:tw-mb-2">
        {title}
      </Typography>
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
