import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../utils/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="rows"
    alignItems="center"
    p={2}
    sx={{
      top: 0,
      justifyContent: "space-between",
      position: "sticky",
      backgroundColor: "var(--black-mode-primary)",
      zIndex: 100,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
