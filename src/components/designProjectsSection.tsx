import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton } from "@mui/material";
import { useState } from "react";

interface CardProps {
  title: string;
  text: string;
  imageSource: string;
  imageAlt: string | undefined;
  link: string;
}

const CarouselItem = ({ title, text, imageSource, imageAlt, link }: CardProps) => {
  return (
    <Card className="tw-w-[565px]">
      <CardActionArea href={link}>
        <Box className="tw-bg-[#EAD8FC] tw-px-8 tw-py-16 tw-space-y-16 tw-border-r-6 tw-h-[601px]">
          <CardMedia component="img" height={319} image={imageSource} alt={imageAlt} />
          <CardContent className="tw-flex tw-flex-col tw-items-center tw-space-y-6 tw-max-h-[90px]">
            <p className="tw-font-medium tw-text-4xl tw-text-headerBackground">{title}</p>
            <p className="tw-text-s20lh22 tw-text-headerBackground">{text}</p>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

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
    imageSource: "/design/book_series/book_series_hero.png",
    imageAlt: "Book Series",
    link: "/design/book-series"
  }
];

const cardPadding = 64; // pixels

const CardCarousel = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const cardsToShow = 2;
  const cardWidth = 100 / cardsToShow - (cardPadding / window.innerWidth) * 100;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - cardsToShow));
  };

  return (
    <div className="tw-relative tw-overflow-hidden" style={{ padding: `0 ${cardPadding}px` }}>
      <div
        className="tw-flex"
        style={{
          transform: `translateX(-${startIndex * (cardWidth + (cardPadding / window.innerWidth) * 100)}%)`,
          transition: "transform 0.3s ease-in-out",
          gap: `${cardPadding}px`
        }}
      >
        {cards.map((card: CardProps, index: number) => (
          <div
            key={index}
            style={{
              flexBasis: `calc(100% / ${cardsToShow} - ${cardPadding}px)`,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
              zIndex: hoveredCard === index ? 1 : 0 // Bring hovered card to front
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CarouselItem title={card.title} text={card.text} imageSource={card.imageSource} imageAlt={card.imageAlt} link={card.link} />
          </div>
        ))}
      </div>
      <IconButton
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 6,
          position: "absolute",
          top: "50%",
          transform: "translateX(0%) translateY(-50%)",
          left: 0
        }}
        onClick={handlePrev}
        disabled={startIndex === 0}
        sx={{
          color: "#151515",
          "&.Mui-disabled": {
            color: "#C5C6C7"
          }
        }}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <IconButton
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#FFFFFF",
          borderRadius: 6,
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateX(-15%) translateY(-50%)"
        }}
        onClick={handleNext}
        disabled={startIndex >= cards.length - cardsToShow}
        sx={{
          color: "#151515",
          "&.Mui-disabled": {
            color: "#C5C6C7"
          }
        }}
      >
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export const DesignProjectsSection = () => {
  return (
    <Box className="tw-px-12 tw-py-8 tw-space-y-16">
      <Box className="tw-flex tw-flex-row tw-justify-center">
        <p className="tw-text-white tw-font-medium tw-text-4.5xl">Design Projects</p>
      </Box>
      <Box>
        <CardCarousel />
      </Box>
    </Box>
  );
};
