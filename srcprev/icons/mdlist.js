import React from "react"
import Svg, { Path } from "react-native-svg"


const mdlist = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M80 280h256v48H80zm0-96h320v48H80zm0-96h352v48H80zM80 376h288v48H80z" />
		</Svg>

)

export default mdlist
