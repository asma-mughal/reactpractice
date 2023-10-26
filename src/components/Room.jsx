
import React, { useEffect, useState } from 'react';

import { Grid, Typography, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
const Room = () => {
    const [roomData, setRoomData] = useState({
          votesToSkip: 2,
          guestCanPause: false,
          isHost: false,
        });
      const roomCode = localStorage.getItem('code')
      const navigate = useNavigate()
      useEffect(() => {
        const getRoomDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8000/api/get-room?code=${JSON.parse(roomCode)}`);
            if (response.ok) {
              const data = await response.json();
              console.log(data)
              setRoomData({
                votesToSkip: data.votes_to_skip,
                guestCanPause: data.guest_can_pause,
                isHost: data.is_host,
              });
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        getRoomDetails();
      }, [roomCode]);
      const leaveButtonPressed = () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };
    
        fetch("/api/leave-room", requestOptions).then((_response) => {
          localStorage.removeItem('code')
          navigate('/')
        });
      }
  return (
    <Grid container spacing={1}>
    <Grid item xs={12} align="center">
      <Typography variant="h4" component="h4">
        Code: {roomCode}
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <Typography variant="h6" component="h6">
        Votes: {roomData.votesToSkip}
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <Typography variant="h6" component="h6">
        Guest Can Pause: {roomData.guestCanPause.toString()}
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <Typography variant="h6" component="h6">
        Host: {roomData.isHost.toString()}
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <Button
        variant="contained"
        color="secondary"
        onClick={leaveButtonPressed}
      >
        Leave Room
      </Button>
    </Grid>
  </Grid>

  )
}

export default Room
