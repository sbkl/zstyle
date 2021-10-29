export default {
  flex: params => {
    if(params.length && params[0] === 'row') {
      if(params.length === 1) {
        return {flexDirection: "row"}
      }
      if(params.length === 2 && params[1] === "reverse") {
        return { flexDirection: "row-reverse"}
      }
      return {flexDirection: "column"}
    }
    if(params.length && params[0] === 'col') {
      if(params.length === 1) {
        return {flexDirection: "column"}
      }
      if(params.length === 2 && params[1] === "reverse") {
        return { flexDirection: "column-reverse"}
      }
      return {flexDirection: "column"}
    }
    if(params.length && params[0] === 'wrap') {
      if(params.length === 1) {
        return {flexWrap: "wrap"}
      }
      if(params.length === 2 && params[1] === "reverse") {
        return { flexWrap: "wrap-reverse"}
      }
      if(params.length === 2 && params[1] === "none") {
        return { flexWrap: "nowrap"}
      }
      return { flexWrap: "nowrap" }
    }
    if(params.length && params[0] === 'grow') {
      if(params.length === 1) {
        return {flexGrow: 1}
      }
      if(params.length === 2 && !isNaN(parseFloat(params[1]))) {
        return { flexGrow: parseFloat(params[1])}
      }
      return {flexGrow: 0}
    }
    if(params.length && params[0] === 'shrink') {
      if(params.length === 1) {
        return {flexShrink: 1}
      }
      if(params.length === 2 && !isNaN(parseFloat(params[1]))) {
        return { flexShrink: parseFloat(params[1])}
      }
      return {flexShrink: 0}
    }
    if(params.length === 1 && !isNaN(parseFloat(params[0]))) {
      return { flex: parseFloat(params[0])}
    }
  },
  items: {
    start: {
      alignItems: "flex-start"
    },
    center: {
      alignItems: "center"
    },
    end: {
      alignItems: "flex-end"
    },
    stretch: {
      alignItems: "stretch"
    },
    baseline: {
      alignItems: "baseline"
    }
  },
  justify: {
    start: {
      justifyContent: "flex-start"
    },
    center: {
      justifyContent: "center"
    },
    end: {
      justifyContent: "flex-end"
    },
    between: {
      justifyContent: "space-between"
    },
    around: {
      justifyContent: "space-around"
    },
    evenly: {
      justifyContent: "space-evenly"
    }
  },
  self: {
    start: {
      alignSelf: "flex-start"
    },
    center: {
      alignSelf: "center"
    },
    end: {
      alignSelf: "flex-end"
    },
    stretch: {
      alignSelf: "stretch"
    },
    baseline: {
      alignSelf: "baseline"
    }
  },
  content: {
    start: {
      alignContent: "flex-start"
    },
    center: {
      alignContent: "center"
    },
    end: {
      alignContent: "flex-end"
    },
    stretch: {
      alignContent: "stretch"
    },
    between: {
      alignContent: "space-between"
    },
    around: {
      alignContent: "space-around"
    }
  },
}