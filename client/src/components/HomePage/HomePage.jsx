import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Feed from "../Feed/Feed";
import Trending from "../Trending/Trending";
const HomePage = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-9 hidden lg:block w-full relative"
      >
        <Feed />
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <Trending />
      </Grid>
    </Grid>
  );
};

export default HomePage;
