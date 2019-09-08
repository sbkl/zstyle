import React, { Component } from "react"
import { View, Animated, Dimensions } from "react-native"
import compile from "../compilation"

export default class ZView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zstyles: {}
		}
		this._component = {}
	}
	static defaultProps = {
		zstyle: "",
		animated: false,
		zref: () => {},
		reanimated: null
	}
	componentDidMount() {
		this.props.zref(this._component)
		this.compileStyles()
	}
	componentDidUpdate(prevProps) {
		if (prevProps.zstyle != this.props.zstyle) {
			this.compileStyles()
		}
	}
	onLayout = () => {
		this.compileStyles()
	}
	compileStyles = () => {
		this.setState({
			zstyles: compile(this.props.zstyle, Dimensions.get("window").width)
		})
	}
	render() {
		let { style, animated, reanimated, ...rest } = this.props
		if (animated) {
			return (
				<Animated.View
					onLayout={this.compileStyles}
					ref={component => (this._component = component)}
					style={[this.state.zstyles, animated, style]}
					{...rest}
				>
					{this.props.children}
				</Animated.View>
			)
		} else if (reanimated) {
			const [Transitioning, transition] = reanimated
			return (
				<Transitioning.View
					onLayout={this.compileStyles}
					ref={component => (this._component = component)}
					style={[this.state.zstyles, style]}
					{...transition}
					{...rest}
				>
					{this.props.children}
				</Transitioning.View>
			)
		} else {
			return (
				<View
					onLayout={this.compileStyles}
					ref={component => (this._component = component)}
					style={[this.state.zstyles, style]}
					{...rest}
				>
					{this.props.children}
				</View>
			)
		}
	}
}
