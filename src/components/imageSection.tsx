import { Box } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

interface ImageSectionProps {
  src: string;
  alt?: string;
  maxHeight?: number;
}

export const ImageSection = ({ src, alt, maxHeight = 697 }: ImageSectionProps) => {
  return (
    <Box className="tw-w-full tw-flex tw-justify-center">
      <img src={src} alt={alt} loading="lazy" style={{ maxHeight }} className="tw-h-auto tw-object-contain" />
    </Box>
  );
};

const delimiterIconStyles = {
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  fontSize: "24px",
  color: "black",
  position: "relative"
};

interface BeforeAfterImageSectionProps {
  beforeAfterImages: string[];
  beforeAfterBackground?: string;
  alt?: string;
  maxHeight?: number;
}
export const BeforeAfterImageSection = ({
  beforeAfterImages,
  beforeAfterBackground,
  alt,
  maxHeight = 697
}: BeforeAfterImageSectionProps) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // Default to the center

  const handleMouseMove = (e) => {
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    let position = (offsetX / rect.width) * 100;

    // Ensure the position is within bounds (0% to 100%)
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    setSliderPosition(position);
  };

  return (
    <Box className={clsx("tw-flex tw-flex-col tw-items-center", beforeAfterBackground ? beforeAfterBackground : "")}>
      <div onMouseMove={handleMouseMove} style={{ width: "100%", margin: "0 auto" }}>
        <ReactBeforeSliderComponent
          currentPercentPosition={sliderPosition}
          firstImage={{ imageUrl: beforeAfterImages[0], height: maxHeight }}
          secondImage={{ imageUrl: beforeAfterImages[1], height: maxHeight }}
          delimiterColor="#151515"
          delimiterIconStyles={delimiterIconStyles}
        />
      </div>
    </Box>
  );
};
