import {Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home/Home";
import Room from "./pages/Home/Room/Room";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
