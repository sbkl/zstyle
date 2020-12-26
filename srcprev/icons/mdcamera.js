import React from "react"
import Svg, { Path, Circle } from "react-native-svg"


const mdcamera = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Circle cx={256} cy={280} r={63} />
			<Path d="M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z" />
		</Svg>

)

export default mdcamera
