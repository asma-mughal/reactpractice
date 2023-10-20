import './App.css';
import HomePage from './components/HomePage';
import {Route, Routes } from 'react-router-dom';
import RoomPage from './components/RoomPage';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';
function App() {
  return (
 <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/join" element={<RoomPage />} />
  <Route path="/create" element={<CreateRoom />} />
  <Route path="/room" element={<Room />} />
 </Routes>
  );
}

export default App;
