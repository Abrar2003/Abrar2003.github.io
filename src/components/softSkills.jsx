import empathy from "./Assets/Home/empathy.png";
import time from "./Assets/Home/time.png";
import adapt from "./Assets/Home/adapt.png";
import account from "./Assets/Home/daily-tasks.png";
import support from "./Assets/Home/support.png";
// import meter6 from "./Assets/Home/node1.png";
import solution from "./Assets/Home/solution.png";
import openmind from "./Assets/Home/open-mind.png";
import telepathy from "./Assets/Home/telepathy.png";
import TimeManage from "./Assets/Home/time-management.png"
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
                            <Carousel responsive={responsive} showDots={true} arrows={true} swipeable={true} partialVisbile={false}
                             autoPlay={true} autoPlaySpeed={3000}
                              infinite={true}
                               className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={empathy} alt="Image" />
                                    <h5>Empathetic</h5>
                                </div>
                                <div className="item">
                                    <img src={time} alt="Image" />
                                    <h5>Time-management</h5>
                                </div>
                                <div className="item">
                                    <img src={telepathy} alt="Image" />
                                    <h5>Self-Awareness</h5>
                                </div>
                                <div className="item">
                                    <img src={adapt} alt="Image" />
                                    <h5>Adaptive</h5>
                                </div>
                                <div className="item">
                                    <img src={TimeManage} alt="Image" />
                                    <h5>Patient</h5>
                                </div>
                                <div className="item">
                                    <img src={account} alt="Image" />
                                    <h5>Accountablity</h5>
                                </div>
                                <div className="item">
                                    <img src={support} alt="Image" />
                                    <h5>Collaboration</h5>
                                </div>
                                <div className="item">
                                    <img src={openmind} alt="Image" />
                                    <h5>Open-minded</h5>
                                </div>
                                <div className="item">
                                    <img src={solution} alt="Image" />
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