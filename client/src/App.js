import './App.css';
import Start from './component/Start';
import Game from './component/Game';
import Result from './component/Result';
import socketIoClient from 'socket.io-client'

const END_POINT = "http://localhost:8080"
const socket = socketIoClient(END_POINT); // connection to backend

function App() {
  return (
    <div className="App">
      < Start />
      < Game />
      < Result />
    </div>
  );
}

export default App;
