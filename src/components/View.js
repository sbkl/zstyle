import React, { useEffect, useState } from "react";
import { View as RNView } from "react-native";
import useStyles from "../useStyles";

const View = React.forwardRef(
  ({ children, style, inheritStyles, ...props }, ref) => {
    const [tagIndex, setTagIndex] = useState(0);

    const { styles, textStyle, spaceStyle, transformStyle } = useStyles(style);

    useEffect(() => {
      if (styles.flexDirection != undefined && Object.keys(spaceStyle).length) {
        const { flexDirection } = styles;
        if (
          flexDirection === "column-reverse" &&
          spaceStyle.marginTop != undefined
        ) {
          setTagIndex(children.length - 1);
        }
        if (
          flexDirection === "row-reverse" &&
          spaceStyle.marginLeft != undefined
        ) {
          setTagIndex(children.length - 1);
        }
      }
    }, [styles]);

    return (
      <RNView
        type="View"
        ref={ref}
        style={{ ...inheritStyles, ...textStyle, ...transformStyle, ...styles }}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const finalStyles =
              index === tagIndex ? textStyle : { ...textStyle, ...spaceStyle };
            const fontSize =
              inheritStyles && inheritStyles.fontSize
                ? { fontSize: inheritStyles.fontSize }
                : {};
            const fontWeight =
              inheritStyles && inheritStyles.fontWeight
                ? { fontWeight: inheritStyles.fontWeight }
                : {};
            const color =
              inheritStyles && inheritStyles.color
                ? { color: inheritStyles.color }
                : {};
            return React.cloneElement(child, {
              inheritStyles: {
                ...color,
                ...fontSize,
                ...fontWeight,
                ...finalStyles,
              },
            });
          }
          return child;
        })}
      </RNView>
    );
  }
);

View.displayName = "MyComponent";

export default View;
