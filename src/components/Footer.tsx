import { Button } from "@/components/Button";
import { tailwindToMuiColor } from "@/utils/colorConverter";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="tw-bg-textMain tw-flex tw-justify-center">
      <Box className="tw-w-full tw-flex tw-flex-col tw-px-24 tw-py-20 tw-gap-[90px] tw-justify-center tw-items-star">
        <Box className="tw-flex tw-flex-col tw-gap-12">
          <Typography variant="h1" className="tw-text-secondary">
            Contact
          </Typography>
        </Box>
        <Box className="tw-flex tw-flex-col tw-gap-[90px] tw-items-start tw-pt-12 tw-pb-6 tw-border-t-[1px] tw-border-primary tw-w-full">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-end tw-w-full">
            <Box className="tw-flex tw-flex-row tw-justify-start tw-gap-36">
              <FooterColumn mainText="GET IN TOUCH" linkText="Email" linkUrl="mailto:simona.razmoska@hotmail.com" />
              <FooterColumn mainText="FIND ME ON" linkText="LinkedIn" linkUrl="https://www.linkedin.com/in/simona-razmoska/" />
              <FooterColumn mainText="READ MORE" linkText="Medium" linkUrl="https://medium.com/@simonarazmoska" />
            </Box>
            <Box>
              <Typography variant="body" className="tw-text-primary">
                &copy; 2025 Simona Razmoska
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface FooterColumnProps {
  mainText: string;
  linkText: string;
  linkUrl: string;
}

const FooterColumn = ({ mainText, linkText, linkUrl }: FooterColumnProps) => {
  const footerContentTextColor = "tw-text-primary";

  return (
    <Box className="tw-w-[224px] tw-flex tw-flex-col tw-gap-4 tw-items-start">
      <Box>
        <Typography variant="title" className={footerContentTextColor}>
          {mainText}
        </Typography>
      </Box>
      <Box className="tw-flex tw-flex-col tw-gap-2">
        <Button
          variant="text"
          href={linkUrl}
          sx={{
            "&:hover": {
              textDecorationColor: tailwindToMuiColor(footerContentTextColor)
            }
          }}
          className="tw-flex tw-items-center tw-gap-1"
        >
          <Typography variant="title" className={footerContentTextColor}>
            {linkText}
          </Typography>
          <Icon
            icon="material-symbols:arrow-forward"
            className={footerContentTextColor}
            style={{
              fontVariationSettings: "'wght' 700",
              fontSize: "2rem",
              width: "1rem",
              height: "1rem"
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};
