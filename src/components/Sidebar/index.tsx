import React from "react"
import arrow from "../../assets/images/arrow.png"
import { Link } from "gatsby"
import { pages } from "../Layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Sidebar = ({ isOpen, setIsOpen, current, setCurrent }) => {
  const buttonClass = isOpen ? "transform-gpu rotate-180 -ml-5" : "ml-0"
  const toggleSideBar = isOpen ? "isOpen" : "isClosing"
  const ToggleClick = () => {
    setIsOpen(!isOpen)
  }

  const changeCurrent = page => () => {
    setCurrent(page)
  }

  return (
    <div className={`Sidebar w-96 z-20 py-24 inset-  ${toggleSideBar}`}>
      <button
        type="button"
        className={`Btn Nav flex items-center justify-center ${buttonClass}`}
        onClick={ToggleClick}
      >
        <img className="w-7 h-7" src={arrow} alt="arrow" />
      </button>
      <div className="Sidebar-divider h-screen" />
      <div className="Sidebar-menu w-4/6 mx-auto px-5 text-center">
        <h2 className="text-4xl font-extrabold underline font-primary">
          Drakenwolf
        </h2>
        <ul className="Sidebar-menu-navigation mt-20 font-secundary">
          <li
            className={`px-7 py-4 ${
              current === "home" && "bg-primary text-white"
            }`}
          >
            <AnchorLink
              to="/#home"
              className="text-lg font-semibold font-primary text-primary uppercase"
            >
              <button className="uppercase" onClick={changeCurrent("home")}>
                home
              </button>
            </AnchorLink>
          </li>
          <li
            className={`px-7 py-4 ${
              current === "biography" && "bg-primary text-white"
            }`}
          >
            <AnchorLink
              to="/#biography"
              className="text-lg font-semibold font-primary text-primary uppercase"
            >
              <button
                className="uppercase"
                onClick={changeCurrent("biography")}
              >
                biography
              </button>
            </AnchorLink>
          </li>
          <li
            className={`px-7 py-4 ${
              current === "projects" && "bg-primary text-white"
            }`}
          >
            <AnchorLink
              to="/#projects"
              className="text-lg font-semibold font-primary text-primary uppercase"
            >
              <button className="uppercase" onClick={changeCurrent("projects")}>
                projects
              </button>
            </AnchorLink>
          </li>
          <li
            className={`px-7 py-4 ${
              current === "services" && "bg-primary text-white"
            }`}
          >
            <AnchorLink
              to="/#services"
              className="text-lg font-semibold font-primary text-primary uppercase"
            >
              <button className="uppercase" onClick={changeCurrent("services")}>
                services
              </button>
            </AnchorLink>
          </li>
          <li
            className={`px-7 py-4 ${
              current === "blog" && "bg-primary text-white"
            }`}
          >
            <AnchorLink
              to="/#blog"
              className="text-lg font-semibold font-primary text-primary uppercase"
            >
              <button className="uppercase" onClick={changeCurrent("blog")}>
                blog
              </button>
            </AnchorLink>
          </li>
          <li
            className={`px-7 py-4 ${
              current === "contact" && "bg-primary text-white"
            }`}
          >
            <AnchorLink
              to="/#contact"
              className="text-lg font-semibold font-primary text-primary uppercase"
            >
              <button className="uppercase" onClick={changeCurrent("contact")}>
                contact
              </button>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
