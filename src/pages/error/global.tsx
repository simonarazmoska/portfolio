import { StyledButton } from "@/components/button";
import { ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const GlobalErrorPage = () => {
  return (
    <Box className="tw-bg-textMain tw-text-white tw-flex tw-flex-col tw-justify-center tw-items-center">
      <p className="tw-text-4xl tw-font-bold tw-mb-4">ERROR</p>
      <p className="tw-text-xl tw-font-bold tw-mb-4">Oops! Something went wrong.</p>
      <StyledButton style={{ textTransform: "none" }}>
        <Link to="/" className="tw-text-white tw-flex tw-flex-row tw-items-center tw-space-x-2">
          <p className="tw-text-xl">Back to home</p>
          <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
        </Link>
      </StyledButton>
    </Box>
  );
};
