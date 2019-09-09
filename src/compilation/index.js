import stylePrefixes from "./stylePrefixes"
import options from "../../../../zstyle"
import parseColors from "./parseColors"
import parseStyles from "./parseStyles"

options.colors = parseColors(options.colors)
let parsedStyles = parseStyles(stylePrefixes, options)

export default (zstyles, screenWidth) => {
	let stylesArray = zstyles.split(" ")
	stylesArray.forEach(
		style =>
			options.components[style] &&
			options.components[style]
				.split(" ")
				.forEach(object => stylesArray.push(object))
	)
	let { screens } = options
	let screenStyles = Object.keys(screens).reduce((carry, screen) => {
		let screenStyles = stylesArray.filter(style =>
			style.startsWith(screen + ":")
		)
		if (screenStyles.length > 0) {
			let screenObject = {}
			screenObject.width = screens[screen]
			screenObject.screen = screen
			screenObject.styles = screenStyles.map(style =>
				style.replace(screen + ":", "")
			)
			carry.push(screenObject)
		}
		return carry
	}, [])
	screenStyles.sort((a, b) => (a.width > b.width ? 1 : -1))
	let finalStylesArray = stylesArray.filter(style => !style.includes(":"))
	screenStyles.forEach(style => {
		if (style.width <= screenWidth) {
			finalStylesArray = finalStylesArray.concat(style.styles)
		}
	})
	return finalStylesArray
		.map(style => {
			if (style.includes("leading")) {
				let prefix = stylePrefixes.fontSizes.fontSize.prefix
				let fontSizesKeyArray = Object.keys(options.fontSizes).map(
					key => prefix + key
				)
				if (stylesArray.some(style => fontSizesKeyArray.includes(style))) {
					let fontSizeKey = ""
					stylesArray.forEach(style => {
						if (fontSizesKeyArray.includes(style)) {
							fontSizeKey = style.replace(prefix, "")
						}
					})
					return {
						lineHeight:
							parsedStyles[style].lineHeight * options.fontSizes[fontSizeKey]
					}
				} else {
					return { lineHeight: parsedStyles[style].lineHeight * 16 }
				}
			}
			return parsedStyles[style]
		})
		.reduce((result, current) => {
			return Object.assign(result, current)
		}, {})
}
