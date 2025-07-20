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
  position: "relative" as "relative"
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
  // TODO Overlay images over iPad slider is limited to the true width of the images.
  const [sliderPosition, setSliderPosition] = useState<number>(50); // Default to the center

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    // Only update if mouse is inside the slider area
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
      const offsetX = e.clientX - rect.left;
      let position = (offsetX / rect.width) * 100;
      position = Math.max(0, Math.min(100, position)); // Clamp the position between 0 and 100
      setSliderPosition(position);
    }
  };

  const ReactBeforeSliderStyle = (
    <style>
      {`
      .before-after-slider-component img {
        max-height: ${maxHeight}px;
        object-fit: contain;
        width: 100%;
      }
    `}
    </style>
  );

  return (
    <Box className={clsx(beforeAfterBackground ? beforeAfterBackground : "")}>
      {ReactBeforeSliderStyle}
      <div onMouseMove={handleMouseMove} style={{ margin: "0 auto" }} className="before-after-slider-component">
        <ReactBeforeSliderComponent
          currentPercentPosition={sliderPosition}
          firstImage={{ imageUrl: beforeAfterImages[0] }}
          secondImage={{ imageUrl: beforeAfterImages[1] }}
          delimiterColor="#151515"
          delimiterIconStyles={delimiterIconStyles}
        />
      </div>
    </Box>
  );
};
