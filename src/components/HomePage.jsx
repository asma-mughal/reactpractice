import React, { useState, useEffect } from "react";

import { Grid, Button, ButtonGroup, Typography, Container, Paper } from "@material-ui/core";
import {
  useNavigate,
  Link
} from "react-router-dom";

const HomePage = () => {

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

 
  return (
    <div style={centerStyle}>
     <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h3" align="center" gutterBottom>
            House Party
          </Typography>
          <ButtonGroup fullWidth variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Paper>
      </Container>
      </div>
  )
}

export default HomePage
