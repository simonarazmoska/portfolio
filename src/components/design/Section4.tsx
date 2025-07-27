import { Box, Typography } from "@mui/material";

interface Section4ContentItem {
  title: string;
  body?: string;
  keypoints?: string[];
}

interface Section4ContentProps {
  content: Section4ContentItem[];
}

export const Section4Content = ({ content }: Section4ContentProps) => (
  <Box className="tw-flex tw-flex-col tw-gap-12">
    {content.map((item, idx) => (
      <Box key={item.title + idx} className="tw-flex tw-flex-col tw-gap-4">
        <Typography variant="title">{item.title}</Typography>
        {item.body && <Typography variant="body">{item.body}</Typography>}
        {item.keypoints && item.keypoints.length > 0 && (
          <ul className="tw-list-disc tw-ml-6">
            {item.keypoints.map((point, i) => (
              <li key={i}>
                <Typography variant="body">{point}</Typography>
              </li>
            ))}
          </ul>
        )}
      </Box>
    ))}
  </Box>
);
