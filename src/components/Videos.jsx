import { Stack, Box } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard, Loader } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      className="videos-container"
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
      pl={{ xl: 3, md: 2, xs: 2 }}
      pr={{ md: 2, xs: 2 }}
      pt={1}
      pb={3}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelItem={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
