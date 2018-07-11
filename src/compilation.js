import options from '../../../zstyle';

import utilities from './utilities';

const styles = {
    margin: {
        margin: {
            prefix: 'm',
            suffix: ''
        },
        marginHorizontal: {
            prefix: 'mx',
            suffix: ''
        },
        marginVertical: {
            prefix: 'my',
            suffix: ''
        },
        marginLeft: {
            prefix: 'ml',
            suffix: ''
        },
        marginRight: {
            prefix: 'mr',
            suffix: ''
        },
        marginTop: {
            prefix: 'mt',
            suffix: ''
        },
        marginBottom: {
            prefix: 'mb',
            suffix: ''
        }
    },
    padding: {
        padding: {
            prefix: 'p',
            suffix: ''
        },
        paddingHorizontal: {
            prefix: 'px',
            suffix: ''
        },
        paddingVertical: {
            prefix: 'py',
            suffix: ''
        },
        paddingLeft: {
            prefix: 'pl',
            suffix: ''
        },
        paddingRight: {
            prefix: 'pr',
            suffix: ''
        },
        paddingTop: {
            prefix: 'pt',
            suffix: ''
        },
        paddingBottom: {
            prefix: 'pb',
            suffix: ''
        }
    },
    width: {
        width: {
            prefix: 'w',
            suffix: ''
        }
    },
    height: {
        height: {
            prefix: 'h',
            suffix: ''
        }
    },
    colors: {
        backgroundColor: {
            prefix: 'bg',
            suffix: ''
        },
        color: {
            prefix: 'text',
            suffix: ''
        },
        borderColor: {
            prefix: 'border',
            suffix: ''
        }
    },
    borderRadius: {
        borderRadius: {
            prefix: '',
            suffix: ''
        }
    },
    fontSizes: {
        fontSize: {
            prefix: 'text',
            suffix: ''
        }
    },
    fontWeights: {
        fontWeight: {
            prefix: 'font',
            suffix: ''
        }
    },
    borderWidth: {
        borderWidth: {
            prefix: '',
            suffix: ''
        },
        borderLeftWidth: {
            prefix: '',
            suffix: 'l'
        },
        borderRightWidth: {
            prefix: '',
            suffix: 'r'
        },
        borderTopWidth: {
            prefix: '',
            suffix: 't'
        },
        borderBottomWidth: {
            prefix: '',
            suffix: 'b'
        }
    }
}

let transformedStyles = Object.keys(styles).reduce((carry, style) => {

    Object.keys(styles[style]).forEach(styleObject => {

        Object.keys(options[style]).forEach(key => {

            let tmp = {}

            let prefix = styles[style][styleObject].prefix === '' ? '' : styles[style][styleObject].prefix + '-';

            let suffix = styles[style][styleObject].suffix === '' ? '' : styles[style][styleObject].suffix + '-';

            tmp[`${prefix}${suffix}${key}`] = {}

            tmp[`${prefix}${suffix}${key}`][styleObject] = options[style][key];

            if (style === 'margin' || style === 'padding') {
                tmp[`-${prefix}${suffix}${key}`] = {}
                tmp[`-${prefix}${suffix}${key}`][styleObject] = -options[style][key];
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