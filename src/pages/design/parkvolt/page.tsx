import { TemplatePage } from "@/components/design/TemplatePage";
import { PageData } from "@/dtypes";
import { HeroBlurb, Section1Blurb, Section2Blurb, Section3Blurb, Section4Blurb } from "@/pages/design/parkvolt/blurbs";

const data: PageData = {
  hero: {
    title: "PARKVOLT",
    subtitle: "Mobile app UX design & rebranding",
    blurb: <HeroBlurb />,
    imgSrc: "/design/parkvolt/hero.svg",
    imgAlt: "ParkVolt Hero",
    titleTextColour: "tw-text-textMain",
    subtitleTextColour: "tw-text-textMain",
    backgroundColour: "tw-bg-yellow-parkvolt"
  },
  overview: {
    columns: [
      { title: "SCOPE", contentArray: ["Mobile app rebrand", "Complete UX audit", "Usability testing"] },
      { title: "TIMELINE", contentArray: ["2 month engagement", "2023"] },
      { title: "TOOLS", contentArray: ["Figma", "Adobe Photoshop", "Miro", "Dovetail"] },
      { title: "TEAM", contentArray: ["UX Designer", "Product Manager", "Lead Engineer", "ParkVolt CEO"] }
    ],
    imgSrc: "/design/parkvolt/1.svg",
    imgAlt: "ParkVolt Overview Image",
    borderColour: "tw-border-yellow-parkvolt"
  },
  section1: {
    title: "01",
    subtitle: "The Challenge",
    blurb: <Section1Blurb />,
    imgSrc: "/design/parkvolt/2.svg",
    imgAlt: "ParkVolt Image 1",
    titleTextColour: "tw-text-yellow-parkvolt",
    subtitleTextColour: "tw-text-yellow-parkvolt"
  },
  section2: {
    title: "02",
    subtitle: "The Process",
    blurb: <Section2Blurb />,
    imgSrc: "/design/parkvolt/3.svg",
    imgAlt: "ParkVolt Image 2",
    titleTextColour: "tw-text-yellow-parkvolt",
    subtitleTextColour: "tw-text-yellow-parkvolt"
  },
  section3: {
    title: "03",
    subtitle: "The Outcome",
    blurb: <Section3Blurb />,
    imgSrc: "/design/parkvolt/4.svg",
    imgAlt: "ParkVolt Image 3",
    titleTextColour: "tw-text-yellow-parkvolt",
    subtitleTextColour: "tw-text-yellow-parkvolt"
  },
  section4: {
    title: "04",
    subtitle: "The Reflection",
    blurb: <Section4Blurb />,
    imgSrc: "/design/parkvolt/5.svg",
    imgAlt: "ParkVolt Image 4",
    titleTextColour: "tw-text-yellow-parkvolt",
    subtitleTextColour: "tw-text-yellow-parkvolt"
  },
  section5: {
    beforeAfterImages: ["/design/parkvolt/6-before.svg", "/design/parkvolt/6-after.svg"],
    imgAlt: "Parkvolt Image 5",
    beforeAfterBackground: "/design/parkvolt/6-background.svg"
  }
};

export const ParkVoltPage = () => {
  return <TemplatePage data={data} />;
};
