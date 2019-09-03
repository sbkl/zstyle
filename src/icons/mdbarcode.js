import React from "react"
import Svg, { Path } from "react-native-svg"


const mdbarcode = props => (
	
		<Svg width={props.size} height={props.size} fill={props.color} viewBox="0 0 512 512">
			<Path d="M88 128h48v256H88zm144 0h48v256h-48zm-72 16h48v224h-48zm144 0h48v224h-48zm72-16h48v256h-48z" />
			<Path d="M104 104V56H16v400h88v-48H64V104zm304-48v48h40v304h-40v48h88V56z" />
		</Svg>

)

export default mdbarcode
