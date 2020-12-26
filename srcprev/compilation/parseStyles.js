import utilities from '../utilities';

export default (stylePrefixes, options) => {
    let parsedStyles = Object.keys(stylePrefixes).reduce((carry, style) => {
        Object.keys(stylePrefixes[style]).forEach(styleObject => {
            options[style] != null && Object.keys(options[style]).forEach(key => {
                let tmp = {}
                let prefix = stylePrefixes[style][styleObject].prefix;
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
    return Object.assign(
        parsedStyles,
        utilities
    );
} 