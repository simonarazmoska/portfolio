import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://upandgo.com.au/",
  background: "tw-bg-sanitariumBlue",
  textColour: "tw-text-white",
  hero: {
    title: "UP&GO",
    subHeading: "WEBSITE RE-DESIGN AND RE-PLATFORMING.",
    blurb:
      "Up&Go is one of Sanitarium’s most recognised brands. As part of Sanitarium’s broader replatforming initiative, the goal was to redesign and relaunch the Up&Go website to a headless CMS platform.The project focused on maintaining a strong emphasis on brand identity, scalability and consistency by building upon the newly created design system.",
    imgSrc: "/design/up-and-go/up-and-go_hero.png",
    imgAlt: "Up & Go Hero",
    viewText: "View the live website"
  },
  section1: {
    imgSrc: "/design/up-and-go/up-and-go_1.png",
    imgAlt: "Up&Go Image 1"
  },
  section2: {
    title: "01",
    subHeading: "The Challenge",
    text:
      "The legacy Up&Go website faced challenges with outdated infrastructure, limited scalability, and an inconsistent user experience across devices. With the digital landscape evolving, there was a need for:\n" +
      "• A flexible platform to accommodate future growth.\n" +
      "• Improved responsiveness and accessibility for mobile users.\n" +
      "• A refreshed visual design to better align with Up&Go’s vibrant branding and audience.",
    imgSrc: "/design/up-and-go/up-and-go_2.png",
    imgAlt: "Up&Go Image 2"
  },

  section3: {
    title: "02",
    subHeading: "The Process",
    text: "Conducted an initial audit of the existing website to identify reusable components and areas requiring redevelopment. Redesigned the site architecture through updated sitemaps and user flows to enhance structure and navigation. Collaborated closely with the Sanitarium team to align the design direction with business objectives and brand ethos, supported by regular feedback loops on wireframes and high-fidelity designs. Refined and extended components from the existing Plantwell design system to suit Up&Go’s specific needs, ensuring brand consistency while accommodating unique visual and functional requirements. Partnered with developers to implement the design within Contentstack, navigating platform constraints to deliver a seamless and scalable solution.",
    imgSrc: "/design/up-and-go/up-and-go_3.png",
    imgAlt: "Up&Go Image 3"
  },
  section4: {
    title: "03",
    subHeading: "The Outcome",
    text: "The redesigned Up&Go website achieves enhanced brand alignment, reflecting its energetic and youthful target audience, while delivering a seamless experience across devices. Built on a scalable design system and headless CMS, the platform allows for easier updates and future feature integrations.",
    imgSrc: "/design/up-and-go/up-and-go_4.png",
    imgAlt: "Up&Go Image 4"
  },
  section5: {
    imgSrc: "/design/up-and-go/up-and-go_5.png",
    imgAlt: "Up&Go Image 5"
  },
  section6: {
    imgSrc: "",
    imgAlt: "Up&Go Image 6",
    beforeAfterImages: ["/design/up-and-go/up-and-go_6_before.png", "/design/up-and-go/up-and-go_6_after.png"]
  }
};

export const UpAndGoPage = () => {
  return <TemplatePage data={data} />;
};
