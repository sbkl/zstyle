import React, { Component } from "react";
import { TextInput, Dimensions } from "react-native";
import compile from "../compilation";

export default class ZTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zstyles: {},
    };
  }
  static defaultProps = {
    zstyle: "",
  };
  focus = () => {
    this.textInput.focus();
  };
  blur = () => {
    this.textInput.blur();
  };
  componentDidMount() {
    if (this.props.zref != null) {
      this.props.zref(this);
    }
    this.compileStyles();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.zstyle != this.props.zstyle) {
      this.compileStyles();
    }
  }
  onLayout = () => {
    this.compileStyles();
  };
  compileStyles = () => {
    this.setState({
      zstyles: compile(this.props.zstyle, Dimensions.get("window").width),
    });
  };
  render() {
    let { style, ...rest } = this.props;
    return (
      <TextInput
        onLayout={this.compileStyles}
        ref={(input) => (this.textInput = input)}
        style={[this.state.zstyles, style]}
        {...rest}
      />
    );
  }
}
