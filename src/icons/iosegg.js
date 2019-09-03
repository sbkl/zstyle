import React from "react"
import Svg, { Path } from "react-native-svg"


const iosegg = props => (
  
    <Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
      <Path d="M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z" />
    </Svg>
  
)

export default iosegg