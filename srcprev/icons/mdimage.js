import React from "react"
import Svg, { Path } from "react-native-svg"


const mdimage = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M448 405.333V106.667C448 83.198 428.802 64 405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333zM181.333 288l53.334 64 74.666-96 96 128H106.667l74.666-96z" />
		</Svg>

)

export default mdimage
