import config from 'react-native-zstyle/src/config'
import reduceValue from 'react-native-zstyle/src/reduceValue'

function setStyle(attribute, params, negative = false) {
  if(config.theme && config.theme[attribute]) {
    const value = reduceValue(params, config.theme[attribute])
    if(typeof value === 'number') {
      return {
        [attribute]: negative ? value * -1 : value
      }
    }
    return {}
  }
  if(config.theme && config.theme.spacing) {
    const value = reduceValue(params, config.theme.spacing)
    if(typeof value === 'number') {
      return {
        [attribute]: negative ? value * -1 : value
      }
    }
    return {}
  }
  if(config.theme && config.theme.extend && config.theme.extend[attribute]) {
    const value = reduceValue(params, config.theme.extend[attribute])
    if(typeof value === 'number') {
      return {
        [attribute]: negative ? value * -1 : value
      }
    }
  }
  if(config.theme && config.theme.extend && config.theme.extend.spacing) {
    const value = reduceValue(params, config.theme.extend.spacing)
    if(typeof value === 'number') {
      return {
        [attribute]: negative ? value * -1 : value
      }
    }
  }
  return {
    [attribute]: isNaN(parseFloat(params[0])) ? 0 : negative ? parseFloat(params[0]) * -1 : parseFloat(params[0])
  }
}

export default {
  space: {
    y: params => setStyle('marginTop', params),
    x: params => setStyle('marginLeft', params),
  },
  h: params => setStyle('height', params),
  max: {
    h: params => setStyle('maxHeight', params),
    w: params => setStyle('maxWidth', params),
  },
  min: {
    h: params => setStyle('minHeight', params),
    w: params => setStyle('minWidth', params),
  },
  w: params => setStyle('width', params),
  m: (params, negative) => setStyle('margin', params, negative),
  my: (params, negative) => setStyle('marginVertical', params, negative), 
  mx: (params, negative) => setStyle('marginHorizontal', params, negative), 
  ml: (params, negative) => setStyle('marginLeft', params, negative),
  mr: (params, negative) => setStyle('marginRight', params, negative), 
  mt: (params, negative) => setStyle('marginTop', params, negative), 
  mb: (params, negative) => setStyle('marginBottom', params, negative), 
  me: (params, negative) => setStyle('marginEnd', params, negative),     
  ms: (params, negative) => setStyle('marginStart', params, negative),
  p: (params, negative) => setStyle('padding', params, negative),
  py: (params, negative) => setStyle('paddingVertical', params, negative),
  px: (params, negative) => setStyle('paddingHorizontal', params, negative),
  pl: (params, negative) => setStyle('paddingLeft', params, negative),
  pr: (params, negative) => setStyle('paddingRight', params, negative),
  pt: (params, negative) => setStyle('paddingTop', params, negative),
  pb: (params, negative) => setStyle('paddingBottom', params, negative),
}