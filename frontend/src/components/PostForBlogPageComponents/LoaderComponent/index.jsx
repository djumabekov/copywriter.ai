import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={10}
    width={props.width}
    height={props.height}
    viewBox="0 0 550 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="20" rx="10" ry="10" width={props.block_width} height={props.block_height} /> 
    <rect x="5" y="110" rx="10" ry="10" width={props.block_width} height={props.block_height} /> 
    <rect x="5" y="200" rx="10" ry="10" width={props.block_width} height={props.block_height} /> 
  </ContentLoader>
)

export default Loader