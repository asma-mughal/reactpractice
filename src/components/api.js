export const handleRoomButtonPressed = (votesToSkip,guestCanPause) =>  {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      }),
    };
    console.log(votesToSkip, guestCanPause)
    fetch("http://localhost:8000/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
