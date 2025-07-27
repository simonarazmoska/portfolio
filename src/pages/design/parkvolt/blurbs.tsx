import { GenericHeroContent } from "@/components/design/Hero";
import { Section1TextContentWithKeyIssues } from "@/components/design/Section1";
import { Section2TextContent } from "@/components/design/Section2";
import { Section3Content } from "@/components/design/Section3";
import { Section4Content } from "@/components/design/Section4";

export const HeroBlurb = () => {
  const content = {
    mainText:
      "ParkVolt is an EV charging company focused on delivering  convenient and efficient charging solutions for electric vehicle users. The app enables users to locate and reserve nearby charging stations, navigate to their chosen locations, and efficiently charge their vehicles.",
    listHeading: "Key contributions:",
    bullets: [
      "Led end-to-end UX and UI design for the mobile app redesign",
      "Facilitated stakeholder workshops to align business and user goals",
      "Conducted UX audits and competitive analysis to inform the new product direction",
      "Delivered a refined, accessible interface aligned with ParkVolt's premium brand identity"
    ],
    linkText: "Read more",
    linkUrl: "", // TODO
    textColour: "tw-text-textMain"
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
      "The existing mobile app no longer aligned with ParkVolt's shift toward a more premium brand position. Originally designed with a functional, eco-focused aesthetic, the app lacked the visual refinement and usability standards expected by its evolving audience.",
    listHeading: "Key issues included:",
    bullets: [
      "Poor information hierarchy that made navigation unintuitive",
      "Outdated branding that didn't reflect ParkVolt's shift toward a luxury experience",
      "Lack of accessibility features like dark mode, impacting user comfort and inclusivity"
    ],
    finalText:
      "The goal was to create a seamless, premium digital experience that catered to on-the-go EV drivers while staying aligned with evolving business and brand objectives."
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
      title: "Discovery & Alignment",
      subPoints: [
        "Facilitated a stakeholder workshop to uncover pain points, align on goals, and define key user journeys based on real-world charging scenarios."
      ]
    },
    {
      title: "User Research",
      subPoints: [
        "Created personas (e.g. Luxury EV Owners) to guide design direction and feature prioritisation like fast reservations, intuitive navigation, and clean, elegant UI patterns."
      ]
    },
    {
      title: "Audit & Competitive Analysis",
      subPoints: [
        "Audited the existing app to identify usability issues, revealing key friction points in navigation and content structure.",
        "Conducted a competitive review of leading EV and mobility apps to identify patterns and white space in the luxury segment."
      ]
    },
    {
      title: "UX & Visual Design",
      subPoints: [
        "Streamlined user flows and refreshed the UI with a minimalist design and premium colour palette to reflect the updated brand direction.",
        "Introduced dark mode and accessibility improvements to support a broader range of user preferences."
      ]
    }
  ];

  return <Section2TextContent content={content} />;
};

export const Section3Blurb = () => {
  const content = [
    {
      title: "Intuitive, elegant experience",
      body: "The redesigned app allows users to effortlessly find, reserve, and navigate to nearby charging stations - all within a clean, modern interface."
    },
    {
      title: "Premium brand alignment",
      body: "Visual and UX updates align with ParkVolt's repositioning as a luxury mobility service, appealing to high-end EV users and elevating the brand above generic charging solutions."
    },
    {
      title: "Improved accessibility",
      body: "Dark mode and improved hierarchy offer a more inclusive experience for users across various contexts, including nighttime and in-vehicle use."
    }
  ];

  return <Section3Content content={content} />;
};

export const Section4Blurb = () => {
  const content = [
    {
      title: "Why it worked well",
      body: "The redesign successfully translated ParkVolt's strategic shift into a premium, user-friendly digital experience. Simplifying the navigation and improving hierarchy resolved existing usability issues, while the refined visuals and dark mode support elevated the brand and user comfort. "
    },
    {
      title: "What I'd do differently",
      body: "Given more time or resources, I would have:",
      keypoints: [
        "Conducted usability testing across different environments (e.g. in-car, in low-light) to further validate comfort and navigation",
        "Implemented personalised home screen modules based on user behaviours (e.g. recent stations, favourite routes)"
      ]
    }
  ];
  return <Section4Content content={content} />;
};
