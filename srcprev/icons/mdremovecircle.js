import React from "react"
import Svg, { Path } from "react-native-svg"


const mdremovecircle = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z" />
		</Svg>

)

export default mdremovecircle
