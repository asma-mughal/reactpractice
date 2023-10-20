
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Room = () => {
    const [roomData, setRoomData] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
      });
      const roomCode = localStorage.getItem('code')
      useEffect(() => {
        const getRoomDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8000/api/get-room?code=${roomCode}`);
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
  return (
    <div>
    <h3>{roomCode}</h3>
    <p>Votes: {roomData.votesToSkip}</p>
    <p>Guest Can Pause: {roomData.guestCanPause.toString()}</p>
    <p>Host: {roomData.isHost.toString()}</p>
  </div>

  )
}

export default Room
