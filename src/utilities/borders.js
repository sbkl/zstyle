export default {
  rounded: ([size]) => ({
    borderRadius: isNaN(parseFloat(size)) ? 0 : parseFloat(size)
  }),
  border: (params) => {
    if(!params.length) {
      return {
        borderWidth: 1
      }
    }
    if(!isNaN(parseFloat(params[0]))) {
      return {
        borderWidth: parseFloat(params[0])
      }
    }
    if(params[0] === 'x' && !isNaN(parseFloat(params[1]))) {
      return {
        borderLeftWidth: !params[1] ? 1 : parseFloat(params[1]),
        borderRightWidth: !params[1] ? 1 : parseFloat(params[1]),
      }
    }
    if(params[0] === 'y' && !isNaN(parseFloat(params[1]))) {
      return {
        borderTopWidth: !params[1] ? 1 : parseFloat(params[1]),
        borderBottomWidth: !params[1] ? 1 : parseFloat(params[1]),
      }
    }
    return {
      borderWidth: 0
    }
  },
}