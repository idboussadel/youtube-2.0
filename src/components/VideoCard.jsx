import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "325px", sm: "358px", md: "320px" },
        outline: "none",
        backgroundColor: "#1E1E1E",
        boxShadow: "4",
        borderRadius: 4,
      }}
    >
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        ></CardMedia>
        <CardContent sx={{ height: "106px" }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
          <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
