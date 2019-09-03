import React from "react"
import Svg, { Path } from "react-native-svg"


const ioscalendar = props => (
  
    <Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
      <Path d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zm224 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z" />
    </Svg>
  
)

export default ioscalendar