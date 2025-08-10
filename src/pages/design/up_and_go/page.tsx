import { TemplatePage } from "@/components/design/TemplatePage";
import { PageData } from "@/dtypes";
import { HeroBlurb, Section1Blurb, Section2Blurb, Section3Blurb, Section4Blurb } from "@/pages/design/up_and_go/blurbs";

const data: PageData = {
  hero: {
    title: "UP&GO",
    subtitle: "Website Redesign & Replatforming",
    blurb: <HeroBlurb />,
    imgSrc: "/design/up-and-go/hero.jpg",
    imgAlt: "Up & Go Hero",
    titleTextColour: "tw-text-primary",
    subtitleTextColour: "tw-text-primary",
    backgroundColour: "tw-bg-blue-sanitarium"
  },
  overview: {
    columns: [
      { title: "SCOPE", contentArray: ["Website redesign", "CMS replatforming", "Brand integration", "DLS management"] },
      { title: "TIMELINE", contentArray: ["3 month engagement", "2024"] },
      { title: "TOOLS", contentArray: ["Figma", "Contentstack", "Miro"] },
      { title: "TEAM", contentArray: ["UX Designer", "Product Manager", "Lead Engineer", "Sanitarium MarTech Manager", "Up&Go brand team"] }
    ],
    imgSrc: "/design/up-and-go/1.jpg",
    imgAlt: "Up & Go Overview Image",
    borderColour: "tw-border-blue-sanitarium"
  },
  section1: {
    title: "THE CHALLENGE",
    subtitle: "/01",
    blurb: <Section1Blurb />,
    imgSrc: "/design/up-and-go/2.jpg",
    imgAlt: "Up & Go Image 1",
    titleTextColour: "tw-text-blue-sanitarium",
    subtitleTextColour: "tw-text-blue-sanitarium"
  },
  section2: {
    title: "THE PROCESS",
    subtitle: "/02",
    blurb: <Section2Blurb />,
    imgSrc: "/design/up-and-go/3.jpg",
    imgAlt: "Up & Go Image 2",
    titleTextColour: "tw-text-blue-sanitarium",
    subtitleTextColour: "tw-text-blue-sanitarium"
  },
  section3: {
    title: "THE OUTCOME",
    subtitle: "/03",
    blurb: <Section3Blurb />,
    imgSrc: "/design/up-and-go/4.jpg",
    imgAlt: "Up & Go Image 3",
    titleTextColour: "tw-text-blue-sanitarium",
    subtitleTextColour: "tw-text-blue-sanitarium"
  },
  section4: {
    title: "THE REFLECTION",
    subtitle: "/04",
    blurb: <Section4Blurb />,
    imgSrc: "/design/up-and-go/5.jpg",
    imgAlt: "Up & Go Image 4",
    titleTextColour: "tw-text-blue-sanitarium",
    subtitleTextColour: "tw-text-blue-sanitarium"
  },
  section5: {
    beforeAfterImages: ["/design/up-and-go/6-before.png", "/design/up-and-go/6-after.png"],
    imgAlt: "Up & Go Image 5",
    beforeAfterBackground: "/design/up-and-go/6-background.jpg"
  }
};

export const UpAndGoPage = () => {
  return <TemplatePage data={data} />;
};
