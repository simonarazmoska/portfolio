import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://upandgo.com.au/",
  background: "tw-bg-saniblue",
  textColour: "tw-text-white",
  hero: {
    title: "Up&Go",
    subheading: "WEBSITE RE-DESIGN AND RE-PLATFORMING.",
    imgSrc: "/design/up&go/up-and-go_hero.png",
    imgAlt: "Up & Go Hero",
    viewText: "View live website"
  },
  section1: {
    text: "Up&Go is one of Sanitarium’s most recognised brands. As part of Sanitarium’s broader re-platforming initiative, the goal was to redesign and relaunch the Up&Go website on a headless CMS platform. The project focused on maintaining a strong emphasis on brand identity, scalability, and delivering an exceptional user experience."
  },
  section2: {
    imgSrc: "/design/up&go/up-and-go_1.png",
    imgAlt: "Up&Go Image 1"
  },
  section3: {
    title: "Problem",
    text:
      "The legacy Up&Go website faced challenges with outdated infrastructure, limited scalability, and an inconsistent user experience across devices. With the digital landscape evolving, there was a need for:\n" +
      "• A more flexible platform to accommodate future growth and updates.\n" +
      "• Improved responsiveness and accessibility for mobile users.\n" +
      "• A refreshed visual design to better align with Up&Go’s vibrant branding and audience.",
    imgSrc: "/design/up&go/up-and-go_2.png",
    imgAlt: "Up&Go Image 2"
  },
  section4: {
    imgSrc: "/design/up&go/up-and-go_3.png",
    imgAlt: "Up&Go Image 3"
  },
  section5: {
    title: "Process",
    text: "The project began with close collaboration with the Sanitarium team to deeply understand their goals and brand ethos, ensuring the design stayed true to Up&Go’s identity while meeting modern usability standards. Leveraging the design system established for Plantwell, components were refined and expanded to align with Up&Go’s unique requirements, providing consistency while accommodating brand-specific customisations. Throughout the process, iterative design and development, coupled with close collaboration with developers, ensured a seamless implementation where attention to detail in spacing, typography, and colour created a functional and visually engaging outcome.",
    imgSrc: "/design/up&go/up-and-go_4.png",
    imgAlt: "Up&Go Image 4"
  },
  section6: {
    imgSrc: "",
    imgAlt: "Up&Go Image 6",
    beforeAfterImages: ["/design/up&go/up-and-go_5_before.png", "/design/up&go/up-and-go_5_after.png"]
  },
  section7: {
    title: "Results",
    text: "The redesigned Up&Go website achieves enhanced brand alignment, reflecting its energetic and youthful identity while delivering a seamless experience across devices. Built on a scalable design system and headless CMS, the platform allows for easier updates and future feature integrations.",
    imgSrc: "/design/up&go/up-and-go_6.png",
    imgAlt: "Up&Go Image 6"
  }
};

export const UpAndGoPage = () => {
  return <TemplatePage data={data} />;
};
