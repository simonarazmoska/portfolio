import { GenericHeroContent } from "@/components/design/Hero";
import { Section1TextContent } from "@/components/design/Section1";
import { Section2TextContent } from "@/components/design/Section2";
import { Section3Content } from "@/components/design/Section3";
import { Section4Content } from "@/components/design/Section4";

export const HeroBlurb = () => {
  const content = {
    mainText:
      "Up&Go is one of Sanitarium's most recognised brands. As part of a broader digital transformation, the website was redesigned and replatformed to a headless CMS - with a focus on maintaining brand identity, improving performance, and ensuring scalability.",
    listHeading: "Key contributions:",
    bullets: [
      "End-to-end UX and UI design",
      "Worked cross-functionally with product, developers and internal stakeholders",
      "Extended and adapted the Plantwell design system to suit Up&Go's needs"
    ],
    linkText: "See the live site",
    linkUrl: "https://upandgo.com.au/",
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
  const paragraphs = [
    "The legacy Up&Go website no longer met the needs of the brand or its users. Built on an outdated tech stack, it lacked the flexibility and scalability required for modern content delivery and future integrations.",
    "The site's mobile responsiveness was poor, and its inconsistent UI created a fragmented experience across devices. Additionally, the visual design felt outdated and failed to connect with Up&Go's youthful, energetic audience.",
    "There was also no clear pathway for future integrations or quick content updates, limiting the marketing team's ability to respond to evolving campaign needs."
  ];

  return <Section1TextContent paragraphs={paragraphs} />;
};

export const Section2Blurb = () => {
  const content = [
    {
      title: "Audit & Discovery",
      subPoints: ["Conducted a UX audit to identify reusable components and pain points"]
    },
    {
      title: "Information Architecture & Navigation",
      subPoints: [
        "Reworked site structure via sitemaps and flows to improve clarity",
        "Simplified navigation to suit mobile-first interactions"
      ]
    },
    {
      title: "Design System Adaptation",
      subPoints: [
        "Extended the Plantwell design system to suit Up&Go's needs - refining existing components, introducing new patterns, and ensuring flexibility across page layouts and content types.",
        "Re-branded and customised reusable components (e.g. buttons, cards, nav, CTAs) with Up&Go's colour palette, bold typography, and brand imagery to maintain consistency."
      ]
    },
    {
      title: "High-Fidelity UI & Developer Handoff",
      subPoints: [
        "Delivered high-fidelity mockups and prototypes",
        "Partnered closely with developers to implement designs in Contentstack",
        "Problem-solved platform limitations through collaborative iteration"
      ]
    }
  ];

  return <Section2TextContent content={content} />;
};

export const Section3Blurb = () => {
  const content = [
    {
      title: "Increased speed to market",
      body: "Streamlined developer onboarding through reusable design tokens and clearly defined components, enabling quicker implementation and handover."
    },
    {
      title: "Improved scalability",
      body: "The new CMS architecture supports rapid content updates and future feature rollouts, reducing reliance on custom development."
    },
    {
      title: "Mobile-first optimisation",
      body: "Delivered a consistent, responsive experience across all devices, improving accessibility and usability site-wide."
    },
    {
      title: "Stronger brand presence",
      body: "The updated visuals and tone now better reflect Up&Go's energetic, youthful identity, increasing brand recognition and engagement."
    }
  ];

  return <Section3Content content={content} />;
};

export const Section4Blurb = () => {
  const content = [
    {
      title: "Why it worked well",
      body: "The redesign resolved major usability and brand alignment issues present in the legacy site. The original version lacked hierarchy, was difficult to navigate on mobile, and didn't reflect the energy of Up&Go's identity. The updated design introduced a bold, structured layout, clearer calls to action, and a consistent mobile-first experience, while remaining aligned with the brand's youthful tone."
    },
    {
      title: "What I'd do differently",
      body: "Given more time or resources, I would have:",
      keypoints: [
        "Conducted quantitative usability testing post-launch to validate design decisions and uncover any friction points.",
        "Built personalised content modules to better serve different personas based on their motivations (e.g. nutrition-focused vs. convenience-driven users)."
      ]
    }
  ];
  return <Section4Content content={content} />;
};
