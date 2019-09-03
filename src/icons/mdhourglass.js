import React from "react"
import Svg, { Path } from "react-native-svg"


const mdhourglass = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M128 48v122.8h.2l-.2.2 85.3 85-85.3 85.2.2.2h-.2V464h256V341.4h-.2l.2-.2-85.3-85.2 85.3-85-.2-.2h.2V48H128zm213.3 303.9v71.5H170.7v-71.5l85.3-85.2 85.3 85.2zM256 245.4l-85.3-85.2V87.6h170.7v72.5L256 245.4z" />
		</Svg>

)

export default mdhourglass
