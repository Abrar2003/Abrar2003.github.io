import html from "./Assets/Home/html.png";
import css from "./Assets/Home/css.png";
import JS from "./Assets/Home/java-script.png";
import react from "./Assets/Home/rct.png";
import mongo from "./Assets/Home/mongodb.png";
import node from "./Assets/Home/node1.png";
import git from "./Assets/Home/git.png";
import redux from "./Assets/Home/redux.png";
import chakra from "./Assets/Home/chakra-ui.png";
import dsa from "./Assets/Home/structure-file.png";
import exp from "./Assets/Home/express.png";
import aws from "./Assets/Home/aws.png";
import nextjs from "./Assets/Home/nextjs.png";
import redis from "./Assets/Home/redis.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./styles/skills.css"

function TechSkills(){
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
            <div className="container" id="skill">
                
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h1>Tech Stacks</h1>
                            <p></p>
                            <Carousel responsive={responsive} showDots={true} arrows={true} swipeable={true} partialVisbile={false}
                             autoPlay={true} autoPlaySpeed={3000}
                              infinite={true}
                               className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>REACT JS</h5>
                                </div>
                                <div className="item">
                                    <img src={JS} alt="Image" />
                                    <h5>JAVASCRIPT</h5>
                                </div>
                                <div className="item">
                                    <img src={mongo} alt="Image" />
                                    <h5>Mongo DB</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="Image" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={chakra} alt="" />
                                    <h5>Chakra-UI</h5>
                                </div>
                                <div className="item">
                                    <img src={dsa} alt="" />
                                    <h5>Data structures & Algorithms</h5>
                                </div>
                                <div className="item">
                                    <img src={exp} alt="" />
                                    <h5>Express JS</h5>
                                </div>
                                <div className="item">
                                    <img src={nextjs} alt="" />
                                    <h5>Next JS</h5>
                                </div>
                                <div className="item">
                                    <img src={redis} alt="" />
                                    <h5>Redis</h5>
                                </div>
                                <div className="item">
                                    <img src={aws} alt="" />
                                    <h5>AWS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default TechSkills;