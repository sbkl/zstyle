export default {
  transform(params) {
    const transforms = params.reduce((carry, item) => {
      let negative = false;
      if (item.charAt(0) === "-") {
        negative = true;
        item = item.substring(1);
      }
      const array = item.split('-')
      let attribute = array[0];
      let value;
      if(attribute === 'rotate') {
        if(['x', 'y', 'z'].includes(array[1])) {
          attribute = attribute + array[1].toUppercase()
        }
      }
      // if(array.length === 3 && ['x', 'y', 'z'].includes(array[1])) {
      //   // attribute = array[0] + array[1].toUppercase();
      //   // value = negative ? array[2] * -1 : array[2]
      // } else {
      //   attribute = array[0]
      //   if(attribute === 'rotate') {
      //     value = negative ? '-' : '' + parseFloat(array[1]) + 'deg'
      //   } else {
      //     value = negative ? parseFloat(array[1]) * -1 : parseFloat(array[1])
      //   }
      // }
      // if(attribute) {
      //   carry.push({[attribute]: value})
      // }
      return carry
    }, [])    
    // const test =  {
    //   transform: [
    //     {
    //       ...transforms
    //       // rotate: isNaN(parseFloat(rotation)) ? 0 + 'deg' : parseFloat(rotation) + 'deg'
    //     }
    //   ]
    // }
    console.log(transforms)
    return {
      transform: transforms
    }
  }
  // rotate: ([rotation]) => ({transform: [{rotate: isNaN(parseFloat(rotation)) ? 0 + 'deg' : parseFloat(rotation) + 'deg'}]}),
  // scale: ([scale]) => ({transform: [{scale: isNaN(parseFloat(scale)) ? 0 : parseFloat(scale)}]}),  
}