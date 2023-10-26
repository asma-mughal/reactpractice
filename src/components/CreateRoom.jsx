import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useNavigate} from 'react-router-dom';

const CreateRoom = () => {
  const defaultVotes = 2;
  const [state, setState] = useState({
    guestCanPause: true,
    votesToSkip: defaultVotes,
  });

  const handleVotesChange = (e) => {
    setState({
      ...state,
      votesToSkip: e.target.value,
    });
  };

  const handleGuestCanPauseChange = (e) => {
    setState({
      ...state,
      guestCanPause: e.target.value === 'true' ? true : false,
    });
  };
  const navigate = useNavigate()
  
const handleRoomButtonPressed = (votesToSkip,guestCanPause) =>  {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      votes_to_skip: votesToSkip,
      guest_can_pause: guestCanPause,
    }),
  };
  fetch("http://localhost:8000/api/create-room", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const {id, code} = data ;
      localStorage.setItem('code', JSON.stringify(code))
      navigate('/room')
    })
}
  return (
    <Grid container spacing={1}>
    <Grid item xs={12} align="center">
      <Typography component="h4" variant="h4">
        Create A Room
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <FormControl component="fieldset">
        <FormHelperText>
          <div align="center">Guest Control of Playback State</div>
        </FormHelperText>
        <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
          <FormControlLabel
            value="true"
            control={<Radio color="primary" />}
            label="Play/Pause"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="false"
            control={<Radio color="secondary" />}
            label="No Control"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
    <Grid item xs={12} align="center">
      <FormControl>
        <TextField
          required={true}
          type="number"
          onChange={handleVotesChange}
          defaultValue={defaultVotes}
          inputProps={{
            min: 1,
            style: { textAlign: 'center' },
          }}
        />
        <FormHelperText>
          <div align="center">Votes Required To Skip Song</div>
        </FormHelperText>
      </FormControl>
    </Grid>
    <Grid item xs={12} align="center">
      <Button color="primary" variant="contained" onClick={()=>{
       handleRoomButtonPressed(state.votesToSkip, state.guestCanPause)
      }}>
        Create A Room
      </Button>
    </Grid>
    <Grid item xs={12} align="center">
      <Button color="secondary" variant="contained" to="/" component={Link}>
        Back
      </Button>
    </Grid>
  </Grid>
  )
}

export default CreateRoom
