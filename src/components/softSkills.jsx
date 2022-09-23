import meter1 from "./Assets/Home/empathy.png";
import meter2 from "./Assets/Home/time.png";
import meter3 from "./Assets/Home/adapt.png";
import meter4 from "./Assets/Home/daily-tasks.png";
import meter5 from "./Assets/Home/support.png";
// import meter6 from "./Assets/Home/node1.png";
import meter7 from "./Assets/Home/solution.png";
import meter8 from "./Assets/Home/open-mind.png";
import meter9 from "./Assets/Home/telepathy.png";
import meter10 from "./Assets/Home/time-management.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./styles/skills.css"

function SoftSkills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 501 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 500, min: 350 },
          items: 1,
          showDots:false
        },
      };
    
    
      return (
        <section className="skill" id="skills" >
            <div className="container">
                
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h1>Soft Skills</h1>
                            <p></p>
                            <Carousel responsive={responsive} showDots={true} arrows={false} swipeable={true} partialVisbile={false}
                             autoPlay={true} autoPlaySpeed={3000}
                              infinite={true}
                               className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Empathetic</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Time-management</h5>
                                </div>
                                <div className="item">
                                    <img src={meter9} alt="Image" />
                                    <h5>Self-Awareness</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Adaptive</h5>
                                </div>
                                <div className="item">
                                    <img src={meter10} alt="Image" />
                                    <h5>Patient</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Acountablity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <h5>Collaboration</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} alt="Image" />
                                    <h5>Open-minded</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="Image" />
                                    <h5>Problem-Solving</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default SoftSkills;