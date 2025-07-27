import { Box, List, ListItem, Typography } from "@mui/material";

export const Section1TextContent = ({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <Box className="tw-flex tw-flex-col tw-gap-4">
      {paragraphs.map((text, idx) => (
        <Typography key={idx} variant="body">
          {text}
        </Typography>
      ))}
    </Box>
  );
};

interface Section1TextContentWithKeyIssuesProps {
  mainText: string;
  listHeading: string;
  bullets: string[];
  finalText: string;
}

export const Section1TextContentWithKeyIssues = ({ mainText, listHeading, bullets, finalText }: Section1TextContentWithKeyIssuesProps) => (
  <Box className="tw-flex tw-flex-col tw-gap-6 tw-text-textMain">
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
    <Box className="tw-flex tw-flex-col tw-gap-6">
      <Typography variant="body">{finalText}</Typography>
    </Box>
  </Box>
);
