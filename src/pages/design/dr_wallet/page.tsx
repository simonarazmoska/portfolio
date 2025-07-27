import { TemplatePage } from "@/components/design/TemplatePage";
import { PageData } from "@/dtypes";
import { HeroBlurb, Section1Blurb, Section2Blurb, Section3Blurb, Section4Blurb } from "@/pages/design/dr_wallet/blurbs";

const data: PageData = {
  hero: {
    title: "DR. WALLET",
    subtitle: "Responsive website design",
    blurb: <HeroBlurb />,
    imgSrc: "/design/dr-wallet/hero.svg",
    imgAlt: "Dr Wallet Hero",
    titleTextColour: "tw-text-primary",
    subtitleTextColour: "tw-text-primary",
    backgroundColour: "tw-bg-navy-drWallet"
  },
  overview: {
    columns: [
      { title: "SCOPE", contentArray: ["Website design", "UX writing", "Responsive design"] },
      { title: "TIMELINE", contentArray: ["2 week engagement", "2024"] },
      { title: "TOOLS", contentArray: ["Figma", "Miro"] },
      { title: "TEAM", contentArray: ["UX Designer", "Product Owner", "Lead Engineer", "Surgical Partners Stakeholder"] }
    ],
    imgSrc: "/design/dr-wallet/1.svg",
    imgAlt: "Dr. Wallet Overview Image",
    borderColour: "tw-border-navy-drWallet"
  },
  section1: {
    title: "01",
    subtitle: "The Challenge",
    blurb: <Section1Blurb />,
    imgSrc: "/design/dr-wallet/2.svg",
    imgAlt: "Dr. Wallet Image 1",
    titleTextColour: "tw-text-navy-drWallet",
    subtitleTextColour: "tw-text-navy-drWallet"
  },
  section2: {
    title: "02",
    subtitle: "The Process",
    blurb: <Section2Blurb />,
    imgSrc: "/design/dr-wallet/3.svg",
    imgAlt: "Dr. Wallet Image 2",
    titleTextColour: "tw-text-navy-drWallet",
    subtitleTextColour: "tw-text-navy-drWallet"
  },
  section3: {
    title: "03",
    subtitle: "The Outcome",
    blurb: <Section3Blurb />,
    imgSrc: "/design/dr-wallet/4.svg",
    imgAlt: "Dr. Wallet Image 3",
    titleTextColour: "tw-text-navy-drWallet",
    subtitleTextColour: "tw-text-navy-drWallet"
  },
  section4: {
    title: "04",
    subtitle: "The Reflection",
    blurb: <Section4Blurb />,
    imgSrc: "/design/dr-wallet/5.svg",
    imgAlt: "Dr. Wallet Image 4",
    titleTextColour: "tw-text-navy-drWallet",
    subtitleTextColour: "tw-text-navy-drWallet"
  },
  section5: {
    imgSrc: "/design/dr-wallet/6.svg",
    imgAlt: "Dr. Wallet Image 5"
  }
};

export const DrWalletPage = () => {
  return <TemplatePage data={data} />;
};
