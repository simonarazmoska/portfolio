import { CardCarousel } from "@/components/carousel";
import { CardProps } from "@/dtypes";
import { ArrowForward } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

const cards: CardProps[] = [
  {
    title: "Plantwell",
    text: "Website design and re-platforming.",
    imageSource: "/design/plantwell/plantwell_hero.png",
    imageAlt: "Plantwell",
    link: "/design/plantwell"
  },
  {
    title: "ParkVolt",
    text: "Mobile app design & branding.",
    imageSource: "/design/parkvolt/parkvolt_hero.png",
    imageAlt: "ParkVolt",
    link: "/design/parkvolt"
  },
  {
    title: "Dr. Wallet",
    text: "Responsive web design.",
    imageSource: "/design/dr_wallet/dr_wallet_hero.png",
    imageAlt: "Dr. Wallet",
    link: "/design/drwallet"
  },
  {
    title: "Vin Diemen",
    text: "Web design & rebrand.",
    imageSource: "/design/vin_diemen/vin_diemen_hero.png",
    imageAlt: "Vin Diemen",
    link: "/design/vin-diemen"
  },
  {
    title: "Book Series",
    text: "Branding, typographgy & layout.",
    imageSource: "/design/book_series/book_series_1.png",
    imageAlt: "Book Series",
    link: "/design/book-series"
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
    <Box className="tw-px-12 tw-py-32 tw-space-y-16 tw-pt-24 tw-background-color: tw-bg-black">
      <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-space-y-6">
        <p className={`tw-text-oldyellow tw-font-bold tw-text-4.5xl`}>Design Projects</p>
        <p className={`tw-text-white tw-text-xl tw-w-[838px] tw-text-center`}>
          The following projects showcase work from my time at Mudbath and Arcade Dev House. Each project is uniquely crafted to deliver
          seamless, user-friendly experiences.
        </p>
      </Box>
      <Box>
        <CardCarousel cards={cards} CarouselItemComponent={CarouselItem} cardBackgroundOpacity={cardBackgroundOpacity} cardZoom={true} />
      </Box>
    </Box>
  );
};

const CarouselItem = ({ card, backgroundOpacity = 1 }: CardProps) => {
  const theme = useTheme();

  return (
    <Card className="tw-w-[565px]">
      <CardActionArea disableRipple href={card.link}>
        <Box
          className={`tw-h-[650px] tw-bg-lavender tw-px-8 tw-py-16 tw-space-y-8 tw-border-r-6`}
          sx={{ backgroundColor: alpha(theme.palette.white.main, backgroundOpacity) }}
        >
          <CardMedia component="img" height={319} image={card.imageSource} alt={card.imageAlt} />
          <CardContent className="tw-flex tw-flex-col tw-items-center tw-space-y-8 tw-max-h-[90px]">
            <p className="tw-font-medium tw-text-4xl tw-text-nearblack">{card.title}</p>
            <p className="tw-text-s20lh22 tw-text-nearblack">{card.text}</p>
            <Box className="tw-flex tw-items-center tw-text-black tw-font-semibold tw-text-xl tw-leading-6 tw-space-x-1">
              <p>View Design</p>
              <ArrowForward fontSize="small" />
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
