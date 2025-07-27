import { OverviewColumnData, OverviewSectionData } from "@/dtypes";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";

export const OverviewSection = ({ columns, imgSrc, imgAlt, borderColour }: OverviewSectionData) => {
  return (
    <Box className="tw-bg-primary">
      <Box className="tw-flex tw-flex-col tw-items-center tw-gap-24 tw-px-8 tw-py-24">
        {/* Overviews */}
        <Box className={clsx("tw-w-full tw-flex tw-flex-row tw-justify-center tw-border-b-[1px] tw-pb-8", borderColour)}>
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-start tw-w-full">
            {columns.map((column, idx) => (
              <TextColumnSection key={column.title + idx} title={column.title} contentArray={column.contentArray} />
            ))}
          </Box>
        </Box>

        {/* Image */}
        <img src={imgSrc} alt={imgAlt} className="tw-h-full tw-object-cover" loading="lazy" />
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
