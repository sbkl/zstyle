import React, { Component } from 'react';

import { Image, Animated } from 'react-native';

import compile from '../compilation';

export default class ZImage extends Component {
    static defaultProps = {
        zstyle: '',
        animated: false
    }
    render() {

        let {zstyle, style, animated, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        if(animated) {
            return (
                <Animated.Image style={[compile(styleArray), style]} {...rest}/>
            )
        } else {
            return (
                <Image style={[compile(styleArray), style]} {...rest}/>
            )
        }
    }
}