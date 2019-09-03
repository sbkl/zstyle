import React from "react"
import Svg, { Path } from "react-native-svg"


const mdwarning = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z" />
		</Svg>

)

export default mdwarning
