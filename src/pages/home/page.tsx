import { HeroSection } from "@/pages/home/hero";
import { Section } from "@/pages/home/section";
import { Box } from "@mui/material";

const HomePageContent = {
  design: {
    title: "Design Work",
    content:
      "I'm a UX/UI designer with 4 years of end-to-end product experience across industries like mining, health, EdTech, eCommerce, and travel. I've worked with brands including Sanitarium, Intrepid, Michael Hill, Scenic, and Sandvik. Some of my work is confidential, but I'd love to walk you through it in person.",
    imgSrc: "/home/design-background.svg",
    imgAlt: "Design Portfolio",
    imageTextColor: "text.primary",
    imageUrl: "/design"
  },
  photography: {
    title: "Photography",
    content:
      "Before moving into design, I spent 8 years as a fashion and lifestyle photographer and videographer, leading shoots from concept to post-production. My work spanned editorial, eCommerce, and campaigns for brands like Canberra Outlet Centre, Diakrit, QT Hotels, and Mercedes Benz Fashion Week, as well as in-house roles at Esther & Co.",
    imgSrc: "/home/photography-background.svg",
    imgAlt: "Photography Portfolio",
    imageTextColor: "text.primary",
    imageUrl: "/photography"
  }
};

export const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Section
        title={HomePageContent.design.title}
        content={HomePageContent.design.content}
        imgSrc={HomePageContent.design.imgSrc}
        imgAlt={HomePageContent.design.imgAlt}
        imageTextColor={HomePageContent.design.imageTextColor}
        imageUrl={HomePageContent.design.imageUrl}
      />
      <Section
        title={HomePageContent.photography.title}
        content={HomePageContent.photography.content}
        imgSrc={HomePageContent.photography.imgSrc}
        imgAlt={HomePageContent.photography.imgAlt}
        imageTextColor={HomePageContent.photography.imageTextColor}
        imageUrl={HomePageContent.photography.imageUrl}
      />
    </Box>
  );
};
