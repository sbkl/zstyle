import colours from '../colours'

export default {
  color: {
    ...colours('color')
  },
  size: ([size]) => ({
    fontSize: isNaN(parseFloat(size)) ? 16 : parseFloat(size)
  }),
  uppercase: () => ({textTransform: 'uppercase'}),
  lowercase: () => ({textTransform: 'lowercase'}),
  capitalize: () => ({textTransform: 'capitalize'}),
  decoration: {
    none: {
      textDecorationLine: 'none'
    },
    underline: {
      textDecorationLine: 'underline'
    },
    through: {
      textDecorationLine: 'line-through'
    },
    both: {
      textDecorationLine: 'underline line-through'
    },        
    solid: {
      textDecorationStyle: 'solid'
    },
    double: {
      textDecorationStyle: 'double'
    },
    dotted: {
      textDecorationStyle: 'dotted'
    },
    dashed: {
      textDecorationStyle: 'dashed',  
    },
  },
  font: {
    hairline: {
      fontWeight: "100",
    },
    thin: {
      fontWeight: "200",
    },
    light: {
      fontWeight: "300",
    },
    normal: {
      fontWeight: "400",
    },
    medium: {
      fontWeight: "500",
    },
    semibold: {
      fontWeight: "600",
    },
    bold: {
      fontWeight: "700",
    },
    extrabold: {
      fontWeight: "800",
    },
    black: {
      fontWeight: "900",
    },
    italic: {
      fontStyle: 'italic'
    }
  },
  align: {
    x: {
      auto: {
        textAlign: "auto"
      },
      left: {
        textAlign: "left"
      },
      right: {
        textAlign: "right"
      },
      center: {
        textAlign: "center"
      },
      justify: {
        textAlign: "justify"
      },
    },
    y: {
      auto: {
        textAlignVertical: "auto"
      },
      top: {
        textAlignVertical: "top"
      },
      bottom: {
        textAlignVertical: "bottom"
      },
      center: {
        textAlignVertical: "center"
      },
    }
  },
}