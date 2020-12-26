import React from "react"
import Svg, { Path } from "react-native-svg"


const mdexpand = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M396.795 396.8H320V448h128V320h-51.205zm.005-281.595V192H448V64H320v51.205zm-281.595-.005H192V64H64v128h51.205zm-.005 281.595V320H64v128h128v-51.205z" />
		</Svg>

)

export default mdexpand
