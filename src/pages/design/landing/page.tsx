import { ContentBlock } from "@/components/ContentBlock";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";

const data = {
  title: "Design Work",
  subtitle: "Product (UX/UI) Design",
  blurb: (
    <Box>
      <Typography variant="body" className="tw-text-primary" paragraph>
        I've spent the last four years designing and refining digital products end to end, across the full UX/UI lifecycle.
      </Typography>
      <Typography variant="body" className="tw-text-primary" paragraph>
        My experience spans industries like mining, health, EdTech, eCommerce, and travel - working with brands such as Sanitarium,
        Intrepid, Michael Hill, Scenic, and Sandvik.
      </Typography>
      <Typography variant="body" className="tw-text-primary">
        Some of my design work is confidential, I'd love the chance to walk you through it in conversation.
      </Typography>
    </Box>
  ),
  imgSrc: "/design/up-and-go/hero.png",
  imgAlt: "up-and-go-hero"
};

export const DesignLandingPage = () => {
  return (
    <Box>
      <ContentBlock
        title={data.title}
        subtitle={data.subtitle}
        blurb={data.blurb}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
        titleTextColour="tw-text-secondary"
        subtitleTextColour="tw-text-primary"
        backgroundColour="tw-bg-textMain"
        loadImageStyle="eager"
      />
      {/* Sections */}
      <DesignImageSection src={"/design/up-and-go/1.png"} alt={"Up&Go"} url={"/design/up-and-go"} />
      <DesignImageSection src={"/design/plantwell/6.png"} alt={"PlantWell"} url={"/design/plantwell"} />
      <DesignImageSection src={"/design/parkvolt/1.png"} alt={"ParkVolt"} url={"/design/parkvolt"} />
      <DesignImageSection src={"/design/dr-wallet/6.png"} alt={"Dr. Wallet"} url={"/design/dr-wallet"} />
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
            style={{ maxHeight: "1056px" }}
            className="tw-h-auto tw-object-contain"
            onLoad={() => setLoaded(true)}
          />
          {loaded && (
            <Box className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4 tw-rounded-tr-lg">
              <Typography variant="h1" className={alt === "ParkVolt" ? "tw-text-primary" : "tw-text-textMain"}>
                {/* TODO fix font style */}
                {alt} <ArrowForwardIcon fontSize="inherit" className="tw-ml-2" />
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Box>
  );
};
