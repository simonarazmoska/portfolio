import { Icon } from "@iconify/react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import clsx from "clsx";

interface HeroBlurbProps {
  mainText: string;
  listHeading: string;
  bullets: string[];
  linkText: string;
  linkUrl: string;
  textColour?: string;
}

export const GenericHeroContent = ({
  mainText,
  listHeading,
  bullets,
  linkText,
  linkUrl,
  textColour = "tw-text-textMain"
}: HeroBlurbProps) => (
  <Box className={clsx("tw-flex tw-flex-col tw-gap-6", textColour)}>
    <Box className="tw-flex tw-flex-col tw-gap-6">
      <Typography variant="body">{mainText}</Typography>
      <Typography variant="body" className="tw-font-bold" component="span">
        {listHeading}
      </Typography>
      <List sx={{ pl: 3, listStyleType: "disc" }}>
        {bullets.map((bullet, idx) => (
          <ListItem key={idx} sx={{ display: "list-item", py: 0 }}>
            <Typography variant="body">{bullet}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
    <Link href={linkUrl} underline="none" className="tw-cursor-pointer tw-gap-1 tw-py-2 tw-flex tw-items-center">
      <Typography variant="body" className={textColour}>
        {linkText}
      </Typography>
      <Icon icon="material-symbols:arrow-forward" className={textColour} style={{ fontVariationSettings: "'wght' 700" }} />
    </Link>
  </Box>
);
