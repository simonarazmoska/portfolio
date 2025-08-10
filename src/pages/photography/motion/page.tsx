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
  imgSrc: "/photography/motion/hero.png",
  imgAlt: "Motion Hero"
};

export const MotionPage = () => {
  return (
    <Box>
      {/* Hero Section  */}
      <Box className="tw-h-[1290px] tw-bg-textMain">
        <Box className="tw-h-full tw-flex tw-flex-col tw-px-8 tw-pb-24 tw-gap-24">
          <Box />
          <Box className="tw-h-full tw-flex tw-flex-row tw-justify-start tw-gap-48">
            {/* Text Section */}
            <Box className="tw-h-full tw-w-[1085px] tw-flex tw-flex-col tw-justify-between tw-pb-20">
              <Box className="tw-flex tw-flex-col tw-gap-4">
                <Typography variant="h1" className="tw-text-secondary">
                  {data.title}
                </Typography>
                <Typography variant="h2" className="tw-text-primary">
                  {data.subtitle}
                </Typography>
              </Box>
              {data.blurb}
            </Box>
            {/* Video Section */}
            <Box
              className="tw-h-full"
              sx={{
                width: "1155px",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  aspectRatio: "16/9",
                  maxHeight: "1056px",
                  overflow: "hidden",
                  background: "#textMain"
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/MoCWw4EjyBA?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&loop=1&playlist=MoCWw4EjyBA"
                  title="Motion Hero Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Video Section 1 */}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              Canberra Outlet Centre
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              Autumn/Winter 2021
            </Typography>
          </Box>
          <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Y4huzRIxriE"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
        {["igylY39xKzA", "8ynNO10kMi0"].map((id) => (
          <Box key={id} sx={{ width: "100%", aspectRatio: "16/9" }}>
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

      {/* Video Section 2 */}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              DOS Emporium
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              Spring/Summer 2020
            </Typography>
          </Box>
          <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cyTpKFBzhHY"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
      </Box>

      {/* Video Section 3 */}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              Fashion Week
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              2021
            </Typography>
          </Box>
          <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/JQQdzLHSujo"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
      </Box>

      {/* Video Section 4 */}
      <Box className="tw-w-full tw-bg-primary tw-p-0">
        <Box className="tw-flex tw-flex-col tw-px-20 tw-py-20 tw-items-center">
          <Box className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-mb-3">
            <Typography variant="h2" className="tw-text-secondary">
              Stylist Sessions
            </Typography>
            <Typography variant="h2" className="tw-text-secondary">
              2021
            </Typography>
          </Box>
          <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gbeScymnCnw"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
        {["MCaUq0sJmGw", "ptkuMzfuSM4"].map((id) => (
          <Box key={id} sx={{ width: "100%", aspectRatio: "16/9" }}>
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
  );
};
