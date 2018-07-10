import React, { Component } from 'react';

import { Text } from 'react-native';

import compile from '../compilation';

export default class ZText extends Component {

    render() {

        let {zstyle, style, ...rest } = this.props;

        let styleArray = zstyle ? zstyle.split(' ') : [];

        return (
            <Text style={[compile(styleArray), style]} {...rest}/>
        )
    }
}