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
  imgSrc: "/design/up-and-go/hero.jpg",
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
      <DesignImageSection src={"/design/up-and-go/1.jpg"} alt={"Up&Go"} url={"/design/up-and-go"} />
      <DesignImageSection src={"/design/plantwell/6.jpg"} alt={"PlantWell"} url={"/design/plantwell"} textColor={"tw-text-primary"} />
      <DesignImageSection src={"/design/parkvolt/1.jpg"} alt={"ParkVolt"} url={"/design/parkvolt"} textColor={"tw-text-primary"} />
      <DesignImageSection src={"/design/dr-wallet/4.jpg"} alt={"Dr. Wallet"} url={"/design/dr-wallet"} textColor={"tw-text-primary"} />
    </Box>
  );
};

interface DesignImageSectionProps {
  src: string;
  alt: string;
  url: string;
  textColor?: string;
}

const DesignImageSection = ({ src, alt, url, textColor = "tw-text-textMain" }: DesignImageSectionProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      className="tw-flex tw-flex-col tw-items-center"
      sx={{
        px: { xs: 2, md: 12 },
        py: { xs: 6, md: 20 }
      }}
    >
      <Link
        href={url}
        underline="hover"
        className="tw-group"
        sx={{
          textDecoration: "none"
        }}
      >
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
            <Box
              className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4 tw-rounded-tr-lg"
              sx={{
                width: { xs: "100%", sm: "auto" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                minHeight: { xs: 56, sm: "unset" },
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                px: { xs: 2, sm: 4 },
                py: { xs: 1, sm: 4 },
                transition: "background 0.2s"
              }}
            >
              <Typography
                variant="h1"
                className={`${textColor} group-hover:tw-underline`}
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
                  textAlign: { xs: "center", sm: "left" },
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "left", sm: "flex-start" },
                  transition: "color 0.2s"
                }}
              >
                {alt}
                <ArrowForwardIcon
                  fontSize="inherit"
                  className="tw-ml-2 group-hover:tw-translate-x-1"
                  sx={{
                    color: textColor === "tw-text-white" ? "#FFFFFF" : undefined,
                    transition: "transform 0.2s"
                  }}
                />
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Box>
  );
};
