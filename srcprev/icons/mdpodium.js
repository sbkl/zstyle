import React from "react"
import Svg, { Path } from "react-native-svg"


const mdpodium = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M32 224h128v192H32zm160-96h128v288H192zm160 160h128v128H352z" />
		</Svg>

)

export default mdpodium
