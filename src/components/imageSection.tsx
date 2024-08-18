import { Box } from "@mui/material";

interface ImageSectionProps {
  src: string;
  alt?: string;
  maxHeight?: number;
}

export const ImageSection = ({ src, alt, maxHeight = 697 }: ImageSectionProps) => {
  return (
    <Box className="tw-flex tw-flex-col tw-items-center">
      <img src={src} alt={alt} loading="lazy" style={{ maxHeight: maxHeight }} />
    </Box>
  );
};
