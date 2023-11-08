import "./App.css";
import Login from "./components/Login";
import Callback from "./components/Callback";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/oauth/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
