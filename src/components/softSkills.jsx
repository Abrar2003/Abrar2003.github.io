import empathy from "./Assets/Home/empathy.png";
import time from "./Assets/Home/time.png";
import adapt from "./Assets/Home/adapt.png";
import account from "./Assets/Home/daily-tasks.png";
import collab from "./Assets/Home/united.png";
// import meter6 from "./Assets/Home/node1.png";
import problemSolving from "./Assets/Home/solution.png";
import openmind from "./Assets/Home/open-mind.png";
import telepathy from "./Assets/Home/telepathy.png";
import TimeManage from "./Assets/Home/time-management.png";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import "./styles/skills.css";

function SoftSkills() {
  const icons = [
    { name: "Problem Solving", img: problemSolving },
    { name: "Collaboration", img: collab },
    { name: "Time management", img: TimeManage },
    { name: "Organization and planning", img: account },
  ];
  return (
    <div className="main">
    <h1>Soft Skills</h1>
    <div className="SSmain">
      {icons.map((icon) => (
        <div className="SSsub">
          <img src={icon.img} alt={icon.name} />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SoftSkills;
