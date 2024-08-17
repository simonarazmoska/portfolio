import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  hero: {
    title: "Dr. Wallet",
    subheading: "RESPONSIVE WEB DESIGN.",
    imgSrc: "/design/dr_wallet/dr_wallet_hero.png",
    imgAlt: "Dr Wallet Hero"
  },
  section1: {
    text: "Dr. Wallet is a mobile app designed to empower doctors by enabling real-time income tracking across multiple practices. The website design serves as a dedicated platform to showcase and market the app, highlighting its seamless integration and powerful functionalities tailored specifically for healthcare professionals."
  },
  section2: {
    imgSrc: "/design/dr_wallet/dr_wallet_1.png",
    imgAlt: "Dr Wallet Image 1"
  },
  section3: {
    title: "Problem",
    text: "The project presented several challenges. First, the app boasts a wide range of features, all of which needed to be prominently highlighted on the website. Additionally, Dr. Wallet lacked a cohesive brand identity, which was needed to establish from scratch. Clear call-to-action elements were essential to guide users effectively.",
    imgSrc: "/design/dr_wallet/dr_wallet_2.png",
    imgAlt: "Dr Wallet Image 2"
  },
  section4: {
    imgSrc: "/design/dr_wallet/dr_wallet_3.png",
    imgAlt: "Dr Wallet Image 3"
  },
  section5: {
    title: "Process",
    text: "The website was built from the ground up, developing all necessary components to ensure a seamless user experience. The design process involved rigorous reviews within our team to refine and perfect each element. Regular discussions with stakeholders were crucial to align the website with their vision and goals.",
    imgSrc: "/design/dr_wallet/dr_wallet_4.png",
    imgAlt: "Dr Wallet Image 4"
  },
  section6: {
    imgSrc: "/design/dr_wallet/dr_wallet_5.png",
    imgAlt: "Dr Wallet Image 5"
  },
  section7: {
    title: "Results",
    text: "The final product is a simple yet engaging website that effectively markets the Dr. Wallet app. It features mobile responsiveness to ensure a smooth experience across all devices. It also includes an established brand identity that resonates with their target audience, providing a strong foundation for future marketing efforts.",
    imgSrc: "/design/dr_wallet/dr_wallet_6.png",
    imgAlt: "Dr Wallet Image 6"
  }
};

export const DrWalletPage = () => {
  return <TemplatePage data={data} />;
};
