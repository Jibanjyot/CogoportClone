import PreNavbar from "./components/PreNavbar/PreNavbar";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Achievements from "./components/Achievements/Achievements";
import Services from "./components/Services/Services";
import Curve from "./components/Curve/Curve";
import Clients from "./components/Clients/Clients";
import GetStarted from "./components/GetStarted/GetStarted";

import "./App.css"

function App() {
  return (
    <div >
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
   
      <Introduction></Introduction>
      
      <Achievements></Achievements>
      <Curve></Curve>
      <Services></Services>
      <Clients></Clients>
      <GetStarted></GetStarted>
      
    </div>
  );
}

export default App;
