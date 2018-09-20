import React, { Component } from 'react';

import options from '../../../../zstyle';

import { Image, Animated } from 'react-native';

import compile from '../compilation';

export default class ZImage extends Component {
    static defaultProps = {
        zstyle: '',
        animated: false,
        CachedWith: false,
        zref: () => {}
    }
    componentWillMount() {
        this._component = {};
    }
    componentDidMount() {
        this.props.zref(this._component);
    }
    render() {

        let {zstyle, style, animated, CachedWith, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        styleArray.forEach(style => options.components[style] && options.components[style].split(' ').forEach(object => styleArray.push(object)));

        if (CachedWith) {
            return (
                <CachedWith ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}/>
            )                     
        } else if(animated) {
            return (
                <Animated.Image ref={component => this._component = component} style={[compile(styleArray), animated, style]} {...rest}/>
            )
        } else {
            return (
                <Image ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}/>
            )
        }
    }
}