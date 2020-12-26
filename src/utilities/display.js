export default {  
  hidden: () => ({transform: [{scale: 0}]}),
  display: () => ({transform: [{scale: 1}]}),
  absolute: () => ({position: "absolute"}),
  relative: () => ({position: "relative"}),
  top: ([n]) => ({top: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  right: ([n]) => ({right: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  bottom: ([n]) => ({bottom: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  left: ([n]) => ({left: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  inset: (params) => {
    if(params.length === 2) {
      const [axis, n] = params
      if(axis === 'x') {
        return {
          right: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
          left: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
        }
      } else if(axis === 'y'){
        return {
          top: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
          bottom: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
        }
      }
    } else {
      const [n] = params
      return {
        top: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
        right: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
        bottom: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
        left: isNaN(parseFloat(n)) ? 0 : parseFloat(n),
      }
    }
    return {}
  },
  overflow: {
    visible: {
      overflow: 'visible'
    },
    hidden: {
      overflow: 'hidden'
    },
    scroll: {
      overflow: 'scroll'
    }
  },
  z: ([index]) => ({
    zIndex: isNaN(parseFloat(index)) ? 0 : parseFloat(index)
  }),
  opacity: ([opacity]) => ({
    opacity: isNaN(parseFloat(opacity)) ? 1 : parseFloat(opacity) / 100
  }),
}