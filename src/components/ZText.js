import React, { Component } from 'react';

import { Text, Animated } from 'react-native';

import compile from '../compilation';

export default class ZText extends Component {
    static defaultProps = {
        zstyle: '',
        animated: false
    }
    render() {

        let {zstyle, style, animated, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        if(animated) {
            return (
                <Animated.Text style={[compile(styleArray), style]} {...rest}/>
            )
        } else {
            return (
                <Text style={[compile(styleArray), style]} {...rest}/>
            )
        }
    }
}