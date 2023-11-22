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
    function* genFromTo(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
function *concatTwo(gen1, gen2) {
  yield * gen1;
  yield* gen2;
}
let con = concatTwo(genFromTo(0, 3), genFromTo(0, 2))
con() // 0
con() // 1
con() // 2
con() // 0
con() // 1
con() // undefined
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
