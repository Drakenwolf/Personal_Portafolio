import React, { useState } from "react"
import personalInfo from "../../data/personalInfo.json"
import arrowDown from "../../assets/svg/arrow-down.svg"
import download from "../../assets/svg/download.svg"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import SkillsTabs from "../SkillsTabs"

const renderPersonalInfo = personalInfo.map(element => {
  const card = Object.entries(element)[0]
  return (
    <li className="Biography-cards">
      <p>
        {`${card[0]} : `}
        <span className="font-semibold">{card[1]}</span>
      </p>
    </li>
  )
})

const Biography = () => {
  const [currentSkill, setCurrentSkill] = useState(0)
  const skillsNavTitleClass = index =>
    `Biography-tab-title font-primary font-semibold ${
      currentSkill === index && "skill-active"
    }`
  const skillsNavLiClass = "pl-20 mb-2.5"
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center">
        <h1 className="Section-title pb-10 mb-14 After-w-full relative font-primary font-semibold text-7xl">
          Biography
        </h1>
        <p className="mb-14 tracking-wide text-lg font-secundary Section-content text-center leading-7 w-3/4">
          I have more than 1 year of experience as a freelancer, i love bringing
          value to the projects i am working on. I truly believe in a positive
          future leaded by technology that will our lives easier!
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-row">
          <ul className="flex flex-row justify-center flex-wrap">
            {renderPersonalInfo}
          </ul>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="my-24 flex flex-col items-center">
          <Link
            to="/"
            className="w-80 h-48 bg-primary flex flex-col justify-center items-center Biography-container"
          >
            <img
              className="w-14 h-14 filter-white Biography-arrow "
              src={arrowDown}
              alt="arrow down"
            />
            <img
              className="w-14 h-14 filter-white"
              src={download}
              alt="download"
            />
            <p className="text-white my-4 text-4xl font-semibold font-primary">
              Download cv
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h1 className="Section-title pb-10 mb-14 After-w-full relative font-primary font-semibold text-7xl">
          Skills
        </h1>
        <ul className="flex items-center">
          <li className={skillsNavLiClass}>
            <button
              onClick={() => {
                setCurrentSkill(0)
              }}
            >
              <AnchorLink className={skillsNavTitleClass(0)} to="#tab0">
                Front end
              </AnchorLink>
            </button>
          </li>
          <li className={skillsNavLiClass}>
            <button
              onClick={() => {
                setCurrentSkill(1)
              }}
            >
              <AnchorLink className={skillsNavTitleClass(1)} to="#tab1">
                Back end
              </AnchorLink>
            </button>
          </li>
          <li className={skillsNavLiClass}>
            <button
              onClick={() => {
                setCurrentSkill(2)
              }}
            >
              <AnchorLink className={skillsNavTitleClass(2)} to="#tab2">
                Web3/Blockchain
              </AnchorLink>
            </button>
          </li>
          <li className={skillsNavLiClass}>
            <button
              onClick={() => {
                setCurrentSkill(3)
              }}
            >
              <AnchorLink className={skillsNavTitleClass(3)} to="#tab3">
                Others
              </AnchorLink>
            </button>
          </li>
        </ul>
        <SkillsTabs currentSkill={currentSkill} />
        {/* <p className="mb-14 tracking-wide text-lg font-secundary Section-content text-center leading-7 w-3/4">
         
        </p> */}
      </div>
    </div>
  )
}

export default Biography
