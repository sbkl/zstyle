import React, { Component } from 'react';

import options from '../../../../zstyle';

import { TouchableOpacity } from 'react-native';

import compile from '../compilation';

export default class ZTouchableOpacity extends Component {
    static defaultProps = {
        zstyle: '',
        zref: () => {}
    }
    componentWillMount() {
        this._component = {};
    }
    componentDidMount() {
        this.props.zref(this._component);
    }
    render() {

        let {zstyle, style, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        styleArray.forEach(style => options.components[style] && options.components[style].split(' ').forEach(object => styleArray.push(object)));

        return (
            <TouchableOpacity ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}>
            {
                this.props.children
            }
            </TouchableOpacity>
        )
        
    }
}