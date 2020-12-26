import React from "react"
import Svg, { Path } from "react-native-svg"


const mdinformationcircle = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z" />
		</Svg>

)

export default mdinformationcircle
