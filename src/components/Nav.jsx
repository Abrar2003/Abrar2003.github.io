import style from "./styles/nav.module.css"
import { Link } from "react-scroll"

function Nav(){
    const scroll = ()=>{
        
    }
    return(
        <div className={style.nav}>
            <div>
                <h1>A_A</h1>
            </div>
            <div className={style.navR}>
                <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
                <Link to="skill" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
            </div>
        </div>
    )
}
export default Nav;