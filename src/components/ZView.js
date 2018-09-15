import React, { Component } from 'react';

import options from '../../../../zstyle';

import { View, Animated } from 'react-native';

import compile from '../compilation';

export default class ZView extends Component {
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

        let {zstyle, style, animated, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        styleArray.forEach(style => options.components[style] && options.components[style].split(' ').forEach(object => styleArray.push(object)));
        
        if(animated) {
            return (
                <Animated.View ref={component => this._component = component} style={[compile(styleArray), animated, style]} {...rest}>
                    {
                        this.props.children
                    }
                </Animated.View>
            )
        } else {
            return (
                <View ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}>
                    {
                        this.props.children
                    }
                </View>
            )
        }        
    }
}