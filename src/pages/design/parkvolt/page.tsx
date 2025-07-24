import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://medium.com/@simonarazmoska/parkvolt-transforming-an-ev-charging-app-into-a-luxury-experience-8b7d265a19a7",
  background: "tw-bg-yellow-parkvolt",
  textColour: "tw-text-textMain",
  hero: {
    title: "ParkVolt",
    subHeading: "MOBILE APP DESIGN AND BRANDING.",
    blurb:
      "ParkVolt is an EV charging company dedicated to providing convenient and efficient charging solutions for electric vehicle users. They envisioned an app that would enable users to locate and reserve nearby charging stations, navigate to their chosen locations, and efficiently charge their vehicles.",
    imgSrc: "/design/parkvolt/hero.png",
    imgAlt: "ParkVolt Hero",
    textColour: "tw-text-textMain",
    viewText: "Read more"
  },
  section1: {
    imgSrc: "/design/parkvolt/1.png",
    imgAlt: "ParkVolt Image 1"
  },
  section2: {
    title: "01",
    subHeading: "The Challenge",
    text: "The existing mobile app required a redesign to improve accessibility, enhance the overall user experience, and align with an updated brand direction. Key challenges included an unclear information hierarchy, lack of accessibility features like dark mode, and outdated branding that no longer reflected the shift from “eco-friendly” to a more “luxury”-oriented positioning in line with new business goals.",
    imgSrc: "/design/parkvolt/2.png",
    imgAlt: "ParkVolt Image 2",
    textColour: "tw-text-textMain"
  },
  section3: {
    title: "02",
    subHeading: "The Process",
    text: "Began with an initial stakeholder workshop to uncover problem areas, align on business goals, and understand user needs. Conducted competitive and market analysis to position ParkVolt effectively within the luxury mobility space, identifying opportunities for differentiation. Performed a comprehensive audit of the existing mobile app, revealing issues with content hierarchy and navigation that impacted usability. This informed key areas of improvement, including clearer structure and more intuitive user flows. Introduced dark mode to enhance accessibility and updated the overall UI to reflect a more premium, modern aesthetic - shifting the brand from functional to luxury with a clean, refined interface. Collaborated closely with product owners and stakeholders to refine existing features, ensuring enhancements aligned with both user expectations and evolving business objectives.",
    imgSrc: "/design/parkvolt/3.png",
    imgAlt: "ParkVolt Image 3",
    textColour: "tw-text-textMain"
  },
  section4: {
    title: "03",
    subHeading: "The Outcome",
    text: "The result is an intuitive mobile app that empowers users to effortlessly locate and reserve nearby charging stations, navigate to their chosen location, and efficiently charge their vehicles. Rebranding to a “luxury” brand aligns with ParkVolt's customer demographic, positioning the company as a premium choice in the EV charging market.",
    imgSrc: "/design/parkvolt/4.png",
    imgAlt: "ParkVolt Image 4",
    textColour: "tw-text-white"
  },
  section5: {
    imgSrc: "/design/parkvolt/5.png",
    imgAlt: "Up&Go Image 5"
  },
  section6: {
    imgSrc: "",
    imgAlt: "ParkVolt Image 6",
    beforeAfterImages: ["/design/parkvolt/6-before.png", "/design/parkvolt/6-after.png"]
  }
};

export const ParkVoltPage = () => {
  return <TemplatePage data={data} />;
};
