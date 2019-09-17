import React, { Component } from "react"
import { KeyboardAvoidingView, Dimensions } from "react-native"
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
			<KeyboardAvoidingView
				onLayout={this.compileStyles}
				ref={component => (this._component = component)}
				style={[this.state.zstyles, style]}
				{...rest}
			>
				{this.props.children}
			</KeyboardAvoidingView>
		)
	}
}
