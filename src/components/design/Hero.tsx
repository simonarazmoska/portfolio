import { Button } from "@/components/Button";
import { theme } from "@/theme";
import { tailwindToMuiColor } from "@/utils/colorConverter";
import { Icon } from "@iconify/react";
import { Box, List, ListItem, Typography } from "@mui/material";
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
  <Box className={clsx("tw-flex tw-flex-col tw-items-start tw-gap-6 tw-px-6 tw-py-12", textColour)}>
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

    <Button
      variant="text"
      href={linkUrl}
      sx={{
        "&:hover": {
          textDecorationColor: tailwindToMuiColor(textColour) || theme.palette.textMain.main
        }
      }}
      className="tw-flex tw-items-center tw-gap-1"
    >
      <Typography variant="h2" className={textColour}>
        {linkText}
      </Typography>
      <Icon
        icon="material-symbols:arrow-forward"
        className={textColour}
        style={{
          fontVariationSettings: "'wght' 700",
          fontSize: "2rem",
          width: "2rem",
          height: "2rem"
        }}
      />
    </Button>
  </Box>
);
