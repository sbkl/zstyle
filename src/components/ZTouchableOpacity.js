import React, { Component } from 'react';
import {
    TouchableOpacity,
    Dimensions
} from 'react-native';
import compile from '../compilation';

export default class ZTouchableOpacity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zstyles: {}
        }
        this._component = {};
    }
    static defaultProps = {
        zstyle: '',
        zref: () => {}
    }
    componentDidMount() {
        this.props.zref(this._component);
        this.compileStyles();
    }
    onLayout = () => {
        this.compileStyles();
    }
    compileStyles = () => {
        this.setState({
            zstyles: compile(this.props.zstyle, Dimensions.get('window').width)
        })
    }
    render() {
        let {
            style,
            ...rest
        } = this.props;
        return (
            <TouchableOpacity onLayout={this.compileStyles} ref={component => this._component = component} style={[this.state.zstyles, style]} {...rest}>
            { this.props.children }
            </TouchableOpacity>
        )
    }
}