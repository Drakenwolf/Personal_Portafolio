import * as React from "react"

import Layout from "../components/Layout"
import Presentation from "../components/Presentation"
import Seo from "../components/seo"
import SectionDivider from "../components/SectionDivider"
import Biography from "../components/Biography"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Layout>
      <section id="home" className="snap-start">
        <div className="min-h-screen pt-44 pb-48">
          <Presentation />
        </div>
        <SectionDivider />
      </section>

      <section id="biography" className="">
        <div className="min-h-screen pt-44 pb-48">
          <Biography />
        </div>
        <SectionDivider />
      </section>
      <section id="projects" className="">
        <div className="min-h-screen pt-44 pb-48">
          <Presentation />
        </div>
        <SectionDivider />
      </section>
      <section id="services" className="">
        <div className="min-h-screen pt-44 pb-48">
          <Presentation />
        </div>
        <SectionDivider />
      </section>
      <section id="blog" className="">
        <div className="min-h-screen pt-44 pb-48">
          <Presentation />
        </div>
        <SectionDivider />
      </section>
      <section id="contact" className="">
        <div className="min-h-screen pt-44 pb-48">
          <Presentation />
        </div>
        <SectionDivider />
      </section>
    </Layout>
  </>
)

export default IndexPage
