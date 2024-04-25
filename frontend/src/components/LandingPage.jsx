import Home from "./Home";
import Navbar from "./Navbar";
import Menu from "./Menu";

export default function LandingPage(){
    return (
        <div>
          <Navbar />
            <main>
              <div id="home"><Home /></div>
              <div id="menu"><Menu /></div>
            </main>
        </div>
    )
}