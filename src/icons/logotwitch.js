import React from "react"
import Svg, { Path } from "react-native-svg"


const logotwitch = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96.001L192 416v-64h-80V80h304v208z" />
			<Path d="M320 143h48v129h-48zm-112 0h48v129h-48z" />
		</Svg>

)

export default logotwitch
