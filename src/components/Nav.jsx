import style from "./styles/nav.module.css"

function Nav(){
    return(
        <div className={style.nav}>
            <div>
                <h1>A_A</h1>
            </div>
            <div className={style.navR}>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    )
}
export default Nav;