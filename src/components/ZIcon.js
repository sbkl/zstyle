import React, { Component } from "react"
import { Dimensions } from "react-native"
import Icons from "../icons"
import compile from "../compilation"
import options from "../../../../zstyle"
import { ZView } from "../../index"
export default class ZIcon extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zstyles: {},
			iconAttributes: {
				name: "ios-help",
				size: "",
				color: ""
			},
			customIcons: {}
		}
	}
	static defaultProps = {
		zstyle: ""
	}
	componentDidMount() {
		let customIcons = {}
		options.icons.forEach(icon => {
			let prefix = icon.prefix
			Object.keys(icon.icons).forEach(key => {
				customIcons[`${prefix}-${key}`] = icon.icons[key]
			})
		})
		this.setState({ customIcons }, () => {
			this.compileStyles()
		})
	}
	onLayout = () => {
		this.compileStyles()
	}
	compileStyles = () => {
		let zstyles = this.props.zstyle.split(" ")

		let iconAttributes = {}
		zstyles.forEach((style, index) => {
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
		if (iconAttributes.name === undefined) {
			zstyles.forEach((style, index) => {
				if (this.state.customIcons[style] != undefined) {
					iconAttributes.name = style
				}
			})
		}
		zstyles = zstyles.filter(style => {
			return style != iconAttributes.name && !style.startsWith("text-")
		})
		zstyles = zstyles.join(" ")

		this.setState({
			zstyles,
			iconAttributes
		})
	}
	render() {
		let { ...rest } = this.props
		let { iconAttributes, zstyles } = this.state
		let Icon = customIcons[iconAttributes.name] != undefined ? customIcons[iconAttributes.name] : Icons[iconAttributes.name] != undefined ? Icons[iconAttributes.name] : Icons["ios-help"]
		return (
			<ZView zstyle={zstyles || ""} {...rest}>
				<Icon size={iconAttributes.size || 24} color={iconAttributes.color || ""} />
			</ZView>
		)
	}
}
