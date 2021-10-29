import React from "react";
import { Text as RNText } from "react-native";
import useStyles from "../useStyles";

const Text = React.forwardRef(
  ({ children, style, inheritStyles, ...props }, ref) => {
    const { styles, textStyle, spaceStyle, transformStyle } = useStyles(style);

    return (
      <RNText
        ref={ref}
        style={{
          ...inheritStyles,
          ...textStyle,
          ...spaceStyle,
          ...transformStyle,
          ...styles,
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { inheritStyles: textStyle });
          }
          return child;
        })}
      </RNText>
    );
  }
);

export default Text;
