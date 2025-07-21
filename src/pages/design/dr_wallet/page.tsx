import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://doctorwallet.com.au/",
  background: "tw-bg-drWalletNavy",
  textColour: "tw-text-textMain",
  hero: {
    title: "Dr. Wallet",
    subHeading: "RESPONSIVE WEB DESIGN.",
    blurb:
      "Dr. Wallet is a mobile app designed to empower doctors by enabling real-time income tracking across multiple practices. The website design serves as a dedicated platform to showcase and market the app, highlighting its seamless integration and powerful functionalities tailored specifically for healthcare professionals.",
    imgSrc: "/design/dr_wallet/dr_wallet_hero.png",
    imgAlt: "Dr Wallet Hero"
  },
  section1: {
    imgSrc: "/design/dr_wallet/dr_wallet_1.png",
    imgAlt: "Dr Wallet Image 1"
  },
  section2: {
    title: "01",
    subHeading: "The Challenge",
    text: "The primary challenge was to present the mobile app’s extensive feature set clearly and concisely, with a thoughtful hierarchy that effectively guided users to the app’s key value points. Additionally, Dr. Wallet lacked a cohesive brand identity, making it difficult to differentiate itself in a competitive market and engage meaningfully with its target audience.",
    imgSrc: "/design/dr_wallet/dr_wallet_2.png",
    imgAlt: "Dr Wallet Image 2"
  },
  section3: {
    title: "02",
    subHeading: "The Process",
    text: "Conducted initial stakeholder alignment sessions to identify key features and ensure the website aligned with their vision and business goals. Developed a comprehensive sitemap to establish clear site structure and navigation. Built the website from the ground up, creating all essential components to deliver a seamless and intuitive user experience. Crafted targeted UX writing tailored for a marketing-focused site, ensuring messaging was clear, engaging, and aligned with brand voice. Maintained ongoing collaboration through regular review and feedback sessions with stakeholders to refine and enhance the product throughout development.",

    imgSrc: "/design/dr_wallet/dr_wallet_3.png",
    imgAlt: "Dr Wallet Image 3"
  },
  section4: {
    title: "03",
    subHeading: "The Outcome",
    text: "A strategic design focused on creating a clear, intuitive information architecture that prioritised key features and value propositions, guiding users seamlessly through the site. The brand identity was refreshed to establish a unique, cohesive presence that resonates within the market. Visual hierarchy, concise messaging, and engaging design elements were used to highlight the app’s strengths, resulting in improved user understanding and stronger brand recognition.",
    imgSrc: "/design/dr_wallet/dr_wallet_4.png",
    imgAlt: "Dr Wallet Image 4"
  },
  section5: {
    imgSrc: "/design/dr_wallet/dr_wallet_5.png",
    imgAlt: "Dr Wallet Image 5"
  },
  section6: {
    imgSrc: "/design/dr_wallet/dr_wallet_6.png",
    imgAlt: "Dr Wallet Image 6"
  }
};

export const DrWalletPage = () => {
  return <TemplatePage data={data} />;
};
