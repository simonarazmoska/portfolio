import { Button } from "@/components/Button";
import { tailwindToMuiColor } from "@/utils/colorConverter";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="tw-bg-textMain tw-flex tw-justify-center">
      <Box className="tw-w-full tw-flex tw-flex-col tw-px-4 md:tw-px-24 tw-py-12 md:tw-py-20 tw-gap-12 md:tw-gap-[90px] tw-justify-center tw-items-start">
        <Box className="tw-flex tw-flex-col tw-gap-6 md:tw-gap-12">
          <Typography
            variant="h1"
            className="tw-text-secondary"
            sx={{
              fontSize: { xs: "54px", md: "100px" },
              lineHeight: 1.1,
              wordBreak: "break-word"
            }}
          >
            Contact
          </Typography>
        </Box>
        <Box className="tw-flex tw-flex-col tw-gap-12 md:tw-gap-[90px] tw-items-start tw-pt-8 md:tw-pt-12 tw-pb-6 tw-border-t-[1px] tw-border-primary tw-w-full">
          <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-start md:tw-items-end tw-w-full tw-gap-8">
            <Box className="tw-flex tw-flex-col md:tw-flex-row tw-justify-start tw-gap-8 md:tw-gap-36">
              <FooterColumn mainText="GET IN TOUCH" linkText="Email" linkUrl="mailto:simona.razmoska@hotmail.com" />
              <FooterColumn mainText="FIND ME ON" linkText="LinkedIn" linkUrl="https://www.linkedin.com/in/simona-razmoska/" />
              <FooterColumn mainText="READ MORE" linkText="Medium" linkUrl="https://medium.com/@simonarazmoska" />
            </Box>
            <Box className="tw-mt-8 md:tw-mt-0">
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
    <Box className="tw-w-full md:tw-w-[224px] tw-flex tw-flex-col tw-gap-2 md:tw-gap-4 tw-items-start">
      <Box>
        <Typography
          variant="title"
          className={footerContentTextColor}
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: 700
          }}
        >
          {mainText}
        </Typography>
      </Box>
      <Box className="tw-flex tw-flex-col tw-gap-1 md:tw-gap-2">
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
          <Typography
            variant="title"
            className={footerContentTextColor}
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              fontWeight: 700
            }}
          >
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
