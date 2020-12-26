export default {
  p: ([padding]) => ({
    padding: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }),
  py: ([padding]) => ({
    paddingVertical: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }), 
  px: ([padding]) => ({
    paddingHorizontal: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }),  
  pl: ([padding]) => ({
    paddingLeft: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }), 
  pr: ([padding]) => ({
    paddingRight: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }),
  pt: ([padding]) => ({
    paddingTop: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }),
  pb: ([padding]) => ({
    paddingBottom: isNaN(parseFloat(padding)) ? 0 : parseFloat(padding)
  }),
}