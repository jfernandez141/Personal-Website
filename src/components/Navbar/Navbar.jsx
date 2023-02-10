import style from "./Navbar.module.css"

const Navbar = ()=>{

    return(
        <nav className={style.navBar}>
            {/* se puede colocar un logo */}
            <div className={style.navItems}>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )

}

export default Navbar;