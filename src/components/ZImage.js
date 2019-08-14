import React, { Component } from 'react';
import {
    Image,
    Animated,
    Dimensions
} from 'react-native';
import compile from '../compilation';

export default class ZImage extends Component {
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
        CachedWith: false,
        zref: () => {}
    }
    componentDidMount() {
        let {animated, CachedWith} = this.props
        this.compileStyles();
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
            CachedWith,
            ...rest
        } = this.props;
        if (animated && CachedWith) {            
            return (
                <Animated.View onLayout={this.compileStyles} ref={component => this._component = component} style={[this.state.zstyles, animated, style]}>
                    <CachedWith style={{width: '100%', height: '100%'}} {...rest}/>
                </Animated.View>
            )                     
        } else if (CachedWith) {            
            return (                
                <CachedWith onLayout={this.compileStyles} ref={component => this._component = component} style={[{width: '100%', height: '100%'}, this.state.zstyles, style]} {...rest}/>                             
            )
        } else if(animated) {
            return (
                <Animated.Image onLayout={this.compileStyles} ref={component => this._component = component} style={[{width: '100%', height: '100%'}, this.state.zstyles, animated, style]} {...rest}/>
            )
        } else {
            return (
                <Image onLayout={this.compileStyles} ref={component => this._component = component} style={[{width: '100%', height: '100%'}, this.state.zstyles, style]} {...rest}/>
            )
        }
    }
}