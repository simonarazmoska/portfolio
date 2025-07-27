import { Box, List, ListItem, Typography } from "@mui/material";

interface Section2TextContentProps {
  content: {
    title: string;
    subPoints: string[];
  }[];
}

export const Section2TextContent = ({ content }: Section2TextContentProps) => {
  return (
    <Box className="tw-flex tw-flex-col tw-gap-6">
      <List component="ol" sx={{ listStyleType: "decimal", pl: 3 }}>
        {content.map((point, idx) => (
          <ListItem
            key={point.title + idx}
            component="li"
            sx={{ display: "list-item", flexDirection: "column", alignItems: "flex-start", py: 0 }}
          >
            <Typography variant="body" className="tw-font-bold" component="span">
              {point.title}
            </Typography>
            <List sx={{ pl: 3, listStyleType: "disc" }}>
              {point.subPoints.map((sub, subIdx) => (
                <ListItem key={subIdx} sx={{ display: "list-item", py: 0 }}>
                  <Typography variant="body">{sub}</Typography>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
