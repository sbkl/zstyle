import React from "react"
import Svg, { Path } from "react-native-svg"


const iossquare = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M388 416H124c-15.4 0-28-12.6-28-28V124c0-15.4 12.6-28 28-28h264c15.4 0 28 12.6 28 28v264c0 15.4-12.6 28-28 28z" />
		</Svg>

)

export default iossquare
