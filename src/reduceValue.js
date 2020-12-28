function reduceValue(params, object) {
  return params.reduce((carry, param) => {
    if(carry === undefined) {
      return carry
    }
    if(Object.keys(carry).length === 0 && object[param] != undefined) {
      carry = object[param];
    } else if(carry[param] != undefined) {
      carry = carry[param]
    } else {
      carry = undefined;
    }
    return carry
  }, {})
}

export default reduceValue