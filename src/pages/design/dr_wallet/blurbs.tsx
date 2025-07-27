import { GenericHeroContent } from "@/components/design/Hero";
import { Section1TextContentWithKeyIssues } from "@/components/design/Section1";
import { Section2TextContent } from "@/components/design/Section2";
import { Section3Content } from "@/components/design/Section3";
import { Section4Content } from "@/components/design/Section4";

export const HeroBlurb = () => {
  const content = {
    mainText:
      "Dr. Wallet is a mobile app designed to empower doctors by enabling real-time income tracking across multiple practices. To support growth and market visibility, a dedicated website was designed from the ground up - showcasing the app's key features, streamlining its value proposition, and reflecting a refreshed brand identity tailored for healthcare professionals.",
    listHeading: "Key contributions:",
    bullets: [
      "Led end-to-end UX and UI design for the marketing website",
      "Facilitated stakeholder alignment sessions to clarify business and user goals",
      "Built a clear site structure and crafted targeted messaging to communicate product value",
      "Established a cohesive brand identity to differentiate Dr. Wallet in a competitive market"
    ],
    linkText: "See the live site",
    linkUrl: "https://doctorwallet.com.au/",
    textColour: "tw-text-primary"
  };

  return (
    <GenericHeroContent
      mainText={content.mainText}
      listHeading={content.listHeading}
      bullets={content.bullets}
      linkText={content.linkText}
      linkUrl={content.linkUrl}
      textColour={content.textColour}
    />
  );
};

export const Section1Blurb = () => {
  const content = {
    mainText:
      "The main challenge was to present the app's complex feature set in a way that felt clear, compelling, and relevant to busy medical professionals. The previous brand presence lacked visual cohesion and struggled to communicate what set Dr. Wallet apart.",
    listHeading: "Key issues included:",
    bullets: [
      "No established brand identity or design language",
      "Overwhelming or unclear messaging around features and benefits",
      "Lack of strategic hierarchy, making it difficult for users to understand value quickly"
    ],
    finalText:
      "The goal was to create a focused, professional web presence that could speak directly to the needs of time-poor doctors, while establishing a recognisable, trustworthy brand in the digital health space."
  };

  return (
    <Section1TextContentWithKeyIssues
      mainText={content.mainText}
      listHeading={content.listHeading}
      bullets={content.bullets}
      finalText={content.finalText}
    />
  );
};

export const Section2Blurb = () => {
  const content = [
    {
      title: "Stakeholder Alignment & Research",
      subPoints: [
        "Ran sessions to clarify business goals, map out features, and understand the target audience",
        "Identified primary user mindset: Time-conscious professionals looking for clarity, reliability, and control over income"
      ]
    },
    {
      title: "Information Architecture & UX Strategy",
      subPoints: [
        "Developed a sitemap and navigation model that prioritised clarity and ease of access",
        "Crafted concise page flows that guide users through value points without cognitive overload"
      ]
    },
    {
      title: "Design & UX Writing",
      subPoints: [
        "Designed the website from the ground up, including all core components",
        "Introduced a clean, professional visual language aligned with healthcare standards",
        "Developed UX copy tailored toward marketing"
      ]
    },
    {
      title: "Collaborative Iteration",
      subPoints: [
        "Worked closely with stakeholders throughout the design phase via regular reviews",
        "Refined visual design and copy based on feedback to ensure alignment with business goals and user expectations"
      ]
    }
  ];

  return <Section2TextContent content={content} />;
};

export const Section3Blurb = () => {
  const content = [
    {
      title: "Clear, confident communication",
      body: "The final website clearly conveys Dr. Wallet's unique value through intuitive structure, concise messaging, and engaging visual storytelling - enabling doctors to quickly understand how the app supports them."
    },
    {
      title: "Stronger brand identity",
      body: "A refreshed brand identity gives Dr. Wallet a cohesive, credible presence in a crowded market. Design elements were carefully chosen to evoke trust, modernity, and professionalism."
    },
    {
      title: "Strategic UX foundation",
      body: "The site's structure is designed to scale with future content while supporting marketing efforts - whether for feature promotion, onboarding, or conversion."
    }
  ];

  return <Section3Content content={content} />;
};

export const Section4Blurb = () => {
  const content = [
    {
      title: "Why it worked well",
      body: "The design successfully translated a complex product into a simple, engaging web experience tailored for busy healthcare professionals. By combining a clean visual system with focused UX writing, the site clearly communicates the app's benefits while reinforcing trust and credibility - two essential elements for the medical audience."
    },
    {
      title: "What I'd do differently",
      body: "Given more time or resources, I would have:",
      keypoints: [
        "Conducted user testing with doctors to validate messaging and flow effectiveness",
        "Explored modular content patterns for dynamic landing pages based on user types or referral sources"
      ]
    }
  ];
  return <Section4Content content={content} />;
};
