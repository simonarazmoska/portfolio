import { CardProps } from "@/dtypes";
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export const CardCarousel = ({
  cards,
  CarouselItemComponent,
  cardBackgroundOpacity,
  cardZoom = true
}: {
  cards: CardProps[];
  CarouselItemComponent: React.ComponentType<{ card: CardProps; backgroundOpacity: number }>;
  cardBackgroundOpacity: number;
  cardZoom: boolean;
}) => {
  const cardPadding = 32; // pixels
  const [startIndex, setStartIndex] = useState<number>(0);
  const cardsToShow = 2.5;
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
              transform: hoveredCard === index && cardZoom ? "scale(1.05)" : "scale(1)",
              zIndex: hoveredCard === index ? 1 : 0 // Bring hovered card to front
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CarouselItemComponent card={card} backgroundOpacity={cardBackgroundOpacity} />
          </div>
        ))}
      </div>
      <IconButton
        disableRipple
        style={{
          height: 55,
          width: 47,
          backgroundColor: "#B9C3E7",
          borderRadius: 100,
          position: "absolute",
          top: "50%",
          transform: "translateX(0%) translateY(-50%)",
          left: 0
        }}
        onClick={handlePrev}
        disabled={startIndex === 0}
        sx={{
          color: "#231F21",
          "&.Mui-disabled": {
            color: "#231F21",
            opacity: "0.5"
          }
        }}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <IconButton
        disableRipple
        style={{
          height: 55,
          width: 47,
          backgroundColor: "#B9C3E7",
          borderRadius: 100,
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateX(-15%) translateY(-50%)"
        }}
        onClick={handleNext}
        disabled={startIndex >= cards.length - cardsToShow}
        sx={{
          color: "#231F21",
          "&.Mui-disabled": {
            color: "#231F21",
            opacity: "0.5"
          }
        }}
      >
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
