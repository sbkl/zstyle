import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { ZView } from "../../index";
import icons from "../icons/expo";
import compile from "../compilation";

function XIcon(props) {
  const [iconStyles, setIconStyles] = useState(null);
  const [wrapperStyle, setWrapperStyle] = useState(null);
  const [Icon, setIcon] = useState({ component: null });
  const [iconName, setIconName] = useState(null);
  const { zstyle, style, ...rest } = props;

  useEffect(() => {
    initIcon();
    let compiledStyles = compile(zstyle, Dimensions.get("window").width);
    setIconStyles({
      color: compiledStyles.color,
      size: compiledStyles.fontSize,
    });
    delete compiledStyles.color;
    delete compiledStyles.fontSize;
    setWrapperStyle(compiledStyles);
  }, [zstyle]);

  const initIcon = () => {
    const iconSelected = zstyle.split(" ").filter((option) => {
      return icons[option.split("-")[0]] != undefined;
    })[0];
    let [vendor, ...rest] = iconSelected.split("-");
    setIconName(rest.join("-"));
    setIcon({ component: icons[vendor] });
  };

  if (Icon.component) {
    return (
      <ZView style={{ ...wrapperStyle, ...style }} {...rest}>
        <Icon.component
          name={iconName}
          size={iconStyles.size}
          color={iconStyles.color}
        />
      </ZView>
    );
  } else {
    return null;
  }
}
export default XIcon;
