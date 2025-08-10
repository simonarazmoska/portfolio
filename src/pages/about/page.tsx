import { ContentBlock } from "@/components/ContentBlock";
import { AboutPageData } from "@/dtypes";
import { Box, Typography } from "@mui/material";

const secondaryTextColour = "tw-text-secondary";
const primaryTextColour = "tw-text-primary";
const backgroundColour = "tw-bg-textMain";

const data: AboutPageData = {
  hero: {
    title: "About me",
    subtitle: "Product designer with a creative edge",
    blurb: (
      <Box>
        <Typography variant="body" className="tw-text-primary" paragraph>
          I'm a multidisciplinary product designer with a background in graphic design, photography and storytelling - bringing over eight
          years of creative experience into my UX practice.
        </Typography>
        <Typography variant="body" className="tw-text-primary" paragraph>
          Whether designing intuitive digital products or crafting visual campaigns, I combine aesthetics with user-first thinking to create
          purposeful experiences across industries.
        </Typography>
      </Box>
    ),
    imgSrc: "/about/hero.jpg",
    imgAlt: "About-Hero",
    titleTextColour: secondaryTextColour,
    subtitleTextColour: primaryTextColour,
    backgroundColour: backgroundColour
  },
  section1: {
    title: "Product Designer",
    subtitle: "/01",
    blurb: (
      <Box>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I'm a UX and Product Designer with over four years of experience delivering end-to-end digital experiences across sectors
          including EV, EdTech, healthtech, construction, lawtech, marketing, accounting, eCommerce, mining, and travel.
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I've had the opportunity to work with brands such as Sanitarium, Intrepid, Michael Hill, Scenic, Sandvik, and more - designing
          accessible, user-first interfaces and thoughtful, scalable systems that solve real business and user problems.
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          My process is rooted in user research, cross-functional collaboration, and a strong understanding of technical constraints. I'm
          comfortable working across the entire UX/UI lifecycle - from discovery workshops and design sprints to prototyping, developer
          handoff, and ongoing iteration.
        </Typography>
      </Box>
    ),
    imgSrc: "/about/1.jpg",
    imgAlt: "About: Product Designer",
    titleTextColour: secondaryTextColour,
    subtitleTextColour: secondaryTextColour
  },
  section2: {
    title: "Photographer",
    subtitle: "/02",
    blurb: (
      <Box>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          Before moving into Design, I spent eight years as a fashion and lifestyle photographer and videographer, running my own freelance
          business.
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I worked end-to-end on projects - scouting locations, casting models, developing creative concepts, styling shoots, directing
          talent, and handling all post-production work including editing, retouching, and colour grading.
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I produced editorial content, commercial campaigns, and eCommerce imagery, collaborating closely with stylists, marketing teams,
          and clients to bring brand stories to life through compelling visuals. My work includes campaign shoots for Canberra Outlet
          Centre, and projects with clients such as Diakrit, QT Hotel, and Mercedes Benz Fashion Week.
        </Typography>
      </Box>
    ),
    imgSrc: "/about/2.jpg",
    imgAlt: "About: Photographer",
    titleTextColour: secondaryTextColour,
    subtitleTextColour: secondaryTextColour
  },
  section3: {
    title: "More about me",
    subtitle: "03",
    blurb: (
      <Box>
        <Typography variant="title" className="tw-text-textMain">
          Learning
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I love learning and constantly expanding my skills - I'm actively learning to code (not vibe code!) by working on my website and
          other projects, using TypeScript (React), Material UI, and TailwindCSS.
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I'm also exploring ways to integrate AI into my workflow for smarter, more efficient design - from using GitHub Copilot for
          debugging, to leveraging Figma AI for faster wireframing, Anima for generating responsive layouts and refining prototypes, and
          Miro AI for brainstorming and mapping user journeys.
        </Typography>

        <Typography variant="title" className="tw-text-textMain">
          Giving back
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          I mentor design students at UNSW as part of their industry engagement programs - offering feedback on portfolios, guiding career
          pathways, and helping them build confidence in their design practice.
        </Typography>

        <Typography variant="title" className="tw-text-textMain">
          Beyond the screen
        </Typography>
        <Typography variant="body" className="tw-text-textMain" paragraph>
          Outside of work, I'm immersing myself in salsa dancing and learning Spanish - two passions that keep me energised and curious. I
          also love exploring new places and cultures through travel, which continually inspires my creativity.
        </Typography>
      </Box>
    ),
    imgSrc: "/about/3.jpg",
    imgAlt: "About-More",
    titleTextColour: secondaryTextColour,
    subtitleTextColour: secondaryTextColour
  }
};

export const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <ContentBlock
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        blurb={data.hero.blurb}
        imgSrc={data.hero.imgSrc}
        imgAlt={data.hero.imgAlt}
        titleTextColour={data.hero.titleTextColour}
        subtitleTextColour={data.hero.subtitleTextColour}
        backgroundColour={data.hero.backgroundColour}
        loadImageStyle="eager"
      />

      {/* Section 1*/}
      <ContentBlock
        title={data.section1.title}
        subtitle={data.section1.subtitle}
        blurb={data.section1.blurb}
        imgSrc={data.section1.imgSrc}
        imgAlt={data.section1.imgAlt}
        titleTextColour={data.section1.titleTextColour}
        subtitleTextColour={data.section1.subtitleTextColour}
        showTextFirst={true}
        showTitleBeforeSubtitle={false}
      />

      {/* Section 2 */}
      <ContentBlock
        title={data.section2.title}
        subtitle={data.section2.subtitle}
        blurb={data.section2.blurb}
        imgSrc={data.section2.imgSrc}
        imgAlt={data.section2.imgAlt}
        titleTextColour={data.section2.titleTextColour}
        subtitleTextColour={data.section2.subtitleTextColour}
        showTextFirst={false}
        showTitleBeforeSubtitle={false}
      />

      {/* Section 3 */}
      <ContentBlock
        title={data.section3.title}
        subtitle={data.section3.subtitle}
        blurb={data.section3.blurb}
        imgSrc={data.section3.imgSrc}
        imgAlt={data.section3.imgAlt}
        titleTextColour={data.section3.titleTextColour}
        subtitleTextColour={data.section3.subtitleTextColour}
        showTextFirst={true}
        showTitleBeforeSubtitle={false}
      />
    </Box>
  );
};
