import React from "react"
import Svg, { Path } from "react-native-svg"


const mdresize = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M297.6 48l64.9 64.9-249.6 249.6L48 297.6V464h166.4l-64.9-64.9 249.6-249.6 64.9 64.9V48z" />
		</Svg>

)

export default mdresize
