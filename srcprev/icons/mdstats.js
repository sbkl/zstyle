import React from "react"
import Svg, { Path } from "react-native-svg"


const mdstats = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M176 64h64v384h-64zM80 336h64v112H80zm192-64h64v176h-64zm96-96h64v272h-64z" />
		</Svg>

)

export default mdstats
