import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column", // Default for extra-small screens
          md: "row", // Apply "row" for medium and larger screens
        },
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
          left: 0,
          top: "78px",
          position: { md: "sticky", lg: "sticky", xl: "sticky" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          p={2}
          pl={3}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "var(--color-secondary)" }}> vedios</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
