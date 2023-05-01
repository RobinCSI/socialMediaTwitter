import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Sidebar from "../sideBar/Sidebar";
import UserData from "../userData/UserData";

import Sidebar from "../sideBar/Sidebar";
import UserData from "../userData/UserData";


const Layout = ({children}) => {
  console.log(children)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item md={0.5} sx={{ height: "100vh" }}>
          {/* <Item></Item> */}
        </Grid>
      <Grid item md={2.5}>
      <Grid sx={{backgroundColor: "white", border: "1px solid", height: "80vh", margin: "15px"}}>
        <Item>This is side bar</Item>
      </Grid>
      <Grid sx={{backgroundColor: "white", border: "1px solid", height: "20vh", margin: "15px"}}>
        <Item>This is bottom-left component</Item>
      </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid
            sx={{
              backgroundColor: "white",
              border: "1px solid",
              height: "30vh",
              margin: "15px",
            }}
          >
            <Item>Home and What's happening</Item>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "white",
              border: "1px solid",
              height: "70vh",
              margin: "15px",
            }}
          >
            <Item>Twitter feed</Item>
          </Grid>
        </Grid>
        <Grid sx={{backgroundColor: "white", border: "1px solid", height: "70vh", margin: "15px"}}>
        <Item>{children}</Item>
        {/* Twitter feed */}
      </Grid>
      </Grid>
      <Grid item md={2.5}>
      <Grid sx={{backgroundColor: "rgb(247, 249, 249)", border: "1px solid", height: "80vh", margin: "15px"}}>
        <Item>Search and Trending</Item>
      </Grid>
      <Grid sx={{backgroundColor: "white", border: "1px solid", height: "70vh", margin: "15px"}}>
        <Item></Item> 
        {/* Who to follow? */}
      </Grid>
    </Grid>
    <Grid item md={0.5} sx={{height: "100vh"}}>
            {/* <Item></Item> */}
        </Grid>
        <Grid item md={0.5} sx={{ height: "100vh" }}>
          {/* <Item></Item> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
