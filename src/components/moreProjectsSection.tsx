import { CardCarousel } from "@/components/carousel";
import { CardProps } from "@/dtypes";
import { ArrowForward } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useState } from "react";

interface MoreProjectsCardProps extends CardProps {
  imageWidth: string;
  imageHeight: string;
}

const cards: CardProps[] = [
  {
    title: "Sanitarium",
    imageSource: "/design/logos/sanitarium.svg",
    imageAlt: "Sanitarium",
    // link: "/design/sanitarium",
    text: [
      {
        dotpoint: true,
        text: "Successfully re-designed and migrated to a headless CMS (Contentstack), enabling faster content delivery, improved performance, and easier content management across all brands."
      },
      { dotpoint: true, text: "Leveraged existing design system components and created variants to enhance flexibility and scalability." },
      {
        dotpoint: true,
        text: "Conducted comprehensive accessibility audits tailored to the unique requirements of each brand, ensuring compliance with industry standards and improving user experience for all customers."
      }
    ]
  },
  {
    title: "Scenic",
    imageSource: "/design/logos/scenic.svg",
    imageAlt: "Scenic",
    // link: "/design/scenic",
    text: [
      {
        dotpoint: false,
        text: "Redesigned the eDoc platform, transforming it from an extensive, hard-to-read document into a visually appealing design."
      },
      {
        dotpoint: true,
        text: "Collaborated across multiple brands and diverse use cases to create a versatile solution. Conducted workshops to identify gaps and gather insights."
      },
      {
        dotpoint: false,
        text: "Uplifted the user experience on the booking portal:"
      },
      {
        dotpoint: true,
        text: "Updated the user flow to require payment at the time of booking, eliminating backend processes that allowed unpaid reservations. Ensured clarity with updated terminology and messaging."
      }
    ]
  },
  {
    title: "Intrepid",
    imageSource: "/design/logos/intrepid.svg",
    imageAlt: "Intrepid",
    // link: "/design/intrepid",
    text: [
      {
        dotpoint: true,
        text: "Led the initiative to establish comprehensive UX guidelines, ensuring a cohesive and consistent user experience across the website. This initiative maintained uniformity despite contributions from multiple team members."
      },
      {
        dotpoint: true,
        text: "Effectively integrated both existing and new components into the headless CMS, optimising performance and scalability."
      },
      {
        dotpoint: true,
        text: "Conducted extensive UX testing that resulted in significant improvements to the customer journey, enhancing overall user satisfaction and engagement."
      }
    ]
  },
  {
    title: "Surgical Partners",
    imageSource: "/design/logos/surgical_partners.svg",
    imageAlt: "Surgical Partners",
    // link: "/design/surgical-partners",
    text: [
      {
        dotpoint: true,
        text: "Transformed a complex backend system into a user-friendly interface by simplifying its structure, making it more intuitive and accessible."
      },
      {
        dotpoint: true,
        text: "Enhanced the overall user experience, resulting in more efficient task completion and better utilisation of system capabilities."
      },
      {
        dotpoint: true,
        text: "Utilised tables and other visual elements to organise and present large volumes of data, ensuring ease of reading and navigation."
      }
    ]
  }
];

export const MoreProjectsSection = () => {
  return (
    <Box className="tw-px-12 tw-py-8 tw-space-y-16">
      <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-space-y-6">
        <p className="tw-text-nearblack tw-font-medium tw-text-4.5xl">More Projects</p>
        <p className="tw-text-nearblack tw-text-xl tw-w-[638px] tw-text-center">
          Some of my work is confidential. I would love the opportunity to share this with you in conversation.
        </p>
      </Box>
      <CardCarousel cards={cards} CarouselItemComponent={CarouselItem} cardBackgroundOpacity={0.5} />
    </Box>
  );
};

const CarouselItem = ({ card, backgroundOpacity = 1 }: CardProps) => {
  const theme = useTheme();
  const [showFront, setShowFront] = useState<boolean>(true);

  const handleCardClick = () => {
    setShowFront(!showFront);
  };

  const CardFront = () => {
    return (
      <Box
        className={`tw-h-[601px] tw-flex tw-flex-col tw-justify-center tw-bg-lavender tw-px-8 tw-py-16 tw-space-y-12 tw-border-r-6`}
        sx={{ backgroundColor: alpha(theme.palette.lavender.main, backgroundOpacity) }}
      >
        <Box height={501}>
          <CardMedia component="img" height={264} width={140} image={card.imageSource} alt={card.imageAlt} />
        </Box>
        <CardContent className="tw-flex tw-flex-col tw-items-center tw-space-y-6">
          <p className="tw-flex tw-text-center tw-font-medium tw-text-4.5xl tw-text-nearblack">{card.title}</p>
          <Box className="tw-px-6 tw-py-2 tw-space-y-2">
            <Box className="tw-flex tw-items-center tw-text-xl tw-leading-6 tw-space-x-1">
              <p>Read More</p>
              <ArrowForward fontSize="small" />
            </Box>
          </Box>
        </CardContent>
      </Box>
    );
  };

  const CardBack = () => {
    return (
      <Box
        className={`tw-bg-lavender tw-px-8 tw-py-16 tw-space-y-16 tw-border-r-6`}
        sx={{ backgroundColor: alpha(theme.palette.white.main, backgroundOpacity) }}
      >
        <CardContent className="tw-flex tw-flex-col">
          <Box className="tw-space-y-4">
            {card.text.map((item, index) => (
              <Box key={index} display="flex" alignItems="start">
                {item.dotpoint && <ArrowForward fontSize="small" />}
                <Box ml={item.dotpoint ? 1 : 0} className="tw-text-base tw-leading-[18px]">
                  {item.text}
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Box>
    );
  };

  const flipContainerStyle = {
    perspective: "1000px"
  };

  const flipperStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: showFront ? "rotateY(0deg)" : "rotateY(180deg)"
  };

  const frontCardStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden" // For Safari
  };

  const backCardStyle = {
    ...frontCardStyle,
    transform: "rotateY(180deg)"
  };

  return (
    <div onClick={handleCardClick}>
      <Card className="tw-w-[565px] tw-h-[601px] tw-rounded-md">
        <div style={flipContainerStyle}>
          <div style={flipperStyle}>
            <CardActionArea disableRipple href={card.link} style={frontCardStyle}>
              <CardFront />
            </CardActionArea>

            <CardActionArea disableRipple href={card.link} style={backCardStyle}>
              <CardBack />
            </CardActionArea>
          </div>
        </div>
      </Card>
    </div>
  );
};
