import React from "react"
import Svg, { Path } from "react-native-svg"


const mdmenu = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />
		</Svg>

)

export default mdmenu
