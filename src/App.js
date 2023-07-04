import PreNavbar from "./components/PreNavbar/PreNavbar";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div >
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
      <div>
        <Introduction></Introduction>
      </div>
      
    </div>
  );
}

export default App;
