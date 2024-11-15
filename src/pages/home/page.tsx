import { DesignProjectsSection } from "@/components/designProjectsSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MoreProjectsSection } from "@/components/moreProjectsSection";
import { TextSection } from "@/components/textSection";
import { Typer } from "@/components/typer";
import { Alert, Box, Link } from "@mui/material";

const ABOUT_ME_TEXT_GROUPS = [
  "Product Designer.",
  "Figma guru.",
  "Learning web development.",
  "Sydney-based.",
  "Mobile & web apps are my jam."
];

export const HomePage = () => {
  return (
    <Box className="tw-bg-lavender">
      <Alert
        icon={false}
        sx={{
          backgroundColor: "#231F21",
          color: "#ffffff",
          fontWeight: "regular",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        New website ETA early 2025 — Learning to code along the way!
      </Alert>

      <Header />
      <Box className="tw-max-h-[780px] tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-8 tw-py-16">
        {/* Text Box */}
        <Box className="tw-max-w-[780px] tw-justify-between tw-space-y-14">
          <p className="tw-text-[48px]">
            Hi, I'm Simona
            <Typer type="typewriter" dataText={ABOUT_ME_TEXT_GROUPS} />
          </p>
          <p className="tw-text-[32px]">
            I have a unique visual perspective thanks to my{" "}
            <Link
              color="inherit"
              href="https://www.instagram.com/simonarazmoska_/"
              className="tw-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              photography
            </Link>{" "}
            experience. Currently shaping products at{" "}
            <Link color="inherit" href="https://www.endava.com" className="tw-underline" rel="noopener noreferrer" target="_blank">
              Endava
            </Link>
            .
          </p>
        </Box>

        {/* Image */}
        <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-space-y-3">
          <img src={"/home/sepia_photo.png"} alt="Me" loading="lazy" height={528} width={396} style={{ borderRadius: 100 }} />
          {/* <Box className="tw-px-8 tw-py-2 tw-space-x-2 tw-flex tw-flex-row tw-items-center">
            <p className="tw-text-2xl ">Get in touch</p>
            <ArrowForwardIcon />
          </Box> */}
        </Box>
      </Box>
      <DesignProjectsSection textColour="nearblack" cardBackgroundOpacity={0.5} />
      <div className="tw-px-24">
        <TextSection
          title="Mobile & web apps are my jam."
          text="As a product designer, I thrive on crafting intuitive, visually compelling experiences that users love to interact with, whether they’re on the go or at their desks. My passion lies in understanding user needs and translating them into seamless, engaging interfaces that not only meet but exceed expectations. From initial concept to final product, I’m all about delivering solutions that are as delightful as they are effective."
          src="/design/plantwell/plantwell_mobile.png"
          alt="Plantwell Mobile"
          textColour="tw-text-nearblack"
          maxHeight={458}
          textFirst={true}
        />

        <TextSection
          title=""
          text="In every project, I bring a deep commitment to user-centered design. I believe that the best products are those that feel natural and easy to use, where every tap and swipe has been thoughtfully considered. My approach is hands-on and collaborative, involving stakeholders at every step to ensure that the final product aligns with the vision and goals of the project. Whether it's enhancing usability, refining aesthetics, or innovating with new features, I'm dedicated to creating apps that not only look great but also make a meaningful impact on users' lives."
          src="/design/plantwell/plantwell_3.png"
          alt="Plantwell Mobile"
          textColour="tw-text-nearblack"
          maxHeight={undefined}
          maxWidth={658}
          textFirst={false}
        />
      </div>

      <MoreProjectsSection />

      <Footer />
    </Box>
  );
};
