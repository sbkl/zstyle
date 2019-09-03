import React from "react"
import Svg, { Path } from "react-native-svg"


const iosnavigate = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336V256H128.3L352 160l-96 224z" />
		</Svg>

)

export default iosnavigate
