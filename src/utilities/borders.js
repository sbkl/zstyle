import config from '../config'
import colors from './colors'
import reduceValue from '../reduceValue'

const borderStyle = {
  solid: {
    borderStyle: "solid"
  },
  dotted: {
    borderStyle: "dotted"
  },
  dashed: {
    borderStyle: "dashed"
  },
}

const radiusSides = {
  t: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  b: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  l: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  r: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  dx: {
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  dy: {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  tl: {
    borderTopLeftRadius: 0
  },
  tr: {
    borderTopRightRadius: 0
  },
  bl: {
    borderBottomLeftRadius: 0
  },
  br: {
    borderBottomRightRadius: 0
  }
}

const borderSides = {
  t: {
    width: {
      borderTopWidth: 0
    },
    color: {
      borderTopColor: "black"
    }
  },
  b: {
    width: {
      borderBottomWidth: 0
    },
    color: {
      borderBottomColor: "black"
    }
  },
  l: {
    width: {
      borderLeftWidth: 0
    },
    color: {
      borderLeftColor: "black"
    }
  },
  r: {
    width: {
      borderRightWidth: 0
    },
    color: {
      borderRightColor: "black"
    }
  },
  x: {
    width: {
      borderRightWidth: 0,
      borderLeftWidth: 0
    },
    color: {
      borderRightColor: "black",
      borderLeftColor: "black"      
    }
  }, 
  y: {
    width: {
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    color: {
      borderTopColor: "black",
      borderBottomColor: "black"      
    }
  },   
  tl: {
    width: {
      borderTopWidth: 0,
      borderLeftWidth: 0
    },
    color: {
      borderTopColor: "black",
      borderLeftColor: "black"      
    }
  },
  tr: {
    width: {
      borderTopWidth: 0,
      borderRightWidth: 0
    },
    color: {
      borderTopColor: "black",
      borderRightColor: "black"      
    }
  },
  bl: {
    width: {
      borderBottomWidth: 0,
      borderLeftWidth: 0
    },
    color: {
      borderBottomColor: "black",
      borderLeftColor: "black"      
    }
  },
  br: {
    width: {
      borderBottomWidth: 0,
      borderRightWidth: 0
    },
    color: {
      borderBottomColor: "black",
      borderRightColor: "black"      
    }
  }

}

export default {
  rounded: (params) => {        
    let style = null
    if(Object.keys(radiusSides).includes(params[0])) {
      style = radiusSides[params[0]]
      params.splice(0,1)
    } else {
      style = { borderRadius: 0}
    }

    if(config.theme && config.theme.borderRadius) {
      const value = reduceValue(params, config.theme.borderRadius)
      if(typeof value === 'number') {
        Object.keys(style).forEach(key => {
          style[key] = value
        })
        return style;
      }
      return {}
    }
    if(config.theme && config.theme.extend && config.theme.extend.borderRadius) {
      const value = reduceValue(params, config.theme.extend.borderRadius)
      if(typeof value === 'number') {
        Object.keys(style).forEach(key => {
          style[key] = value
        })
        return style;
      }
    }
    if(!isNaN(parseFloat(params[0]))) {
      Object.keys(style).forEach(key => {
        style[key] = parseFloat(params[0])
      })
      return style;
    }
    if(params.length === 1 && params[0] === 'full') {
      return {
        borderRadius: 999
      }
    }
  },
  border: (params) => {
    if(params.length === 1 && borderStyle[params[0]] != undefined) {
      return borderStyle[params[0]]
    }
    let style = null
    let side = null;
    if(Object.keys(borderSides).includes(params[0])) {
      side = params[0]
      params.splice(0,1)
    }
    const colorValue = colors.getValue(params)
    if(typeof colorValue === 'string') {
      if(side) {
        style = borderSides[side].color
      } else {
        style = {
          borderColor: "black"
        }
      }  
      Object.keys(style).forEach(key => {
        style[key] = colorValue
      })
      return style;
    } else {
      if(side) {
        style = borderSides[side].width
      } else {
        style = {
          borderWidth: 0
        }
      }
      if(config.theme && config.theme.borderWidth) {
        const value = reduceValue(params, config.theme.borderWidth)
        if(typeof value === 'number') {
          Object.keys(style).forEach(key => {
            style[key] = value
          })
          return style;
        }
        return {}
      }
      if(config.theme && config.theme.extend && config.theme.extend.borderWidth) {
        const value = reduceValue(params, config.theme.extend.borderWidth)
        if(typeof value === 'number') {
          Object.keys(style).forEach(key => {
            style[key] = value
          })
          return style;
        }
      }
      if(!isNaN(parseFloat(params[0]))) {
        Object.keys(style).forEach(key => {
          style[key] = parseFloat(params[0])
        })
        return style;
      }
    }
  }  
}