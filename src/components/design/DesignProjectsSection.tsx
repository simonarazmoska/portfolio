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
          {/* NOTE: width of outer box is card size (300px) * num cards (4) + an extra bit of leeway */}
          <Box className="tw-max-w-[1500px] tw-min-w-[1250px] tw-flex tw-flex-row tw-justify-between tw-items-center">
            {/* Project Card */}
            <ProjectCard imgSrc="/design/up-and-go/card.svg" imgAlt="Up&Go Card" text="Up&Go" link="/design/up-and-go" />
            <ProjectCard imgSrc="/design/plantwell/card.svg" imgAlt="Plantwell Card" text="Plantwell" link="/design/plantwell" />
            <ProjectCard imgSrc="/design/parkvolt/card.svg" imgAlt="ParkVolt Card" text="ParkVolt" link="/design/parkvolt" />
            {/* TODO parkvolt card is wrong */}
            {/* TODO images are wrong in size */}
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
      <Box className="tw-w-[300px] tw-flex tw-flex-col tw-gap-4">
        <img src={imgSrc} alt={imgAlt} height="300px" width="300px" />
        <Box className="tw-flex tw-flex-row tw-justify-between">
          <Typography variant="h2" className="tw-text-textMain tw-flex tw-flex-row tw-gap-1">
            {text}
          </Typography>
          <Box className="tw-text-textMain tw-flex tw-flex-row tw-gap-[10px] tw-px-3 tw-py-2 tw-justify-center tw-items-center">
            <Icon icon="material-symbols:arrow-forward" className="tw-text-textMain" width="2em" height="2em" />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
