import React from "react"
import Svg, { Path } from "react-native-svg"


const mdegg = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M256 32C185.6 32 80 165.2 80 288.9S150.4 480 256 480s176-67.4 176-191.1S326.4 32 256 32z" />
		</Svg>

)

export default mdegg
