import { Box, Typography } from "@mui/material";

const data = {
  title: "Motion",
  subtitle: "Video snippets from fashion editorials and campaigns",
  blurb: (
    <Box>
      <Typography variant="body" className="tw-text-primary" paragraph>
        Fashion in motion - cinematic clips, behind-the-scenes content, and branded films that bring garments and ideas to life. Each piece
        is crafted to move with intention, combining visual rhythm and narrative to tell a compelling brand story.
      </Typography>
    </Box>
  ),
  imgSrc: "/photography/motion/hero.jpg",
  imgAlt: "Motion Hero"
};

export const MotionPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box className="tw-bg-textMain" sx={{ height: { xs: "auto", lg: "1290px" } }}>
        <Box className="tw-flex tw-flex-col tw-px-4 md:tw-px-8 tw-pb-12 md:tw-pb-24 tw-gap-12 md:tw-gap-24">
          {/* Keeps spacing at top */}
          <Box />

          {/* Main Row / Column Layout */}
          <Box className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 lg:tw-gap-48" sx={{ height: { xs: "auto", lg: "100%" } }}>
            {/* Text Section */}
            <Box
              className="tw-flex tw-flex-col tw-justify-between tw-gap-8"
              sx={{
                width: { xs: "100%", lg: "1085px" },
                paddingBottom: { xs: 0, lg: "5rem" }
              }}
            >
              <Box className="tw-flex tw-flex-col tw-gap-4">
                <Typography variant="h1" className="tw-text-secondary" sx={{ fontSize: { xs: "48px", md: "80px" } }}>
                  {data.title}
                </Typography>
                <Typography variant="h2" className="tw-text-primary" sx={{ fontSize: { xs: "24px", md: "32px" } }}>
                  {data.subtitle}
                </Typography>
              </Box>
              {data.blurb}
            </Box>

            {/* Video Section */}
            <Box
              className="tw-flex tw-justify-center tw-items-center"
              sx={{
                width: { xs: "100%", lg: "1155px" },
                maxWidth: "100%"
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/9",
                  maxHeight: { lg: "1056px" },
                  overflow: "hidden"
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/MoCWw4EjyBA?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&loop=1&playlist=MoCWw4EjyBA"
                  title="Motion Hero Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Video Sections - Shared styles for spacing & responsiveness */}
      {[
        { title: "Canberra Outlet Centre", season: "Autumn/Winter 2021", videos: ["Y4huzRIxriE", "igylY39xKzA", "8ynNO10kMi0"] },
        { title: "DOS Emporium", season: "Spring/Summer 2020", videos: ["cyTpKFBzhHY"] },
        { title: "Fashion Week", season: "2021", videos: ["JQQdzLHSujo"] },
        { title: "Stylist Sessions", season: "2021", videos: ["gbeScymnCnw", "MCaUq0sJmGw", "ptkuMzfuSM4"] }
      ].map((section, idx) => (
        <Box key={idx} className="tw-w-full tw-bg-primary tw-p-0">
          <Box className="tw-flex tw-flex-col tw-px-4 md:tw-px-20 tw-py-12 md:tw-py-20 tw-items-center">
            {/* Section Heading */}
            <Box className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-start sm:tw-items-center tw-w-full tw-mb-3 tw-gap-2">
              <Typography variant="h2" className="tw-text-secondary" sx={{ fontSize: { xs: "24px", md: "36px" } }}>
                {section.title}
              </Typography>
              <Typography variant="h2" className="tw-text-secondary" sx={{ fontSize: { xs: "18px", md: "24px" } }}>
                {section.season}
              </Typography>
            </Box>

            {/* Videos */}
            {section.videos.map((id) => (
              <Box key={id} sx={{ width: "100%", aspectRatio: "16/9", marginBottom: "1rem" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
