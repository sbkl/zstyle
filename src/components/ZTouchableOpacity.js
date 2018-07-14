import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native';

import compile from '../compilation';

export default class ZTouchableOpacity extends Component {
    static defaultProps = {
        zstyle: '',
    }
    render() {

        let {zstyle, style, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        return (
            <TouchableOpacity style={[compile(styleArray), style]} {...rest}>
            {
                this.props.children
            }
            </TouchableOpacity>
        )
        
    }
}