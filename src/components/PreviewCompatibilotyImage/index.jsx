import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px", height: "60px", width: "60px" }

  const {
    alt = "skill",
    childImageSharp,
    image,
    extension,
    publicURL,
  } = imageInfo

  if (image && childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    )
  } else if (childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    )
    // for svg
  } else if (!childImageSharp && extension === "svg") {
    return <img style={imageStyle} src={publicURL} alt={alt} />
  } else {
    console.log(imageInfo)
    return null
  }
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    extension: PropTypes.string,
    publicURL: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
