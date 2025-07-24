import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://plantwellliving.com/",
  background: "tw-bg-green-plantwell",
  hero: {
    title: "Plantwell",
    subHeading: "WEBSITE DESIGN AND RE-PLATFORMING.",
    blurb:
      "Plantwell is a new brand under the Sanitarium umbrella, aimed at offering a fresh and innovative approach to wellness products. I had the privilege of designing the website from the ground up, a project that involved re-platforming to a headless CMS. This transition was crucial to ensure flexibility, improved performance, and better content management capabilities.",
    imgSrc: "/design/plantwell/hero.png",
    imgAlt: "Plantwell Hero"
  },
  section1: {
    imgSrc: "/design/plantwell/1.png",
    imgAlt: "Plantwell Image 1"
  },
  section2: {
    title: "01",
    subHeading: "The Challenge",
    text: "One of the core challenges of this project was ensuring accessibility and a cohesive user experience across platforms and multiple brand identities. As the site would serve as a model for future Sanitarium brands, consistency in structure, tone, and usability was critical. Another major focus was building a comprehensive design system from the ground up. The system needed to be robust, flexible, scalable and adaptable to future brand requirements without compromising consistency or performance.",
    imgSrc: "/design/plantwell/2.png",
    imgAlt: "Plantwell Image 2"
  },
  section3: {
    title: "02",
    subHeading: "The Process",
    text: "Established the digital foundation for a new Sanitarium brand with no existing website by reviewing other brand sites in the portfolio to align with visual expectations and functionality. Considered future brand scalability while designing reusable, flexible components. Ran an initial workshop with stakeholders to uncover key features and requirements for the site. Collaborated closely with the Sanitarium team to align the design direction with business goals and brand ethos, supported by regular feedback sessions on wireframes and high-fidelity designs. Defined the site structure through sitemapping to support intuitive navigation and user flows. Built a design system from scratch, starting with a generic component library. Introduced brand-specific variants and applied the new identity to Plantwell’s components while ensuring flexibility for future brand rollouts. Worked in close partnership with developers to implement the system in Contentstack, overcoming platform limitations to deliver a scalable, content-friendly solution.",
    imgSrc: "/design/plantwell/3.png",
    imgAlt: "Plantwell Image 3"
  },
  section4: {
    title: "03",
    subHeading: "The Outcome",
    text: "The comprehensive design system - including a library of reusable components - has laid a strong foundation for future projects, driving efficiency and visual consistency across platforms. The final outcome is a scalable, accessible website that effectively showcases the Plantwell brand while providing a flexible framework to support future brands within the Sanitarium portfolio.",
    imgSrc: "/design/plantwell/4.png",
    imgAlt: "Plantwell Image 4"
  },
  section5: {
    imgSrc: "/design/plantwell/5.png",
    imgAlt: "Plantwell Image 5"
  },
  section6: {
    imgSrc: "/design/plantwell/6.png",
    imgAlt: "Plantwell Image 6"
  }
};

export const PlantwellPage = () => {
  return <TemplatePage data={data} />;
};
