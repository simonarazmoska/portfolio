import { Icon } from "@iconify/react";
import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="tw-bg-textMain tw-flex tw-justify-center">
      <Box className="tw-w-[1440px] tw-flex tw-flex-col tw-px-24 tw-py-20 tw-gap-[90px] tw-justify-center tw-items-star">
        <Box className="tw-flex tw-flex-col tw-gap-12">
          <Typography variant="h1" className="tw-text-secondary">
            Contact
          </Typography>
        </Box>
        <Box className="tw-flex tw-flex-col tw-gap-[90px] tw-items-start tw-pt-12 tw-pb-6 tw-border-t-[1px] tw-border-primary tw-w-full">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-end tw-w-full">
            <FooterColumn mainText="GET IN TOUCH" linkText="Email" linkUrl="mailto:simona.razmoska@hotmail.com" />
            <FooterColumn mainText="FIND ME ON" linkText="LinkedIn" linkUrl="https://www.linkedin.com/in/simona-razmoska/" />
            <FooterColumn mainText="READ MORE" linkText="Medium" linkUrl="https://medium.com/@simonarazmoska" />
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
  return (
    <Box className="tw-w-[224px] tw-flex tw-flex-col tw-gap-4 tw-items-start">
      <Box>
        <Typography variant="title" className="tw-text-primary">
          {mainText}
        </Typography>
      </Box>
      <Box className="tw-flex tw-flex-col tw-gap-2">
        <Link href={linkUrl} underline="none" className="tw-cursor-pointer tw-gap-1 tw-py-2 tw-flex tw-justify-center tw-items-center">
          <Typography variant="title" className="tw-text-primary">
            {/* TODO set font to semi-bold, 18 */}
            {linkText}
          </Typography>
          <Icon icon="material-symbols:arrow-forward" className="tw-text-primary" />
          {/* TODO thickness of arrow */}
        </Link>
      </Box>
    </Box>
  );
};
