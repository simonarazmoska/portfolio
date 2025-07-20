import { Box, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="tw-text-textMain tw-px-12 tw-py-8 tw-space-x-8 tw-bg-secondary tw-border-t-[0px]">
      <Box className="tw-flex tw-flex-row tw-justify-between">
        <Box className="tw-flex tw-flex-col tw-justify-end">
          <p className="tw-text-textMain">&copy; 2025 Simona Razmoska</p>
        </Box>
        <Box className="tw-flex tw-flex-row tw-space-x-6">
          <Box className="tw-max-w-[175.57px] tw-space-y-4">
            <Box className="tw-flex tw-flex-row tw-items-center tw-px-6">
              <p className="tw-font-[600] tw-text-textMain tw-text-[16px]">CONTACT</p>
            </Box>
            <Link
              underline="hover"
              href="mailto:simona.razmoska@hotmail.com"
              className="tw-flex tw-flex-row tw-items-center tw-px-6"
              sx={{
                textDecorationColor: "textMain",
                "&:hover": {
                  textDecorationColor: "black"
                }
              }}
            >
              <p className="tw-text-textMain tw-text-xl">Email</p>
            </Link>
            <Link
              underline="hover"
              href="https://au.linkedin.com/in/simona-razmoska"
              className="tw-flex tw-flex-row tw-items-center tw-px-6"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                textDecorationColor: "textMain",
                "&:hover": {
                  textDecorationColor: "black"
                }
              }}
            >
              <p className="tw-text-textMain tw-text-xl">LinkedIn</p>
            </Link>
            <Link
              underline="hover"
              href="https://medium.com/@simonarazmoska"
              className="tw-flex tw-flex-row tw-items-center tw-px-6"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                textDecorationColor: "textMain",
                "&:hover": {
                  textDecorationColor: "black"
                }
              }}
            >
              <p className="tw-text-textMain tw-text-xl">Medium</p>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
