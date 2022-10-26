import myt from "./Assets/Home/mytheresa.jpg";
import anth from "./Assets/Home/anth.jpg";
import style from "./styles/projects.module.css";
import git from "./Assets/Home/github.png";
import rct from "./Assets/Home/rct.png";
import Chakra from "./Assets/Home/chakra-ui.png";
import js from "./Assets/Home/java-script.png";
import node from "./Assets/Home/node.png";
// import exp from "./Assets/Home/"

export default function Projects() {
  return (
    <div className={style.main} id="projects">
        <h1>Projects</h1>
        <div className={style.sub1}>
            <img className={style.pr} src={myt} alt="" />
            <div>
                <h2>My Theresa (CLONE)</h2>
                <p>
                    This is a fashion and lifeStyle E-commerce website where you can perchase premium products form top brands.
                    I used to achieve this layout. This is front-end website and Developed the userflow and all the functionalities <br /> It was an individual project and it took me 4 days to complete.
                </p>
                <a href="https://github.com/Abrar2003/homely-wilderness-2173/tree/main/homely-wilderness-2173">
                    <img src={git} alt="" />
                </a>
                <h4>Tech Stack</h4>
                <div className={style.tech}>
                    <img src={rct} alt="" />
                    <p>React</p>
                </div>
            </div>
        </div>
        <div className={style.sub2}>
            <div>
                <h2>Anthropologie (CLONE)</h2>
                <p>
                    This is a fashion and lifeStyle E-commerce website where you can perchase premium products form top brands.
                    we used <b>HTML, JavaScript, CSS</b> to achieve this layout. This is front-end website and we developed the 
                    basic <b>User-Flow</b> It was an Team project and it took us 6 days to complete. I was the Team-lead of my team and 
                    we won <b>Power-project</b> award from Masai School.
                </p>
                <a href="https://github.com/Abrar2003/Anthropologie-Project">
                    <img src={git} alt="" />
                </a>
            </div>
            <img className={style.pr} src={anth} alt="" />
        </div>
    </div>
  )
}
