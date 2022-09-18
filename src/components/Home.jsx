import { Text, Box, Image, Flex, Spacer } from "@chakra-ui/react";
import style from "./styles/home.module.css"

function Home() {
  return (
    <div className={style.main}>
      <div className={style.small}>
        <img width="100%" src="https://media-exp1.licdn.com/dms/image/C4D03AQH0XpXQxmo-eg/profile-displayphoto-shrink_200_200/0/1654280036989?e=1668643200&v=beta&t=Tc-4P1Xy3SY-bV9UnCpIY4JJfqIw5k-Uhhl7OZEaSag" alt="Abrar" />
      </div>
      <div className={style.mainLeft}>
        <h2>Hi, I'm Abrar</h2>
        <h3>Welcome To My Portfolio!</h3>
        <h3>I am a Full Stack Web Developer</h3>
        <button>CONTACT ME</button>
        <button>RESUME 
          <img className={style.icon} src="https://cdn.iconscout.com/icon/free/png-64/download-1485697-1258918.png" alt="icon" />
        </button>
      </div>
      <div className={style.mainRight}>
        <img width="100%" src="https://media-exp1.licdn.com/dms/image/C4D03AQH0XpXQxmo-eg/profile-displayphoto-shrink_200_200/0/1654280036989?e=1668643200&v=beta&t=Tc-4P1Xy3SY-bV9UnCpIY4JJfqIw5k-Uhhl7OZEaSag" alt="Abrar" />
      </div>
    </div>
  );
}

export default Home;
// https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60