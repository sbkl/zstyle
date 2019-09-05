import React, { Component } from "react"
import { TouchableHighlight, Dimensions } from "react-native"
import compile from "../compilation"

export default class ZTouchableHighlight extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zstyles: {}
		}
		this._component = {}
	}
	static defaultProps = {
		zstyle: "",
		zref: () => {}
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
		let { style, ...rest } = this.props
		return (
			<TouchableHighlight
				onLayout={this.compileStyles}
				ref={component => (this._component = component)}
				style={[this.state.zstyles, style]}
				{...rest}
			>
				{this.props.children}
			</TouchableHighlight>
		)
	}
}
