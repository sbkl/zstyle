import React from "react"
import Svg, { Path } from "react-native-svg"


const mdshirt = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M320 64c-11.1 19.1-40.3 32-64 32s-52.9-12.9-64-32L64 96v96l77-16-13 272h256l-13-272 77 16V96L320 64z" />
		</Svg>

)

export default mdshirt
