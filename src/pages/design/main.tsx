import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";

export const DesignHomePage = () => {
  return (
    <Box>
      <DesignImageSection src={"/design/up-and-go/1.png"} alt={"Up&Go"} url={"/design/up-and-go"} />
      <DesignImageSection src={"/design/plantwell/5.png"} alt={"PlantWell"} url={"/design/plantwell"} />
      <DesignImageSection src={"/design/parkvolt/hero.png"} alt={"ParkVolt"} url={"/design/parkvolt"} />
      <DesignImageSection src={"/design/dr-wallet/4.png"} alt={"Dr. Wallet"} url={"/design/dr-wallet"} />
    </Box>
  );
};

interface DesignImageSectionProps {
  src: string;
  alt: string;
  url: string;
}

const DesignImageSection = ({ src, alt, url }: DesignImageSectionProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box className="tw-flex tw-flex-col tw-gap-[90px] tw-px-12 tw-py-20 tw-items-center">
      <Link href={url} underline="hover">
        <Box className="tw-relative">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ maxHeight: "745px" }}
            className="tw-h-auto tw-object-contain"
            onLoad={() => setLoaded(true)}
          />
          {loaded && (
            <Box className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4 tw-rounded-tr-lg">
              <Typography variant="h1" className="tw-text-textMain">
                {/* TODO fix font style */}
                {alt}
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Box>
  );
};
