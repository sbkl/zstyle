import React from "react"
import Svg, { Path } from "react-native-svg"


const mdcrop = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M352 312.7h37.8V160c0-20.8-17-37.8-37.8-37.8H199.3V160H352v152.7zm-192 33.5V48h-37.8v74.2H48V160h74.2v186.2c0 20.8 17 37.8 37.8 37.8h192v80h37.8v-80H464v-37.8H160z" />
		</Svg>

)

export default mdcrop
