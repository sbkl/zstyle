import stylePrefixes from './stylePrefixes';
import options from '../../../../zstyle';
import parseColors from './parseColors';
import parseStyles from './parseStyles';

options.colors = parseColors(options.colors);
let parsedStyles = parseStyles(stylePrefixes, options)

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
            return { lineHeight: (parsedStyles[style].lineHeight * options.fontSizes[fontSizeKey]) }
        } else {
            return { lineHeight: parsedStyles[style].lineHeight * 16 }
        }
    }
    return parsedStyles[style];
});