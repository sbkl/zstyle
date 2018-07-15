import React, { Component } from 'react';

import { Text, Animated } from 'react-native';

import compile from '../compilation';

export default class ZText extends Component {
    static defaultProps = {
        zstyle: '',
        animated: false,
        zref: () => {}
    }
    componentWillMount() {
        this._component = {};
    }
    componentDidMount() {
        this.props.zref(this._component);
    }
    render() {

        let {zstyle, style, animated, ...rest} = this.props;

        let styleArray = zstyle.split(' ');

        if(animated) {
            return (
                <Animated.Text ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}/>
            )
        } else {
            return (
                <Text ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}/>
            )
        }
    }
}