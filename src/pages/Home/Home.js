import Navbar from "../../components/Navbar/Navbar";
import Component1 from "../component1";
import Showcase from "./showcase";
import Showcase2 from "./showcase2";
import Showcase3 from "./showcase3";
import Showcase4 from "./showcase4/showcase4";
import Showcase5 from "./showcase5";
import { Slide, Flip, Zoom } from "react-awesome-reveal";
import Testimonial from "./testimonial";
import colors from "../../utils/colors";
import PartnerShip from "./partnerShip";
import CTA from "./CTA";
import Achievements from "./achievments/achievements";
import LandingPage from "./landingPage";
import 'typeface-inter';


function Home() {
  const style = {
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: 'Inter, sans-serif' ,
    
  };
  return (
    <div style={style}>
      <LandingPage></LandingPage>
      <Showcase></Showcase>
      {/* <Showcase2></Showcase2> */}

      <Slide direction="up" triggerOnce>
        <Showcase3></Showcase3>
      </Slide>

      <Slide direction="up" triggerOnce>
        <Showcase4></Showcase4>
      </Slide>

      <Slide direction="up" triggerOnce>
        <Showcase5></Showcase5>
      </Slide>

        <CTA></CTA>

      <Achievements></Achievements>

      <Zoom>
        <Testimonial></Testimonial>
      </Zoom>
    </div>
  );
}

export default Home;
