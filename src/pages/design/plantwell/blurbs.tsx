import { GenericHeroContent } from "@/components/design/Hero";
import { Section1TextContent } from "@/components/design/Section1";
import { Section2TextContent } from "@/components/design/Section2";
import { Section3Content } from "@/components/design/Section3";
import { Section4Content } from "@/components/design/Section4";

export const HeroBlurb = () => {
  const content = {
    mainText:
      "Plantwell is a new brand under the Sanitarium umbrella. As part of a broader replatforming effort, the website and accompanying design system were built from the ground up, with a focus on flexibility, performance, and long-term scalability. A transition to a headless CMS was key to supporting modern content delivery, improved performance, and more efficient content management.",
    listHeading: "Key contributions:",
    bullets: [
      "Delivered end-to-end UX and UI design for a brand-new digital presence",
      "Facilitated design alignment",
      "Built a reusable, scalable design system to support future Sanitarium brands"
    ],
    linkText: "See the live site",
    linkUrl: "https://plantwellliving.com/", // TODO redirects to Sanitarium homepage
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
    "The project needed to establish a cohesive and accessible user experience - not just for Plantwell, but as a template for future Sanitarium brand rollouts. Consistency in structure, usability, and tone was critical to ensure reusability and cross-brand alignment.",
    "Another key challenge was designing a comprehensive design system from scratch. It had to be flexible enough to accommodate evolving brand requirements, while maintaining performance and visual consistency across platforms."
  ];

  return <Section1TextContent paragraphs={paragraphs} />;
};

export const Section2Blurb = () => {
  const content = [
    {
      title: "Audit & Discovery",
      subPoints: ["Reviewed existing Sanitarium brand sites to identify common patterns and align on functionality"]
    },
    {
      title: "Information Architecture & Navigation",
      subPoints: ["Defined site structure through sitemaps and user flows"]
    },
    {
      title: "Design System Creation",
      subPoints: [
        "Built a scalable design system from the ground up, starting with generic components and introducing brand-specific variants",
        "Applied Plantwell's new visual identity while ensuring components remained flexible for future brand adaptation"
      ]
    },
    {
      title: "High-Fidelity UI & Developer Collaboration",
      subPoints: [
        "Delivered high-fidelity mockups and design prototypes",
        "Partnered closely with developers to implement the system in Contentstack",
        "Resolved platform constraints through close iteration and technical collaboration"
      ]
    }
  ];

  return <Section2TextContent content={content} />;
};

export const Section3Blurb = () => {
  const content = [
    {
      title: "Robust design system foundation",
      body: "A reusable component library and flexible design system now supports scalable design and development across the Sanitarium brand ecosystem."
    },
    {
      title: "Scalable, accessible website",
      body: "Delivered a responsive, accessible web experience that effectively communicates the Plantwell brand, while serving as a model for future digital rollouts."
    },
    {
      title: "Cross-brand consistency",
      body: "Established consistent UX patterns, tone, and structure to ensure future Sanitarium brands can launch faster without reinventing core UI or experience decisions."
    }
  ];

  return <Section3Content content={content} />;
};

export const Section4Blurb = () => {
  const content = [
    {
      title: "Why it worked well",
      body: "The project successfully established a scalable and consistent digital foundation for a new Sanitarium brand. By designing a flexible component library from scratch, the team was able to support both Plantwell's unique identity and future brand rollouts. The clean site structure, accessible design, and modular approach helped streamline development and maintain brand integrity across devices."
    },
    {
      title: "What I'd do differently",
      body: "Given more time or resources, I would have:",
      keypoints: [
        "Conducted usability testing with real users to validate assumptions and fine-tune components for accessibility and engagement",
        "Explored shared governance models for cross-discipline collaboration to ensure long-term maintainability of the design system"
      ]
    }
  ];
  return <Section4Content content={content} />;
};
