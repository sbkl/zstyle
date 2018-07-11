import options from '../../../zstyle';

import utilities from './utilities';

const styles = {
    margin: {
        margin: {
            prefix: 'm'
        },
        marginHorizontal: {
            prefix: 'mx'
        },
        marginVertical: {
            prefix: 'my'
        },
        marginLeft: {
            prefix: 'ml'
        },
        marginRight: {
            prefix: 'mr'
        },
        marginTop: {
            prefix: 'mt'
        },
        marginBottom: {
            prefix: 'mb'
        }
    },
    padding: {
        padding: {
            prefix: 'p'
        },
        paddingHorizontal: {
            prefix: 'px'
        },
        paddingVertical: {
            prefix: 'py'
        },
        paddingLeft: {
            prefix: 'pl'
        },
        paddingRight: {
            prefix: 'pr'
        },
        paddingTop: {
            prefix: 'pt'
        },
        paddingBottom: {
            prefix: 'pb'
        }
    },
    width: {
        width: {
            prefix: 'w'
        }
    },
    height: {
        height: {
            prefix: 'h'
        }
    },
    colors: {
        backgroundColor: {
            prefix: 'bg'
        },
        color: {
            prefix: 'text'
        },
        borderColor: {
            prefix: 'border'
        }
    },
    borderRadius: {
        borderRadius: {
            prefix: ''
        }
    },
    fontSizes: {
        fontSize: {
            prefix: 'text'
        }
    },
    fontWeights: {
        fontWeight: {
            prefix: 'font'
        }
    },
    borderWidth: {
        borderWidth: {
            prefix: 'border'
        },
        borderLeftWidth: {
            prefix: 'border-l'
        },
        borderRightWidth: {
            prefix: 'border-r'
        },
        borderTopWidth: {
            prefix: 'border-t'
        },
        borderBottomWidth: {
            prefix: 'border-b'
        }
    }
}

let transformedStyles = Object.keys(styles).reduce((carry, style) => {

    Object.keys(styles[style]).forEach(styleObject => {

        Object.keys(options[style]).forEach(key => {

            let tmp = {}

            let prefix = styles[style][styleObject].prefix === '' ? '' : styles[style][styleObject].prefix + '-';

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

const mergedStyles = Object.assign(
    transformedStyles,
    utilities
);

export default (stylesArray) => stylesArray.map(style => mergedStyles[style]);