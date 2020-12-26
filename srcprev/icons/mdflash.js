import React from "react"
import Svg, { Path } from "react-native-svg"


const mdflash = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M160 48v224h64v192l128-256h-64l64-160H160z" />
		</Svg>

)

export default mdflash
