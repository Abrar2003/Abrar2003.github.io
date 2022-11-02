import style from "./styles/about.module.css"

function About() {
  return (
    <div className={style.main} id="about">
      
      <div className={style.l}>
        <img
          src="https://c1.wallpaperflare.com/preview/143/62/427/laptop-macbook-computer-screen.jpg"
          alt="Image"
        />
      </div>
      <div className={style.r}>
        <h1>About Me</h1>
        <p>
          Highly competent Full Stack developer with a good knowledge of web development and a
           Problem-Solving mindset. With strong Work-Ethics and Good communication skills,
          Eager to learn new thing and looking for exciting opportunity in a challenging environment.
        </p>
        <img src="https://thumbs.dreamstime.com/b/vector-portable-computer-keyboard-black-white-icon-lineart-89390511.jpg" alt="" />
      </div>
    </div>
  );
}

export default About;