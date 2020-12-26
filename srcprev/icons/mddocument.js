import React from "react"
import Svg, { Path } from "react-native-svg"


const mddocument = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
		</Svg>

)

export default mddocument
