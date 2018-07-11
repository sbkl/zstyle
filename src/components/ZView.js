import React, { Component } from 'react';

import { View, Animated } from 'react-native';

import compile from '../compilation';

export default class ZView extends Component {
    static defaultProps = {
        zstyle: '',
        animated: false
    }
    render() {

        let {zstyle, style, animated, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        if(animated) {
            return (
                <Animated.View style={[compile(styleArray), style]} {...rest}>
                    {
                        this.props.children
                    }
                </Animated.View>
            )
        } else {
            return (
                <View style={[compile(styleArray), style]} {...rest}>
                    {
                        this.props.children
                    }
                </View>
            )
        }        
    }
}