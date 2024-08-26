import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://medium.com/@simonarazmoska/pointing-the-spotlight-on-user-experience-iterations-to-improve-vin-diemens-website-11185b5d2480",
  background: "tw-bg-[#E8E3DF]",
  textColour: "tw-text-nearblack",
  hero: {
    title: "Vin Diemen",
    subheading: "WEB DESIGN & REBRAND.",
    imgSrc: "/design/vin_diemen/vin_diemen_hero.png",
    imgAlt: "Vin Diemen Hero",
    viewText: "Read more"
  },
  section1: {
    text: "Vin Diemen is a prestigious wine-tasting event that showcases the finest wine and food from the Tasmanian region. The website redesign focuses to better reflect the event's upscale nature."
  },
  section2: {
    imgSrc: "/design/vin_diemen/vin_diemen_1.png",
    imgAlt: "Vin Diemen Image 1"
  },
  section3: {
    title: "Problem",
    text: "The existing branding and website experience lacked a sense of luxury, which is essential for an event of this caliber. Additionally, their competitors had websites that were much easier to navigate, highlighting a need for significant improvements in user experience.",
    imgSrc: "/design/vin_diemen/vin_diemen_2.png",
    imgAlt: "Vin Diemen Image 2"
  },
  section4: {
    imgSrc: "/design/vin_diemen/vin_diemen_3.png",
    imgAlt: "Vin Diemen Image 3"
  },
  section5: {
    title: "Process",
    text: "To address these issues, I conducted a thorough competitor analysis to identify best practices and opportunities for differentiation. Prioritizing user experience was key, so extensive user research was undertaken to understand the needs and preferences of Vin Diemen's target audience.",
    imgSrc: "/design/vin_diemen/vin_diemen_4.png",
    imgAlt: "Vin Diemen Image 4"
  },
  section6: {
    imgSrc: "",
    imgAlt: "Vin Diemen Image 5",
    beforeAfterImages: ["/design/vin_diemen/vin_diemen_5_before.png", "/design/vin_diemen/vin_diemen_5_after.png"]
  },
  section7: {
    title: "Results",
    text: "The redesigned website is now intuitive and easy to navigate, providing a seamless user experience. It successfully appeals to the target audience, embodying the luxurious and refined atmosphere of the Vin Diemen wine-tasting event.",
    imgSrc: "/design/vin_diemen/vin_diemen_6.png",
    imgAlt: "Vin Diemen Image 6"
  }
};

export const VinDiemenPage = () => {
  return <TemplatePage data={data} />;
};
