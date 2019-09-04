import flex from "./flex"
import position from "./position"
import overflow from "./overflow"
import text from "./text"
import direction from "./direction"
import display from "./display"
import resizeMode from "./resizeMode"

let utilities = {}

export default Object.assign(flex, position, overflow, text, utilities, direction, display, resizeMode)
