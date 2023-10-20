import React, { Component, useState, useEffect   } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
const RoomJoin = (props) => {
    const [roomCode, setRoomCode] = useState("");
    const [error, setError] = useState("");
  
    const handleTextFieldChange = (e) => {
      setRoomCode(e.target.value);
    };
  const navigate = useNavigate()
    const roomButtonPressed = () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: roomCode,
        }),
      };
      fetch("http://localhost:8000/api/join-room", requestOptions)
        .then((response) => {
          if (response.ok) {
            localStorage.setItem('code', JSON.stringify(roomCode))
            navigate('/room')
          } else {
            setError("Room not found.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div>
      <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={error}
          label="Code"
          placeholder="Enter a Room Code"
          value={roomCode}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={roomButtonPressed}
        >
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
        </div>
  )
}

export default RoomJoin
