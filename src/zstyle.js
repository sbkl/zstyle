import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    components: {

    },
    colors: {

        'transparent': 'transparent',

        'black': '#22292f',
        'grey-darkest': '#3d4852',
        'grey-darker': '#606f7b',
        'grey-dark': '#8795a1',
        'grey': '#b8c2cc',
        'grey-light': '#dae1e7',
        'grey-lighter': '#f1f5f8',
        'grey-lightest': '#f8fafc',
        'white': '#ffffff',

        'red-darkest': '#3b0d0c',
        'red-darker': '#621b18',
        'red-dark': '#cc1f1a',
        'red': '#e3342f',
        'red-light': '#ef5753',
        'red-lighter': '#f9acaa',
        'red-lightest': '#fcebea',

        'orange-darkest': '#462a16',
        'orange-darker': '#613b1f',
        'orange-dark': '#de751f',
        'orange': '#f6993f',
        'orange-light': '#faad63',
        'orange-lighter': '#fcd9b6',
        'orange-lightest': '#fff5eb',

        'yellow-darkest': '#453411',
        'yellow-darker': '#684f1d',
        'yellow-dark': '#f2d024',
        'yellow': '#ffed4a',
        'yellow-light': '#fff382',
        'yellow-lighter': '#fff9c2',
        'yellow-lightest': '#fcfbeb',

        'green-darkest': '#0f2f21',
        'green-darker': '#1a4731',
        'green-dark': '#1f9d55',
        'green': '#38c172',
        'green-light': '#51d88a',
        'green-lighter': '#a2f5bf',
        'green-lightest': '#e3fcec',

        'teal-darkest': '#0d3331',
        'teal-darker': '#20504f',
        'teal-dark': '#38a89d',
        'teal': '#4dc0b5',
        'teal-light': '#64d5ca',
        'teal-lighter': '#a0f0ed',
        'teal-lightest': '#e8fffe',

        'blue-darkest': '#002b3c',
        'blue-darker': '#005779',
        'blue-dark': '#0074a1',
        'blue': '#0092ca',
        'blue-light': '#32a7d4',
        'blue-lighter': '#66bddf',
        'blue-lightest': '#b2deef',

        'indigo-darkest': '#191e38',
        'indigo-darker': '#2f365f',
        'indigo-dark': '#5661b3',
        'indigo': '#6574cd',
        'indigo-light': '#7886d7',
        'indigo-lighter': '#b2b7ff',
        'indigo-lightest': '#e6e8ff',

        'purple-darkest': '#21183c',
        'purple-darker': '#382b5f',
        'purple-dark': '#794acf',
        'purple': '#9561e2',
        'purple-light': '#a779e9',
        'purple-lighter': '#d6bbfc',
        'purple-lightest': '#f3ebff',

        'pink-darkest': '#451225',
        'pink-darker': '#6f213f',
        'pink-dark': '#eb5286',
        'pink': '#f66d9b',
        'pink-light': '#fa7ea8',
        'pink-lighter': '#ffbbca',
        'pink-lightest': '#ffebef',
    },
    fontSizes: {
        'xs': 11,
        'sm': 13,
        'base': 16,
        'lg': 18,
        'xl': 20,
        '2xl': 25,
        '3xl': 30,
        '4xl': 40,
        '5xl': 50
    },
    fontWeights: {
        'hairline': '100',
        'thin': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
    },
    borderRadius: {
        'rounded': 5,
        'rounded-lg': 10,
        'rounded-xl': 20,
        'rounded-full': 999
    },
    margin: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
    },
    padding: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40
    },
    width: {
        '40': 40,
        '60': 60,
        '80': 80,
        '100': 100,
        '120': 120,
        '160': 160,
        '200': 200,
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '2/3': '66.66%',
        '3/4': '75%',
        'full': '100%',
        'screen': width
    },
    height: {
        '40': 40,
        '60': 60,
        '80': 80,
        '100': 100,
        '120': 120,
        '160': 160,
        '200': 200,
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '2/3': '66.66%',
        '3/4': '75%',
        'full': '100%',
        'screen': height
    },
    borderWidth: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4
    },
    zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
    },
    lineHeight: {
        'tight': 1,
        'normal': 1.25,
        'loose': 1.5
    },
    letterSpacing: {
        'tight': -1,
        'normal': 0,
        'wide': 1
    },
    opacity: {
        '100': 1,
        '75': 0.75,
        '50': 0.5,
        '25': 0.25,
        '0': 0
    }
}