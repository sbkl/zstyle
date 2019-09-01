import React, { Component } from "react"
import { Dimensions } from "react-native"
import Icons from "../icons"
import compile from "../compilation"
import options from "../../../../zstyle"

export default class ZIcon extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zstyles: {},
			iconAttributes: {
				name: "ios-help",
				size: "",
				color: ""
			}
		}
	}
	static defaultProps = {
		zstyle: ""
	}
	componentDidMount() {
		this.compileStyles()
	}
	onLayout = () => {
		this.compileStyles()
	}
	compileStyles = () => {
		let styles = this.props.zstyle.split(" ")

		let iconAttributes = {}
		styles.forEach((style, index) => {
			if (Icons[style] != undefined) {
				iconAttributes.name = style
			} else if (style.startsWith("text-")) {
				let transformedStyle = style.replace("text-", "")
				if (options.fontSizes[transformedStyle] != undefined) {
					iconAttributes.size = options.fontSizes[transformedStyle]
				} else {
					if (options.colors[transformedStyle] != undefined) {
						iconAttributes.color = options.colors[transformedStyle]
					}
				}
			}
		})
		styles = styles.filter(style => {
			return style != iconAttributes.name && !style.startsWith("text-")
		})
		styles = styles.join(" ")

		this.setState({
			zstyles: compile(styles, Dimensions.get("window").width),
			iconAttributes
		})
	}
	render() {
		let { ...rest } = this.props
		let { iconAttributes, zstyles } = this.state
		let Icon = Icons[iconAttributes.name]
		return <Icon size={iconAttributes.size || 24} color={iconAttributes.color || ""} zstyle={zstyles || []} />
	}
}
