import React, { Component } from 'react';

import { TouchableHighlight } from 'react-native';

import compile from '../compilation';

export default class ZTouchableHighlight extends Component {
    static defaultProps = {
        zstyle: '',
    }
    render() {

        let {zstyle, style, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        return (
            <TouchableHighlight style={[compile(styleArray), style]} {...rest}>
            {
                this.props.children
            }
            </TouchableHighlight>
        )
        
    }
}