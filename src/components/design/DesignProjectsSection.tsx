import { CardProps } from "@/dtypes";
import { Icon } from "@iconify/react";
import { Box, Link, Typography } from "@mui/material";

const cards: CardProps[] = [
  {
    title: "Up&Go",
    text: "Website re-design and re-platforming.",
    imageSource: "/design/up-and-go/card.svg",
    imgAlt: "Up&Go",
    link: "/design/up-and-go"
  },

  {
    title: "Plantwell",
    text: "Website design and re-platforming.",
    imageSource: "/design/plantwell/hero.svg",
    imgAlt: "Plantwell",
    link: "/design/plantwell"
  },
  {
    title: "ParkVolt",
    text: "Mobile app design & branding.",
    imageSource: "/design/parkvolt/hero.svg",
    imgAlt: "ParkVolt",
    link: "/design/parkvolt"
  },
  {
    title: "Dr. Wallet",
    text: "Responsive web design.",
    imageSource: "/design/dr-wallet/hero.svg",
    imgAlt: "Dr. Wallet",
    link: "/design/dr-wallet"
  }
];

export const DesignProjectsSection = ({}) => {
  return (
    <Box className="tw-bg-primary">
      <Box className="tw-flex tw-flex-col tw-gap-[90px] tw-items-center tw-px-8 tw-py-24">
        <Box className="tw-w-full tw-flex tw-flex-col tw-gap-24">
          <Typography variant="h1" className="tw-text-secondary">
            More Projects
          </Typography>

          {/* Project Cards */}
          <Box
            className="tw-flex tw-flex-row tw-flex-nowrap tw-gap-x-16 tw-justify-between tw-items-center"
            sx={{
              maxWidth: "clamp(500px, 100vw, 2485px)",
              width: "100%",
              margin: "0 auto"
            }}
          >
            <ProjectCard imgSrc="/design/up-and-go/card.svg" imgAlt="Up&Go Card" text="Up&Go" link="/design/up-and-go" />
            <ProjectCard imgSrc="/design/plantwell/card.svg" imgAlt="Plantwell Card" text="Plantwell" link="/design/plantwell" />
            <ProjectCard imgSrc="/design/parkvolt/card.svg" imgAlt="ParkVolt Card" text="ParkVolt" link="/design/parkvolt" />
            <ProjectCard imgSrc="/design/dr-wallet/card.svg" imgAlt="Dr. Wallet Card" text="Dr. Wallet" link="/design/dr-wallet" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ProjectCard = ({ imgSrc, imgAlt, text, link }) => {
  return (
    <Link href={link} underline="none" className="tw-cursor-pointer tw-gap-1 tw-py-2">
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
              fontSize: "clamp(1rem, 2.5vw, 2.25rem)",
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
    </Link>
  );
};
