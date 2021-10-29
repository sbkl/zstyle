import { useEffect, useState } from "react";
import utilities from "./utilities";

function useStyles(style) {
  const [styleState, setStyleState] = useState({});
  const [textStyleState, setTextStyleState] = useState({});
  const [spaceStyleState, setSpaceStyleState] = useState({});
  const [transformStyleState, setTransformStyleState] = useState({});

  useEffect(() => {
    if (style) {
      if (typeof style === "string") {
        const {
          initialStyle,
          textStyles,
          spaceStyles,
          transformStyle,
        } = transformString(style);
        setStyleState(initialStyle);
        setTextStyleState(textStyles);
        setSpaceStyleState(spaceStyles);
        setTransformStyleState(transformStyle);
      } else if (Array.isArray(style)) {
        style.forEach((item) => {
          if (typeof item === "string") {
            const {
              initialStyle,
              textStyles,
              spaceStyles,
              transformStyle,
            } = transformString(item);
            setStyleState({ ...styleState, ...initialStyle });
            setTextStyleState({ ...textStyleState, ...textStyles });
            setSpaceStyleState({ ...spaceStyleState, ...spaceStyles });
            setTransformStyleState({
              ...transformStyleState,
              ...transformStyle,
            });
          } else if (typeof item === "object") {
            setStyleState({ ...styleState, ...item });
          }
        });
      }
    } else {
      setStyleState({});
    }
  }, [style]);

  function reduceStyle(object, string, init) {
    let negative = false;
    if (string.charAt(0) === "-") {
      negative = true;
      string = string.substring(1);
    }

    const [prefix, ...other] = string.split("-");
    if (object[prefix] != undefined) {
      if (typeof object[prefix] === "function") {
        return object[prefix](other, negative);
      } else if (typeof object[prefix] === "object") {
        if (other.length) {
          return reduceStyle(object[prefix], other.join("-"), init);
        }
        if (
          typeof object[prefix][Object.keys(object[prefix])[0]] === "object"
        ) {
          throw Error(`${init} style not found within ZStyle utilities`);
        }
        return object[prefix];
      } else {
        return object;
      }
    }
    return undefined;
  }

  function transformString(style) {
    const initialArray = style.split(" ");
    const initialStyle = initialArray
      .filter(
        (item) =>
          !item.includes("text-") &&
          !item.includes("font-") &&
          !item.includes("space-")
      )
      .reduce((carry, item) => {
        const output = reduceStyle(utilities, item, item);
        if (output != undefined) {
          carry = { ...carry, ...output };
        }
        return carry;
      }, {});

    const textArray = initialArray.filter(
      (item) => item.includes("text-") || item.includes("font-")
    );

    const textStyles = textArray.reduce((carry, textStyle) => {
      const output = reduceStyle(utilities, textStyle, textStyle);
      if (output != undefined) {
        carry = { ...carry, ...output };
      }
      return carry;
    }, {});

    const spaceArray = initialArray.filter((item) => item.includes("space-"));

    const spaceStyles = spaceArray.reduce((carry, spaceStyle) => {
      const output = reduceStyle(utilities, spaceStyle, spaceStyle);
      if (output != undefined) {
        carry = { ...carry, ...output };
      }
      return carry;
    }, {});

    const transformArray = initialArray.filter(
      (item) =>
        item.includes("rotate-") ||
        item.includes("scale-") ||
        item.includes("translate-") ||
        item.includes("skew-")
    );
    const transformStyle = transformArray.length
      ? utilities.transform(transformArray)
      : {};
    return { initialStyle, textStyles, spaceStyles, transformStyle };
  }

  return {
    styles: styleState,
    textStyle: textStyleState,
    spaceStyle: spaceStyleState,
    transformStyle: transformStyleState,
  };
}

export default useStyles;
