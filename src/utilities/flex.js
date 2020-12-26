export default {
  flex: ([n]) => ({flex: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  grow: ([n]) => ({flexGrow: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  shrink: ([n]) => ({flexShrink: isNaN(parseFloat(n)) ? 0 : parseFloat(n)}),
  row: params => ({flexDirection: params.length === 0 ? "row" : params[0] === 'reverse' ? "row-reverse" : ""}),
  col: params => ({flexDirection: params.length === 0 ? "column" : params[0] === 'reverse' ? "column-reverse" : ""}),
  wrap: params => ({flexWrap: params.length === 0 ? "wrap" : params[0] === 'reverse' ? "wrap-reverse" : params[0] === 'none' ? "nowrap" : ""}),
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