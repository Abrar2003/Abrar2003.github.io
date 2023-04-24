import GitHubCalendar from "react-github-calendar";
import React from "react";
import { color } from "@chakra-ui/react";
import style from "./styles/github.module.css";

export default function Github() {
  return (
    <div className={style.main}>
      <h1>Statistics</h1>
      <div className={style.stats}>
        <div>
          <h1>1200+</h1>
          <p>Hours spent on coding</p>
        </div>
        <div>
          <h1>200+</h1>
          <p>Solved DSA problems</p>
        </div>
        <div>
          <h1>7</h1>
          <p>Months of training on interpersonal skills</p>
        </div>
        <div>
          <h1>6</h1>
          <p>Projects completed</p>
        </div>
      </div>
      <div className={style.calendar}>
        <GitHubCalendar
          username="abrar2003"
          year={new Date().getFullYear()}
          fontSize={12}
          blockSize={15}
          blockMargin={5}
        />
      </div>
      <div className={style.gitStats}>
        <img src="https://github-readme-stats.vercel.app/api?username=Abrar2003&theme=gotham&hide_border=false&include_all_commits=true&count_private=true&show_icons=true" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Abrar2003&theme=gotham&hide_border=false" />
      </div>
    </div>
  );
}
