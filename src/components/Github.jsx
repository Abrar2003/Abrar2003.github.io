import GitHubCalendar from "react-github-calendar";
import React from "react";
import { color } from "@chakra-ui/react";
import style from "./styles/github.module.css";

export default function Github() {
  
  return (
    <div className={style.main}>
        <h1>My Contributions</h1>
      <div className={style.calendar}>
        <GitHubCalendar
          username="abrar2003"
          year={new Date().getFullYear()}
          fontSize={16}
          blockSize={15}
          blockMargin={5}
        />
      </div>
    </div>
  );
}
