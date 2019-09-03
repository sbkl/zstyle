import React from "react"
import Svg, { Path } from "react-native-svg"


const mdfunnel = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M208 400h96v-47.994h-96V400zM32 112v47.994h448V112H32zm80 168.783h288v-49.555H112v49.555z" />
		</Svg>

)

export default mdfunnel
