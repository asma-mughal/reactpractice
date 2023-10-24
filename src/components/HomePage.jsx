import React, { useState, useEffect } from "react";

import { Grid, Button, ButtonGroup, Typography, Container, Paper } from "@material-ui/core";
import {
  useNavigate,
  Link
} from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    // Make an HTTP GET request to the Django API endpoint
    fetch("http://localhost:8000/api/user-in-room")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      })
      .then((data) => {
        // Handle the response data
        setRoomCode(data.code);
        console.log(data)
        localStorage.setItem('code', JSON.stringify(data.code));
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  }, []);
  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };
  useEffect(() => {
    if (roomCode) {
      navigate('/room');
    }
  }, [roomCode, navigate]);
 
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
