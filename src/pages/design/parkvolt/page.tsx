import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://medium.com/@simonarazmoska/parkvolt-transforming-an-ev-charging-app-into-a-luxury-experience-8b7d265a19a7",
  background: "tw-bg-gradient-parkvolt",
  textColour: "tw-text-nearblack",
  hero: {
    title: "ParkVolt",
    subheading: "MOBILE APP DESIGN AND BRANDING.",
    imgSrc: "/design/parkvolt/parkvolt_hero.png",
    imgAlt: "ParkVolt Hero",
    textColour: "tw-text-nearblack",
    viewText: "Read more"
  },
  section1: {
    text: "ParkVolt is an EV charging company dedicated to providing convenient and efficient charging solutions for electric vehicle users. They envisioned an app that would enable users to locate and reserve nearby charging stations, navigate to their chosen locations, and efficiently charge their vehicles.",
    textColour: "tw-text-nearblack"
  },
  section2: {
    imgSrc: "/design/parkvolt/parkvolt_1.png",
    imgAlt: "ParkVolt Image 1"
  },
  section3: {
    title: "Problem",
    text: `The project required a comprehensive redesign to shift the brand's image from "eco-friendly" to "luxury." This transformation involved significant UX improvements to make the app more intuitive. Key enhancements included refining the information architecture to emphasise hierarchy importance and adding a dark mode feature for improved accessibility.`,
    imgSrc: "/design/parkvolt/parkvolt_2.png",
    imgAlt: "ParkVolt Image 2",
    textColour: "tw-text-nearblack"
  },
  section4: {
    imgSrc: "/design/parkvolt/parkvolt_3.png",
    imgAlt: "ParkVolt Image 3"
  },
  section5: {
    title: "Process",
    text: "To identify areas for improvement, I conducted thorough audits of the existing app. Additionally, a competitor analysis was performed to determine how ParkVolt could distinguish itself in the market. Collaboration with product owners was essential in refining and enhancing existing features, ensuring the app met both user needs and business objectives.",
    imgSrc: "/design/parkvolt/parkvolt_4.png",
    imgAlt: "ParkVolt Image 4",
    textColour: "tw-text-white"
  },
  section6: {
    imgSrc: "",
    imgAlt: "ParkVolt Image 5",
    beforeAfterImages: ["/design/parkvolt/parkvolt_5_before.png", "/design/parkvolt/parkvolt_5_after.png"]
  },
  section7: {
    title: "Results",
    text: "The result is an intuitive mobile app that empowers users to effortlessly locate and reserve nearby charging stations, navigate to their chosen location, and efficiently charge their vehicles. The rebranding to a luxury feel aligns better with ParkVolt's customer demographic, positioning the company as a premium choice in the EV charging market.",
    imgSrc: "/design/parkvolt/parkvolt_6.png",
    imgAlt: "ParkVolt Image 6",
    textColour: "tw-text-white"
  }
};

export const ParkVoltPage = () => {
  return <TemplatePage data={data} />;
};
