import React from "react";
import { categories } from "../utils/constants";
import { Stack, Typography } from "@mui/material";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "90vh" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background:
              category.name === selectedCategory && "var(--color-tertiary)",
            color: "white",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? "white"
                  : "var(--color-secondary)",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.9",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
      <Typography
        className="copyright"
        variant="body2"
        sx={{ mt: 1.5, color: "#fff", pb: 2, textAlign: "center" }}
      >
        Copyright 2023 <br />
        A. ID
      </Typography>
    </Stack>
  );
};

export default SideBar;
