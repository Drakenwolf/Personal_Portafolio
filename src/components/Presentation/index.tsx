import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Presentation = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-col lg:flex-row flex justify-center">
        <div className="Presentation-right w-1/2 pr-20 relative">
          <div className="Presentation-img p-8 flex justify-center z-20">
            <StaticImage
              src="../../assets/images/avatar.jpg"
              width={400}
              className="z-20"
              height={500}
              quality={95}
              layout={"constrained"}
              formats={["auto", "webp", "avif"]}
              alt="Avatar"
            />
          </div>
          <div className="Presentation-img-background absolute w-11/12 block z-0" />
        </div>
        <div className="Presentation-left w-1/2">
          <h1 className="Section-title pb-10 mb-10 relative font-primary font-semibold text-7xl">
            Front end & Daap Developer
          </h1>
          <p className="mb-10 font-secundary Section-content">
            I am a web developer with an special interest in blockchain
            projects. I can create profesional websites. Gas efficient smart
            contracts and integrate them to your website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Presentation
