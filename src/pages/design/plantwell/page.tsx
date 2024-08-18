import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://plantwellliving.com/",
  background: "tw-bg-gradient-plantwell",
  hero: {
    title: "Plantwell",
    subheading: "WEBSITE DESIGN AND RE-PLATFORMING.",
    imgSrc: "/design/plantwell/plantwell_hero.png",
    imgAlt: "Plantwell Hero"
  },
  section1: {
    text: "Plantwell is a new brand under the Sanitarium umbrella, aimed at offering a fresh and innovative approach to wellness products. I had the privilege of designing the website from the ground up, a project that involved re-platforming to a headless CMS. This transition was crucial to ensure flexibility, improved performance, and better content management capabilities."
  },
  section2: {
    imgSrc: "/design/plantwell/plantwell_1.png",
    imgAlt: "Plantwell Image 1"
  },
  section3: {
    title: "Problem",
    text: "One of the primary challenges of this project was ensuring accessibility. To address this, I conducted thorough accessibility audits to identify and rectify potential issues. Another significant aspect was building a comprehensive design system from scratch. This system was designed with scalability in mind, ensuring it could accommodate future brands and evolving requirements.",
    imgSrc: "/design/plantwell/plantwell_2.png",
    imgAlt: "Plantwell Image 2"
  },
  section4: {
    imgSrc: "/design/plantwell/plantwell_3.png",
    imgAlt: "Plantwell Image 3"
  },
  section5: {
    title: "Process",
    text: "The project was a collaborative effort, involving close work with another designer to build robust and reusable components. Additionally, I worked closely with stakeholders, aligning with their processes and ensuring their requirements were met. Collaboration with the Sanitarium brand department was also vital to ensure that all design elements adhered to brand guidelines and maintained consistency.",
    imgSrc: "/design/plantwell/plantwell_4.png",
    imgAlt: "Plantwell Image 4"
  },
  section6: {
    imgSrc: "/design/plantwell/plantwell_5.png",
    imgAlt: "Plantwell Image 5"
  },
  section7: {
    title: "Results",
    text: "The outcome was a website that is not only on brand but also scalable for future brands under the Sanitarium umbrella. The reusable components and the comprehensive design system we developed have laid a strong foundation for future projects, ensuring efficiency and consistency across all platforms.",
    imgSrc: "/design/plantwell/plantwell_6.png",
    imgAlt: "Plantwell Image 6"
  }
};

export const PlantwellPage = () => {
  return <TemplatePage data={data} />;
};
