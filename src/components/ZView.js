import React, { Component } from 'react';
import {
    View,
    Animated,
    Dimensions
} from 'react-native';
import compile from '../compilation';

export default class ZView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zstyles: {}
        }
        this._component = {};
    }
    static defaultProps = {
        zstyle: '',
        animated: false,
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
            animated,
            ...rest
        } = this.props;        
        if(animated) {
            return (
                <Animated.View onLayout={this.compileStyles} ref={component => this._component = component} style={[this.state.zstyles, animated, style]} {...rest}>
                    { this.props.children }
                </Animated.View>
            )
        } else {
            return (
                <View onLayout={this.compileStyles} ref={component => this._component = component} style={[this.state.zstyles, style]} {...rest}>
                    { this.props.children }
                </View>
            )
        }        
    }
}