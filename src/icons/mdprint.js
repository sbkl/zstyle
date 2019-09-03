import React from "react"
import Svg, { Path } from "react-native-svg"


const mdprint = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z" />
		</Svg>

)

export default mdprint
