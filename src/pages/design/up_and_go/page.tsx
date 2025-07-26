import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";
import { Icon } from "@iconify/react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";

const heroBlurb = (
  <Box className="tw-flex tw-flex-col tw-gap-6 tw-text-primary">
    <Box className="tw-flex tw-flex-col tw-gap-6">
      <Typography variant="body">
        Up&Go is one of Sanitarium’s most recognised brands. As part of a broader digital transformation, the website was redesigned and
        replatformed to a headless CMS - with a focus on maintaining brand identity, improving performance, and ensuring scalability.
      </Typography>
      <Typography variant="body" className="tw-font-bold" component="span">
        Key contributions:
      </Typography>
      <List sx={{ pl: 3, listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item", py: 0 }}>
          <Typography variant="body">End-to-end UX and UI design</Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0 }}>
          <Typography variant="body">Worked cross-functionally with product, developers and internal stakeholders</Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0 }}>
          <Typography variant="body">Extended and adapted the Plantwell design system to suit Up&amp;Go’s needs</Typography>
        </ListItem>
      </List>
    </Box>
    <Link href="https://upandgo.com.au/" underline="none" className="tw-cursor-pointer tw-gap-1 tw-py-2 tw-flex tw-items-center">
      <Typography variant="body" className="tw-text-primary">
        {/* TODO set font to semi-bold, 18 */}
        See the live site
      </Typography>
      <Icon icon="material-symbols:arrow-forward" className="tw-text-primary" />
      {/* TODO thickness of arrow */}
    </Link>
  </Box>
);

const data: PageData = {
  link: "https://upandgo.com.au/",
  background: "tw-bg-blue-sanitarium",
  textColour: "tw-text-white",
  hero: {
    title: "UP&GO",
    subtitle: "Website redesign and re-platforming",
    blurb: heroBlurb,
    imgSrc: "/design/up-and-go/hero.svg",
    imgAlt: "Up & Go Hero",
    titleTextColour: "tw-text-primary",
    subtitleTextColour: "tw-text-primary",
    backgroundColour: "tw-bg-blue-sanitarium"
  },
  overview: {
    columns: [
      { title: "SCOPE", contentArray: ["Website redesign", "CMS replatforming", "Brand integration", "DLS management"] },
      { title: "TIMELINE", contentArray: ["3 month engagement", "2024"] },
      { title: "TOOLS", contentArray: ["Figma", "Contentstack", "Miro"] },
      { title: "TEAM", contentArray: ["UX Designer", "Product Manager", "Lead Engineer", "Sanitarium MarTech Manager", "Up&Go brand team"] }
    ],
    imgSrc: "/design/up-and-go/1.png",
    imgAlt: "Design Hero"
  },
  section1: {
    imgSrc: "/design/up-and-go/1.png",
    imgAlt: "Up&Go Image 1"
  },
  section2: {
    title: "01",
    subHeading: "The Challenge",
    text:
      "The legacy Up&Go website faced challenges with outdated infrastructure, limited scalability, and an inconsistent user experience across devices. With the digital landscape evolving, there was a need for:\n" +
      "• A flexible platform to accommodate future growth.\n" +
      "• Improved responsiveness and accessibility for mobile users.\n" +
      "• A refreshed visual design to better align with Up&Go’s vibrant branding and audience.",
    imgSrc: "/design/up-and-go/2.png",
    imgAlt: "Up&Go Image 2"
  },

  section3: {
    title: "02",
    subHeading: "The Process",
    text: "Conducted an initial audit of the existing website to identify reusable components and areas requiring redevelopment. Redesigned the site architecture through updated sitemaps and user flows to enhance structure and navigation. Collaborated closely with the Sanitarium team to align the design direction with business objectives and brand ethos, supported by regular feedback loops on wireframes and high-fidelity designs. Refined and extended components from the existing Plantwell design system to suit Up&Go’s specific needs, ensuring brand consistency while accommodating unique visual and functional requirements. Partnered with developers to implement the design within Contentstack, navigating platform constraints to deliver a seamless and scalable solution.",
    imgSrc: "/design/up-and-go/3.png",
    imgAlt: "Up&Go Image 3"
  },
  section4: {
    title: "03",
    subHeading: "The Outcome",
    text: "The redesigned Up&Go website achieves enhanced brand alignment, reflecting its energetic and youthful target audience, while delivering a seamless experience across devices. Built on a scalable design system and headless CMS, the platform allows for easier updates and future feature integrations.",
    imgSrc: "/design/up-and-go/4.png",
    imgAlt: "Up&Go Image 4"
  },
  section5: {
    imgSrc: "/design/up-and-go/5.png",
    imgAlt: "Up&Go Image 5"
  },
  section6: {
    imgSrc: "",
    imgAlt: "Up&Go Image 6",
    beforeAfterImages: ["/design/up-and-go/6-before.png", "/design/up-and-go/6-after.png"]
  }
};

export const UpAndGoPage = () => {
  return <TemplatePage data={data} />;
};
