import { Dimensions } from 'react-native';
import options from '../../../zstyle';
import utilities from './utilities';

const { width } = Dimensions.get('window');

const styles = {
    opacity: {
        opacity: {
            prefix: 'opacity-'
        }
    },
    margin: {
        margin: {
            prefix: 'm-'
        },
        marginHorizontal: {
            prefix: 'mx-'
        },
        marginVertical: {
            prefix: 'my-'
        },
        marginLeft: {
            prefix: 'ml-'
        },
        marginRight: {
            prefix: 'mr-'
        },
        marginTop: {
            prefix: 'mt-'
        },
        marginBottom: {
            prefix: 'mb-'
        },
        marginStart: {
            prefix: 'ms-'
        },
        marginEnd: {
            prefix: 'me-'
        }
    },
    padding: {
        padding: {
            prefix: 'p-'
        },
        paddingHorizontal: {
            prefix: 'px-'
        },
        paddingVertical: {
            prefix: 'py-'
        },
        paddingLeft: {
            prefix: 'pl-'
        },
        paddingRight: {
            prefix: 'pr-'
        },
        paddingTop: {
            prefix: 'pt-'
        },
        paddingBottom: {
            prefix: 'pb-'
        }
    },
    width: {
        width: {
            prefix: 'w-'
        }
    },
    height: {
        height: {
            prefix: 'h-'
        }
    },
    colors: {
        backgroundColor: {
            prefix: 'bg-'
        },
        color: {
            prefix: 'text-'
        },
        borderColor: {
            prefix: 'border-'
        }
    },
    lineHeight: {
        lineHeight: {
            prefix: 'leading-'
        }
    },
    letterSpacing: {
        letterSpacing: {
            prefix: 'tracking-'
        }
    },
    borderRadius: {
        borderRadius: {
            prefix: ''
        }
    },
    fontSizes: {
        fontSize: {
            prefix: 'text-'
        }
    },
    fontWeights: {
        fontWeight: {
            prefix: 'font-'
        }
    },
    borderWidth: {
        borderWidth: {
            prefix: 'border-'
        },
        borderLeftWidth: {
            prefix: 'border-l-'
        },
        borderRightWidth: {
            prefix: 'border-r-'
        },
        borderTopWidth: {
            prefix: 'border-t-'
        },
        borderBottomWidth: {
            prefix: 'border-b-'
        },
        borderStartWidth: {
            prefix: 'border-s-'
        },
        borderEndWidth: {
            prefix: 'border-e-'
        }
    },
    zIndex: {
        zIndex: {
            prefix: 'z-'
        }
    }
}

let parseColors = () => {
    let colors = {}
    Object.keys(options.colors).forEach((color) => {
        if (typeof options.colors[color] != 'string') {
            Object.keys(options.colors[color]).forEach(shade => {
                colors[`${color}-${shade}`] = options.colors[color][shade]
            })
        } else {
            colors[color] = options.colors[color]
        }
    })
    return colors
}
options.colors = parseColors()

let transformedStyles = Object.keys(styles).reduce((carry, style) => {
    Object.keys(styles[style]).forEach(styleObject => {
        options[style] != null && Object.keys(options[style]).forEach(key => {
            let tmp = {}
            let prefix = styles[style][styleObject].prefix;
            tmp[`${prefix}${key}`] = {}
            tmp[`${prefix}${key}`][styleObject] = options[style][key];
            if (style === 'margin' || style === 'padding') {
                tmp[`-${prefix}${key}`] = {}
                tmp[`-${prefix}${key}`][styleObject] = -options[style][key];
            }
            carry = Object.assign(tmp, carry);
        })
    });
    return carry;
}, {});

let mergedStyles = Object.assign(
    transformedStyles,
    utilities
);

export default (stylesArray) => stylesArray.map(style => {
    if(style.includes('leading')) {
        let prefix = styles.fontSizes.fontSize.prefix;
        let fontSizesKeyArray = Object.keys(options.fontSizes).map(key => prefix + key);
        if(stylesArray.some(style => fontSizesKeyArray.includes(style))) {
            let fontSizeKey = '';
            stylesArray.forEach(style => {
                if(fontSizesKeyArray.includes(style)) {
                    fontSizeKey = style.replace(prefix, '');
                }
            });
            return { lineHeight: (mergedStyles[style].lineHeight * options.fontSizes[fontSizeKey]) }
        } else {
            return { lineHeight: mergedStyles[style].lineHeight * 16 }
        }
    }
    if (mergedStyles[style] && mergedStyles[style].hasOwnProperty('fontSize')) {
        return {
            fontSize: width * (mergedStyles[style].fontSize / 375)
        }
    }
    return mergedStyles[style];
});