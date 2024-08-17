import { ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="tw-text-white tw-px-12 tw-py-8 tw-space-x-8 tw-bg-nearblack">
      <Box className="tw-flex tw-flex-row tw-justify-between">
        <Box className="tw-flex tw-flex-col tw-justify-between">
          <p className="tw-font-medium tw-text-lavender">SIMONA RAZMOSKA</p>
          <p className="tw-text-white">&copy; 2024 Simona Razmoska. Product Designer.</p>
        </Box>
        <Box className="tw-flex tw-flex-row tw-space-x-6">
          {/* <Box className="tw-space-y-4">
            <p className="tw-font-[600] tw-text-lavender tw-text-[16px]">MAIN</p>
            <p className="tw-text-xl">Home</p>
            <p className="tw-text-xl">Design</p>
            <p className="tw-text-xl">Photography</p>
          </Box> */}
          <Box className="tw-max-w-[175.57px] tw-space-y-4">
            <Box className="tw-flex tw-flex-row tw-items-center tw-px-6">
              <p className="tw-font-[600] tw-text-lavender tw-text-[16px]">CONTACT</p>
            </Box>
            <Box className="tw-flex tw-flex-row tw-items-center tw-px-6">
              <p className="tw-text-xl">Email</p>
              <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
            </Box>
            <Box className="tw-flex tw-flex-row tw-items-center tw-px-6">
              <p className="tw-text-xl">LinkedIn</p>
              <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
            </Box>
            <Box className="tw-flex tw-flex-row tw-items-center tw-px-6">
              <p className="tw-text-xl">Medium</p>
              <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
