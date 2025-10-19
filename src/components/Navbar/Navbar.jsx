import { useEffect, useState } from "react";
import style from "./Navbar.module.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navbarHeight = document.querySelector(`.${style.navBar}`)?.offsetHeight || 60;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight + 100;
      let current = "home";

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        // si el scroll actual está dentro del rango de la sección
        if (scrollPosition >= top && scrollPosition < bottom) {
          current = section.id;
          break;
        }
      }

      // si está casi arriba del todo, forzamos "home"
      if (window.scrollY < 150) {
        current = "home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // ejecuta una vez al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={style.navBar}>
      <div className={style.navItems}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? style.active : ""}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
