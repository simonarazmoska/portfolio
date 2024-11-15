import { Box, Button, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="tw-text-black tw-px-12 tw-py-8 tw-space-x-8 tw-bg-black tw-border-t-[0px]">
      <Box className="tw-flex tw-flex-row tw-justify-between">
        <Box className="tw-flex tw-flex-col tw-justify-between">
          <Box>
            <Button href="/">
              <Typography className="tw-font-bold tw-text-lavender">SIMONA RAZMOSKA</Typography>
            </Button>
          </Box>
          <p className="tw-text-white">&copy; 2024 Simona Razmoska. Product Designer (UX/UI).</p>
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
            <Link
              underline="hover"
              href="mailto:simona.razmoska@hotmail.com"
              className="tw-flex tw-flex-row tw-items-center tw-px-6"
              sx={{
                textDecorationColor: "white",
                "&:hover": {
                  textDecorationColor: "white"
                }
              }}
            >
              <p className="tw-text-white tw-text-xl">Email</p>
            </Link>
            <Link
              underline="hover"
              href="https://au.linkedin.com/in/simona-razmoska"
              className="tw-flex tw-flex-row tw-items-center tw-px-6"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                textDecorationColor: "white",
                "&:hover": {
                  textDecorationColor: "white"
                }
              }}
            >
              <p className="tw-text-white tw-text-xl">LinkedIn</p>
            </Link>
            <Link
              underline="hover"
              href="https://medium.com/@simonarazmoska"
              className="tw-flex tw-flex-row tw-items-center tw-px-6"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                textDecorationColor: "white",
                "&:hover": {
                  textDecorationColor: "white"
                }
              }}
            >
              <p className="tw-text-white tw-text-xl">Medium</p>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
