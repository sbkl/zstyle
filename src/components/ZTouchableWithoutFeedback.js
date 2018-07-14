import React, { Component } from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import compile from '../compilation';

export default class ZTouchableWithoutFeedback extends Component {
    static defaultProps = {
        zstyle: '',
    }
    render() {

        let {zstyle, style, ...rest } = this.props;

        let styleArray = zstyle.split(' ');

        return (
            <TouchableWithoutFeedback style={[compile(styleArray), style]} {...rest}>
            {
                this.props.children
            }
            </TouchableWithoutFeedback>
        )
        
    }
}