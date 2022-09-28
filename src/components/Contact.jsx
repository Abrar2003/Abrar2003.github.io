import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./styles/contact.module.css";
import contact from "./Assets/Home/contact-me.jpg"
import email from "./Assets/Home/gmail.png";
import phone from "./Assets/Home/phone-call.png";
import linkdin from "./Assets/Home/linkedin.png";
import insta from "./Assets/Home/instagram.png";
import git from "./Assets/Home/github.png"

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8hgnuc",
        "template_ebot1j4",
        form.current,
        "j55_hmi3JCWVQqE6v"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.master} id="contact">
      <div className={style.img}>
        <img src={contact} alt="" />
      </div>

      <div className={style.details}>
        <h3>Socials</h3>
        <div>
          <a href="mailto:abrar.aalam003@gmail.com?">
          <img src={email} alt="" />
          <p>Email: Abrar.Aalam003@gmail.com</p>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/abrar-aalam-a04836235/">
          <img src={linkdin} alt="" />
          <p>Linkedin: @AbrarAalam</p>
          </a>
        </div>

        <div>
          <a href="#">
          <img src={phone} alt="" />
          <p>Phone: +91 8302119329</p>
          </a>
        </div>
        
        <div>
          <a href="https://www.instagram.com/_.abr03._/">
          <img src={insta} alt="" />
          <p>Instagram: @Abr</p>
          </a>
        </div>

        <div>
          <a href="https://github.com/Abrar2003">
          <img src={git} alt="" />
          <p>GitHub: @Abrar2003</p>
          </a>
        </div>
      </div>
       <div className={style.main}>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Contact Me</h3>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

// Styles

