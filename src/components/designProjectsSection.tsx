import { CardCarousel } from "@/components/carousel";
import { CardProps } from "@/components/dtypes";
import { ArrowForward } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

const cards: CardProps[] = [
  {
    title: "Up&Go",
    text: "Website re-design and re-platforming.",
    imageSource: "/design/up-and-go/card.png",
    imageAlt: "Up&Go",
    link: "/design/up-and-go"
  },

  {
    title: "Plantwell",
    text: "Website design and re-platforming.",
    imageSource: "/design/plantwell/hero.png",
    imageAlt: "Plantwell",
    link: "/design/plantwell"
  },
  {
    title: "ParkVolt",
    text: "Mobile app design & branding.",
    imageSource: "/design/parkvolt/hero.png",
    imageAlt: "ParkVolt",
    link: "/design/parkvolt"
  },
  {
    title: "Dr. Wallet",
    text: "Responsive web design.",
    imageSource: "/design/dr-wallet/hero.png",
    imageAlt: "Dr. Wallet",
    link: "/design/dr-wallet"
  }
];

export const DesignProjectsSection = ({
  textColour = "white",
  cardBackgroundOpacity = 1
}: {
  textColour?: string;
  cardBackgroundOpacity?: number;
}) => {
  return (
    <Box className="tw-px-12 tw-py-32 tw-space-y-16 tw-pt-24 tw-background-color: tw-bg-white">
      <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-space-y-6">
        <p className={`tw-text-black tw-font-bold tw-text-4xl`}>Design Projects</p>
        <p className={`tw-text-black tw-text-xl tw-w-[838px] tw-text-center`}>
          I bring a unique creative perspective to every project thanks to my eight years of photography experience. Some of my design work
          is confidential. I would love the opportunity to share these with you in conversation.
        </p>
      </Box>
      <Box>
        <CardCarousel cards={cards} CarouselItemComponent={CarouselItem} cardBackgroundOpacity={cardBackgroundOpacity} cardZoom={true} />
      </Box>
    </Box>
  );
};

const CarouselItem = ({ card, backgroundOpacity = 1 }: { card: CardProps; backgroundOpacity?: number }) => {
  const theme = useTheme();

  return (
    <Card className="tw-w-[650px]">
      <CardActionArea disableRipple href={card.link}>
        <Box
          className={`tw-h-[900px] tw-px-8 tw-py-16 tw-space-y-8 tw-border-r-6`}
          sx={{ backgroundColor: alpha(theme.palette.white.main, backgroundOpacity) }}
        >
          <CardMedia component="img" height={319} image={card.imageSource} alt={card.imageAlt} />
          <CardContent className="tw-flex tw-flex-col tw-items-center tw-space-y-8 tw-max-h-[90px]">
            <p className="tw-font-medium tw-text-textMain">{card.title}</p>
            <p className="tw-text-textMain">{card.text}</p>
            <Box className="tw-flex tw-items-center tw-text-textMain tw-font-semibold tw-text-xl tw-leading-6 tw-space-x-1">
              <p>View Design</p>
              <ArrowForward fontSize="small" />
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
