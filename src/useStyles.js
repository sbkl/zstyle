import { useEffect, useState } from "react";
import utilities from "./utilities";

function useStyles(style) {
  const [styleState, setStyleState] = useState({});

  useEffect(() => {
    if (style) {
      if (typeof style === "string") {
        setStyleState(transformString(style));
      } else if (Array.isArray(style)) {
        setStyleState(transformArray(style));
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
    return style.split(" ").reduce((carry, item) => {
      const output = reduceStyle(utilities, item, item);
      if (output != undefined) {
        carry = { ...carry, ...output };
      }
      return carry;
    }, {});
  }

  function transformArray(style) {
    return style.reduce((carry, item) => {
      if (typeof item === "string") {
        carry = { ...carry, ...transformString(item) };
      } else if (typeof item === "object") {
        carry = { ...carry, ...item };
      }
      return carry;
    }, {});
  }
  return styleState;
}

export default useStyles;
