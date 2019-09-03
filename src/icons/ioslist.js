import React from "react"
import Svg, { Path, Circle } from "react-native-svg"


const ioslist = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Circle cx={92} cy={256} r={28} />
			<Circle cx={92} cy={132} r={28} />
			<Circle cx={92} cy={380} r={28} />
			<Path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 124H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
		</Svg>

)

export default ioslist
