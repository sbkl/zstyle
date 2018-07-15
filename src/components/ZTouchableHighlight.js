import React, { Component } from 'react';

import { TouchableHighlight } from 'react-native';

import compile from '../compilation';

export default class ZTouchableHighlight extends Component {
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

        return (
            <TouchableHighlight ref={component => this._component = component} style={[compile(styleArray), style]} {...rest}>
            {
                this.props.children
            }
            </TouchableHighlight>
        )
        
    }
}