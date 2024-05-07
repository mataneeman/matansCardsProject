import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "../providers/CustumThemeProvider";

const Error = ({ errorMessage }) => {
  const {isDark} = useTheme()
  return (
    <Container sx={{background: isDark ? "gray" : "none"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color={isDark ? "white" : "black"}>
            Oops... something went wrong: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center" >
          <img
            width="100%"
            src="/assets/images/broken-robot-error.png"
            alt="broken robot"   
          />
        </Grid>
      </Grid>
    </Container>
  );
};


export default Error;
