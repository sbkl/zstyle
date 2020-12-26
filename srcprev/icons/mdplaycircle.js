import React from "react"
import Svg, { Path } from "react-native-svg"


const mdplaycircle = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z" />
		</Svg>

)

export default mdplaycircle
