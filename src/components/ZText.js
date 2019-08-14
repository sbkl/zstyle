import React, { Component } from 'react';
import {
    Text,
    Animated,
    Dimensions
} from 'react-native';
import compile from '../compilation';

export default class ZText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zstyles: {}
        }
        this._component = {};
    }
    static defaultProps = {
        zstyle: '',
        animated: false,
        zref: () => {},
        text: null
    }
    componentDidMount() {
        this.props.zref(this._component);
        this.compileStyles();
    }
    onLayout = () => {
        this.compileStyles();
    }
    compileStyles = () => {
        this.setState({
            zstyles: compile(this.props.zstyle, Dimensions.get('window').width)
        })
    }
    render() {
        let {
            style,
            animated,
            ...rest
        } = this.props;
        if(animated) {
            return (
                <Animated.Text onLayout={this.compileStyles} ref={component => this._component = component} style={[this.state.zstyles, animated, style]} {...rest}>{this.props.text ? this.props.text : this.props.children}</Animated.Text>
            )
        } else {
            return (
                <Text ref={component => this._component = component} style={[this.state.zstyles, style]} {...rest}>{this.props.text ? this.props.text : this.props.children}</Text>
            )
        }
    }
}