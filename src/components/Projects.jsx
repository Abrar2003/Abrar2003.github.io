import myt from "./Assets/Home/mytheresa.jpg";
import anth from "./Assets/Home/anth.jpg";
import myh from "./Assets/Home/myhours.jpg"
import git from "./Assets/Home/github.png";
import rct from "./Assets/Home/rct.png";
import Chakra from "./Assets/Home/chakra-ui.png";
import js from "./Assets/Home/java-script.png";
import css from "./Assets/Home/css.png";
import node from "./Assets/Home/node.png";
import mongo from "./Assets/Home/mongodb.png";
import html from "./Assets/Home/html.png";
import link from "./Assets/Home/export.png";
import express from "./Assets/Home/express.png";
import rdx from "./Assets/Home/redux.png";
import nxt from "./Assets/Home/nextjs.png"
import hb from "./Assets/Home/heavens.jpg"

//STYLES
import style from "./styles/projects.module.css";

export default function Projects() {
  const tech1 = [
    { name: "React", img: rct },
    { name: "MongoDB", img: mongo },
    { name: "Node Js", img: node },
    { name: "Express Js", img: express },
    { name: "Redux", img: rdx },
    { name: "Chakra-UI", img: Chakra },
    { name: "HTML", img: html },
    { name: "JavaScript", img: js },
    { name: "CSS", img: css },
    
  ];
  const tech2 = [
    { name: "React", img: rct },
    { name: "Chakra-UI", img: Chakra },
    { name: "HTML", img: html },
    { name: "JavaScript", img: js },
    { name: "CSS", img: css }
  ];
  const tech3 = [
    { name: "HTML", img: html },
    { name: "JavaScript", img: js },
    { name: "CSS", img: css },
  ];
  const tech4 = [
    { name: "Next Js", img: nxt },
    { name: "MongoDB", img: mongo },
    { name: "Node Js", img: node },
    { name: "Express Js", img: express },
    { name: "Chakra-UI", img: Chakra },
    { name: "HTML", img: html },
    { name: "JavaScript", img: js },
    { name: "CSS", img: css }
  ]
  return (
    <div className={style.main} id="projects">
      <h1>Projects</h1>
      <div className={style.sub}>
                <img className={style.pr} src={hb} alt="" />
            <div>
            <h2>Heaven's Basket</h2>
            <p>
                It is a E-commerce website where
                you can buy food products and fresh vegitables, 
                And you can also buy any non-veg products.
                 Built by a team of 5 members in 5 days
            </p>
            <a href="https://github.com/Abrar2003/annoyed-spark-4097" target="_blank">
                <img src={git} alt="" />
            </a>
            <a href="https://annoyed-spark-4097-6yv7.vercel.app/" target="_blank">
                <img src={link} alt="" />
            </a>
            <h4>Tech Stack</h4>
            <div className={style.techmain}>
                {tech4.map((item) => (
                <div className={style.tech}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
            </div>
      </div>
      <div className={style.sub}>
            <div>
            <h2>Myhours.com (CLONE)</h2>
            <p>
                It is a Time-tracking and Project managing website where
                you can manage projects, manage teams, and track your time.
                Collaborative project. Built by a team of 5 members in 4 days
            </p>
            <a href="https://github.com/Thannzz/Myhours-Clone" target="_blank">
                <img src={git} alt="" />
            </a>
            <a href="https://myhoursclone.vercel.app/" target="_blank">
                <img src={link} alt="" />
            </a>
            <h4>Tech Stack</h4>
            <div className={style.techmain}>
                {tech1.map((item) => (
                <div className={style.tech}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
            </div>
            <img className={style.pr} src={myh} alt="" />
      </div>
      <div className={style.sub}>
            <img className={style.pr} src={myt} alt="" />
            <div>
            <h2>My Theresa (CLONE)</h2>
            <p>
                This is a fashion and lifeStyle E-commerce website where you can
                perchase premium products form top brands. I used to achieve this
                layout. This is front-end website and Developed the userflow and all
                the functionalities <br /> It was an individual project and it took
                me 4 days to complete.
            </p>
            <a href="https://github.com/Abrar2003/homely-wilderness-2173/tree/main/homely-wilderness-2173" target="_blank">
                <img src={git} alt="" />
            </a>
            <a href="https://homely-wilderness-2173-homely-wilderness-2173-a334.vercel.app/" target="_blank">
                <img src={link} alt="" />
            </a>
            <h4>Tech Stack</h4>
            <div className={style.techmain}>
                {tech2.map((item) => (
                <div className={style.tech}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
            </div>
      </div>
      <div className={style.sub}>
            <div>
            <h2>Anthropologie (CLONE)</h2>
            <p>
                This is a fashion and lifeStyle E-commerce website where you can
                perchase premium products form top brands. we used to achieve this
                layout. This is front-end website and we developed the basic
                User-Flow It was an Team project and it took us 6 days to complete.
                I was the Team-lead of my team and we won Power-project award from
                Masai School.
            </p>
            <a href="https://github.com/Abrar2003/Anthropologie-Project" target="_blank">
                <img src={git} alt="" />
            </a>
            <a href="https://anthropologie-project-cv7a.vercel.app/" target="_blank">
                <img src={link} alt="" />
            </a>
            <h4>Tech Stack</h4>
            <div className={style.techmain}>
                {tech3.map((item) => (
                <div className={style.tech}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
            </div>
            <img className={style.pr} src={anth} alt="" />
      </div>
    </div>
  );
}
