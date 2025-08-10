import { TemplatePage } from "@/components/design/TemplatePage";
import { PageData } from "@/dtypes";
import { HeroBlurb, Section1Blurb, Section2Blurb, Section3Blurb, Section4Blurb } from "@/pages/design/plantwell/blurbs";

const data: PageData = {
  hero: {
    title: "PLANTWELL",
    subtitle: "Website design and platforming",
    blurb: <HeroBlurb />,
    imgSrc: "/design/plantwell/hero.jpg",
    imgAlt: "Plantwell Hero",
    titleTextColour: "tw-text-primary",
    subtitleTextColour: "tw-text-primary",
    backgroundColour: "tw-bg-green-plantwell"
  },
  overview: {
    columns: [
      { title: "SCOPE", contentArray: ["Website design", "CMS platforming", "Brand integration", "DLS creation"] },
      { title: "TIMELINE", contentArray: ["3 month engagement", "2024"] },
      { title: "TOOLS", contentArray: ["Figma", "Contentstack", "Miro"] },
      {
        title: "TEAM",
        contentArray: ["UX Designer", "Product Manager", "Lead Engineer", "Sanitarium MarTech Manager", "Plantwell brand team"]
      }
    ],
    imgSrc: "/design/plantwell/1.jpg",
    imgAlt: "Plantwell Overview Image",
    borderColour: "tw-border-green-plantwell"
  },
  section1: {
    title: "THE CHALLENGE",
    subtitle: "/01",
    blurb: <Section1Blurb />,
    imgSrc: "/design/plantwell/2.jpg",
    imgAlt: "Plantwell Image 1",
    titleTextColour: "tw-text-green-plantwell",
    subtitleTextColour: "tw-text-green-plantwell"
  },
  section2: {
    title: "THE PROCESS",
    subtitle: "/02",
    blurb: <Section2Blurb />,
    imgSrc: "/design/plantwell/3.jpg",
    imgAlt: "Plantwell Image 2",
    titleTextColour: "tw-text-green-plantwell",
    subtitleTextColour: "tw-text-green-plantwell"
  },
  section3: {
    title: "THE OUTCOME",
    subtitle: "/03",
    blurb: <Section3Blurb />,
    imgSrc: "/design/plantwell/4.jpg",
    imgAlt: "Plantwell Image 3",
    titleTextColour: "tw-text-green-plantwell",
    subtitleTextColour: "tw-text-green-plantwell"
  },
  section4: {
    title: "THE REFLECTION",
    subtitle: "/04",
    blurb: <Section4Blurb />,
    imgSrc: "/design/plantwell/5.jpg",
    imgAlt: "Plantwell Image 4",
    titleTextColour: "tw-text-green-plantwell",
    subtitleTextColour: "tw-text-green-plantwell"
  },
  section5: {
    imgSrc: "/design/plantwell/6.jpg",
    imgAlt: "Plantwell Image 5"
  }
};

export const PlantwellPage = () => {
  return <TemplatePage data={data} />;
};
