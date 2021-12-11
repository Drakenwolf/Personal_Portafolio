import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import PreviewCompatibleImage from "../PreviewCompatibilotyImage"

const SkillsTabs = ({ currentSkill }) => {
  const skillsQuery = useStaticQuery(graphql`
    query skillsQuery {
      frontend: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(svg)|(png)/" }
          relativeDirectory: { eq: "frontend" }
        }
      ) {
        edges {
          node {
            extension
            publicURL
            name
          }
        }
      }
      backend: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(svg)|(png)/" }
          relativeDirectory: { eq: "backend" }
        }
      ) {
        edges {
          node {
            extension
            publicURL
            name
          }
        }
      }
      web3: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(svg)|(png)/" }
          relativeDirectory: { eq: "web3" }
        }
      ) {
        edges {
          node {
            extension
            publicURL
            name
          }
        }
      }
      others: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(svg)|(png)/" }
          relativeDirectory: { eq: "others" }
        }
      ) {
        edges {
          node {
            extension
            publicURL
            name
          }
        }
      }
    }
  `)

  const { frontend, backend, web3, others } = skillsQuery

  const genSkills = skillsList => (
    <ul className="flex flex-wrap justify-center my-8 mx-auto w-3/4">
      {skillsList.map((skill, index) => {
        return (
          <li
            className="mx-7 my-5 Biography-tab-item flex flex-col flex flex-col justify-center items-center text-center"
            key={index}
          >
            <PreviewCompatibleImage imageInfo={skill.node} />
            <h4 className="font-secundary">{skill.node.name}</h4>
          </li>
        )
      })}
    </ul>
  )

  const frontendSkills = genSkills(frontend.edges)

  const backendSkills = genSkills(backend.edges)

  const web3Skills = genSkills(web3.edges)

  const othersSkills = genSkills(others.edges)

  const tabClass = index =>
    `Biography-tab ${currentSkill === index ? "flex flex-col" : "hidden"}`
  return (
    <div className="">
      <div className={tabClass(0)}>{frontendSkills}</div>
      <div className={tabClass(1)}>{backendSkills}</div>
      <div className={tabClass(2)}>{web3Skills}</div>
      <div className={tabClass(3)}>{othersSkills}</div>
    </div>
  )
}

export default SkillsTabs
