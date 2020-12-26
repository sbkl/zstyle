export default {
  m: ([margin]) => ({
    margin: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),
  my: ([margin]) => ({
    marginVertical: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }), 
  mx: ([margin]) => ({
    marginHorizontal: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),  
  ml: ([margin]) => ({
    marginLeft: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }), 
  mr: ([margin]) => ({
    marginRight: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),
  mt: ([margin]) => ({
    marginTop: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),
  mb: ([margin]) => ({
    marginBottom: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),
  me: ([margin]) => ({
    marginEnd: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),    
  ms: ([margin]) => ({
    marginStart: isNaN(parseFloat(margin)) ? 0 : parseFloat(margin)
  }),
}