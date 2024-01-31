import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meeting from "./components/meeting/Meeting";
import Home from "./components/home/Home";

import "./App.css";

let payload={
  meetingNumber:'72361752269',
  role:0,
  sdkKey:'Mz4eldT9Q8qPdnjSDUmVpg',
  sdkSecret:'FtKtcVD9BL8p775a19Ha3r9D2tKI4cC9',
  passWord:'1GdJ30',
  userName:'Testing',
  userEmail:'guptalaxmi128@gmail.com',
  leaveUrl:'http://localhost:3000/'

}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<Meeting payload={payload} />} />
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
