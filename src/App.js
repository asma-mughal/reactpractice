import './App.css';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import {Route, Routes } from 'react-router-dom';
import RoomPage from './components/RoomPage';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';
import RoomJoin from './components/RoomJoin';
function App() {
  const navigate = useNavigate()
  const [roomCode, setRoomCode] = useState(localStorage.getItem('code'));
  useEffect(()=>{
   if(JSON.parse(roomCode)){
    navigate('/room')
   }
  },[])
function* genFrom(start , end) {
for(let i=start;i<end;i++){
  yield i
}
}
function genTo(genFrom, endLimit) {
  for (const value of generator) {
    if (value >= endLimit) {
      return;
    }
    yield value;
  }
}
function genFromTo(start, end) {
  return genFrom(start, end)
}
  return (
 <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/join" element={<RoomJoin />} />
  <Route path="/create" element={<CreateRoom />} />
  <Route path="/room" element={<Room />} />
  <Route  path='/join-room' element={<RoomJoin />}/>
 </Routes>
  );
}

export default App;
