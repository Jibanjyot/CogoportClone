import PreNavbar from "./components/PreNavbar/PreNavbar";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Achievements from "./components/Achievements/Achievements";
import Services from "./components/Services/Services";
import Curve from "./components/Curve/Curve";
import Clients from "./components/Clients/Clients";
import GetStarted from "./components/GetStarted/GetStarted";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import IndustriesServed from "./components/IndustriesServed/IndustriesServed";
import GetStarted2 from "./components/GetStarted2/GetStarted2";
import GrowFaster from "./components/GrowFaster/GrowFaster";
import Blogs from "./components/Blogs/Blogs";
import SubscribeToNewsletter from "./components/SubscribeToNewsletter/SubscribeToNewsletter";
import PreFooter from "./components/PreFooter/PreFooter";
import Prefooter2 from "./components/Prefooter2/Prefooter2";
import Curve2 from "./components/Curve2/Curve2";
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
      <HowItWorks></HowItWorks>
      <IndustriesServed></IndustriesServed>
      <GetStarted2></GetStarted2>
      <GrowFaster></GrowFaster>
      <Blogs></Blogs>
      <Curve2></Curve2>
      <SubscribeToNewsletter></SubscribeToNewsletter>
      <PreFooter></PreFooter>
      <Prefooter2></Prefooter2>
      
    </div>
  );
}

export default App;
