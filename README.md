# ZSTYLE
A utility-first styling library for React Native

<a href="https://img.shields.io/badge/build-alpha-green.svg"><img src="https://img.shields.io/badge/build-alpha-green.svg"></a>

## About zstyle

zstyle is a utility-first styling library for React Native largely inspired by [Tailwindcss](https://tailwindcss.com/), a utility-first CSS framework for rapid UI development.

## Installation

### 1 . Install the package:
```bash
yarn add react-native-zstyle
```

### 2 . Install the following dependencies:

Reanimated
```bash
yarn add react-native-reanimated
```
```bash
yarn add react-native-gesture-handler
```
```bash
yarn add react-native-svg
```
### 3 . Link the dependencies:

React Native 0.60 and higher
```bash
cd ios && pod install && cd ..
```
React Native 0.59 and lower
```bash
react-native link react-native-reanimated
react-native link react-native-gesture-handler
react-native link react-native-svg
```
### 4 . Create a Zstyle config file:

Copy the 'zstyle.js' file into the root folder of your React Native project:

```bash
cp ./node_modules/react-native-zstyle/src/zstyle.js .
```

zstyle comes with standard utilities out of the box with some of them being customisable such as colors, margins, paddings, etc... 

The 'zstyle.js' file is the place to setup all your customs styling utilities that will be available in the Z components everywhere in your project.

## Documentation

A first version of the official documentation is available here: [react-native-zstyle.com](https://react-native-zstyle.com/)

This documentation is explaining the concept of the library as well as listing all availble utilities.

This is a work in progress it still need to get styling examples you can achieve with zstyle.

## License

The zstyle library is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
