import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "200px",
            background:
              "linear-gradient(90deg, rgba(98,91,113,1) 0%, rgba(102,83,152,1) 75%, rgba(103,80,164,1) 100%, rgba(98,91,113,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelItem={channelDetail} marginTop="-93px" />
      </Box>
      <Box pt={2} display="flex">
        <Box />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
