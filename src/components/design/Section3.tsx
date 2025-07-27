import { Box, Typography } from "@mui/material";

interface Section3ContentItem {
  title: string;
  body: string;
}

interface Section3ContentProps {
  content: Section3ContentItem[];
}

export const Section3Content = ({ content }: Section3ContentProps) => {
  return (
    <Box className="tw-flex tw-flex-col tw-gap-12">
      {content.map((item, idx) => (
        <Box key={item.title + idx} className="tw-flex tw-flex-col tw-gap-4">
          <Typography variant="title">{item.title}</Typography>
          <Typography variant="body">{item.body}</Typography>
        </Box>
      ))}
    </Box>
  );
};
