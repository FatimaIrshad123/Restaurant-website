import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Footer from "./Footer";
import Dishes from "./Dishes";
import Reviews from "./Review";
import Review from "./Review";

export default function LandingPage(){
    return (
        <div>
            <main>
        <div id="home">
          <Home />
        </div>

        <div id="dishes">
          <Dishes />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
        </div>
    )
}