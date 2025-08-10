import { TemplatePage } from "@/components/design/TemplatePage";
import { PageData } from "@/dtypes";
import { HeroBlurb, Section1Blurb, Section2Blurb, Section3Blurb, Section4Blurb } from "@/pages/design/parkvolt/blurbs";

const data: PageData = {
  hero: {
    title: "PARKVOLT",
    subtitle: "Mobile app UX design & rebranding",
    blurb: <HeroBlurb />,
    imgSrc: "/design/parkvolt/hero.jpg",
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
    imgSrc: "/design/parkvolt/1.jpg",
    imgAlt: "ParkVolt Overview Image",
    borderColour: "tw-text-textMain"
  },
  section1: {
    title: "THE CHALLENGE",
    subtitle: "/01",
    blurb: <Section1Blurb />,
    imgSrc: "/design/parkvolt/2.jpg",
    imgAlt: "ParkVolt Image 1",
    titleTextColour: "tw-text-textMain",
    subtitleTextColour: "tw-text-textMain"
  },
  section2: {
    title: "THE PROCESS",
    subtitle: "/02",
    blurb: <Section2Blurb />,
    imgSrc: "/design/parkvolt/3.jpg",
    imgAlt: "ParkVolt Image 2",
    titleTextColour: "tw-text-textMain",
    subtitleTextColour: "tw-text-textMain"
  },
  section3: {
    title: "THE OUTCOME",
    subtitle: "/03",
    blurb: <Section3Blurb />,
    imgSrc: "/design/parkvolt/4.jpg",
    imgAlt: "ParkVolt Image 3",
    titleTextColour: "tw-text-textMain",
    subtitleTextColour: "tw-text-textMain"
  },
  section4: {
    title: "THE REFLECTION",
    subtitle: "/04",
    blurb: <Section4Blurb />,
    imgSrc: "/design/parkvolt/5.jpg",
    imgAlt: "ParkVolt Image 4",
    titleTextColour: "tw-text-textMain",
    subtitleTextColour: "tw-text-textMain"
  },
  section5: {
    beforeAfterImages: ["/design/parkvolt/6-before.png", "/design/parkvolt/6-after.png"],
    imgAlt: "Parkvolt Image 5",
    beforeAfterBackground: "/design/parkvolt/6-background.jpg",
    showDevice: false
  }
};

export const ParkVoltPage = () => {
  return <TemplatePage data={data} />;
};
