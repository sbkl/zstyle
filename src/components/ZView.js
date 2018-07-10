import React, { Component } from 'react';

import { View } from 'react-native';

import compile from '../compilation';

export default class ZView extends Component {

    render() {

        let {zstyle, style, ...rest } = this.props;

        let styleArray = zstyle ? zstyle.split(' ') : [];

        return (
            <View style={[compile(styleArray), style]} {...rest}>
                {
                    this.props.children
                }
            </View>
        )
    }
}