import { Button } from "@/components/Button";
import { CardProps } from "@/dtypes";
import { tailwindToMuiColor } from "@/utils/colorConverter";
import { Icon } from "@iconify/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";

const cards: CardProps[] = [
  {
    title: "Up&Go",
    text: "Website re-design and re-platforming.",
    imageSource: "/design/up-and-go/card.jpg",
    imgAlt: "Up&Go",
    link: "/design/up-and-go"
  },

  {
    title: "Plantwell",
    text: "Website design and re-platforming.",
    imageSource: "/design/plantwell/card.jpg",
    imgAlt: "Plantwell",
    link: "/design/plantwell"
  },
  {
    title: "ParkVolt",
    text: "Mobile app design & branding.",
    imageSource: "/design/parkvolt/card.jpg",
    imgAlt: "ParkVolt",
    link: "/design/parkvolt"
  },
  {
    title: "Dr. Wallet",
    text: "Responsive web design.",
    imageSource: "/design/dr-wallet/card.jpg",
    imgAlt: "Dr. Wallet",
    link: "/design/dr-wallet"
  }
];

export const DesignProjectsSection = ({}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Check scroll position to show/hide arrows
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Scroll right
  const handleChevronClick = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector("button")?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
    }
  };

  // Scroll left
  const handleChevronLeftClick = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector("button")?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: "smooth" });
    }
  };

  return (
    <Box className="tw-bg-primary">
      <Box className="tw-flex tw-flex-col tw-gap-[90px] tw-items-center tw-px-8 tw-py-24">
        <Box className="tw-w-full tw-flex tw-flex-col tw-gap-24">
          <Typography
            variant="h1"
            className="tw-text-secondary"
            sx={{
              fontSize: { xs: "60px", md: "80px", lg: "100px" }
            }}
          >
            More Projects
          </Typography>

          {/* Project Cards Carousel */}
          <Box className="tw-relative tw-w-full">
            {/* Left Chevron */}
            {showLeft && (
              <Box
                className="tw-block lg:tw-hidden tw-absolute tw-top-1/2 tw-left-0 tw--translate-y-1/2 tw-bg-primary tw-rounded-full tw-shadow"
                sx={{
                  display: { xs: "block", lg: "none" },
                  p: 1,
                  zIndex: 10
                }}
                onClick={handleChevronLeftClick}
                aria-label="Scroll carousel left"
              >
                <ChevronLeftIcon sx={{ fontSize: 30, color: "#222" }} />
              </Box>
            )}
            <Box
              ref={carouselRef}
              onScroll={handleScroll}
              className="
                tw-flex tw-flex-row tw-flex-nowrap tw-gap-x-16 tw-justify-between tw-items-center
                md:tw-overflow-x-auto md:tw-scrollbar-hide md:tw-pb-4
                md:tw-gap-x-8 md:tw-justify-start
                tw-w-full tw-max-w-full tw-box-border
              "
              sx={{
                width: "100%",
                maxWidth: { lg: "clamp(500px, 100vw, 2485px)" },
                margin: "0 auto",
                overflowX: { xs: "auto", md: "auto" },
                paddingInline: { xs: 0, md: (theme) => theme.spacing(2) }
              }}
            >
              <ProjectCard imgSrc="/design/up-and-go/card.jpg" imgAlt="Up&Go Card" text="Up&Go" link="/design/up-and-go" />
              <ProjectCard imgSrc="/design/plantwell/card.jpg" imgAlt="Plantwell Card" text="Plantwell" link="/design/plantwell" />
              <ProjectCard imgSrc="/design/parkvolt/card.jpg" imgAlt="ParkVolt Card" text="ParkVolt" link="/design/parkvolt" />
              <ProjectCard imgSrc="/design/dr-wallet/card.jpg" imgAlt="Dr. Wallet Card" text="Dr. Wallet" link="/design/dr-wallet" />
            </Box>
            {/* Right Chevron */}
            {showRight && (
              <Box
                className="tw-block lg:tw-hidden tw-absolute tw-top-1/2 tw-right-0 tw--translate-y-1/2 tw-bg-primary tw-rounded-full tw-shadow"
                sx={{
                  display: { xs: "block", lg: "none" },
                  p: 1,
                  zIndex: 10
                }}
                onClick={handleChevronClick}
                aria-label="Scroll carousel right"
              >
                <ChevronRightIcon sx={{ fontSize: 30, color: "#222" }} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface ProjectCardProps {
  imgSrc: string;
  imgAlt: string;
  text: string;
  link: string;
}

const ProjectCard = ({ imgSrc, imgAlt, text, link }: ProjectCardProps) => {
  return (
    <Button
      variant="text"
      href={link}
      sx={{
        "&:hover": {
          textDecorationColor: tailwindToMuiColor("tw-text-textMain")
        }
      }}
      className="tw-min-w-[260px] tw-max-w-[320px] md:tw-min-w-[320px] md:tw-max-w-[320px] lg:tw-min-w-0 lg:tw-max-w-none"
      style={{ flex: "0 0 auto" }}
    >
      <Box className="tw-flex tw-flex-col tw-gap-4" style={{ minWidth: 0, flex: 1 }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: 500,
            maxHeight: 500,
            minWidth: "100%",
            minHeight: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover"
          }}
          width={500}
          height={500}
        />
        <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center" style={{ minWidth: 0 }}>
          <Typography
            variant="h2"
            className="tw-text-textMain tw-flex tw-flex-row tw-gap-1"
            sx={{
              fontSize: { xs: "1.5rem", sm: "clamp(2rem, 2.5vw, 2.25rem)" }, // Always h2 size, 2rem on mobile
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: 0,
              flex: 1
            }}
          >
            {text}
          </Typography>
          <Box
            className="tw-text-textMain tw-flex tw-flex-row tw-gap-[10px] tw-px-3 tw-justify-center tw-items-center"
            sx={{ flexShrink: 0, alignItems: "center", height: "100%" }}
          >
            <Icon
              icon="material-symbols:arrow-forward"
              className="tw-text-textMain"
              width="1.5em"
              height="1.5em"
              style={{ display: "flex", alignItems: "center" }}
            />
          </Box>
        </Box>
      </Box>
    </Button>
  );
};
