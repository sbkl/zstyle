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
        let {animated, CachedWith} = this.props
        
        setTimeout(() => {
            if (animated && CachedWith) {
                this.props.zref(this._component._component);                
            } else if (CachedWith) {
                this.props.zref(this._component ? this._component.refs == null ? this._component : this._component.refs.cachedImage ? this._component.refs.cachedImage._viewRef : this._component._root : null);
            } else if (animated) {
                this.props.zref(this._component._component);
            } else {
                this.props.zref(this._component);
            }
        },250);
    }
    render() {

        let {zstyle, style, animated, CachedWith, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        styleArray.forEach(style => options.components[style] && options.components[style].split(' ').forEach(object => styleArray.push(object)));

        if (animated && CachedWith) {            
            return (
                <Animated.View ref={component => this._component = component} style={[compile(styleArray), animated, style]}>
                    <CachedWith style={{width: '100%', height: '100%'}} {...rest}/>
                </Animated.View>
            )                     
        } else if (CachedWith) {            
            return (                
                <CachedWith ref={component => this._component = component} style={[{width: '100%', height: '100%'}, compile(styleArray), style]} {...rest}/>                             
            )
        } else if(animated) {
            return (
                <Animated.Image ref={component => this._component = component} style={[{width: '100%', height: '100%'}, compile(styleArray), animated, style]} {...rest}/>
            )
        } else {
            return (
                <Image ref={component => this._component = component} style={[{width: '100%', height: '100%'}, compile(styleArray), style]} {...rest}/>
            )
        }
    }
}