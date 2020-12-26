export default {
  rotate: ([rotation]) => ({transform: [{rotate: isNaN(parseFloat(rotation)) ? 0 + 'deg' : parseFloat(rotation) + 'deg'}]}),
  scale: ([scale]) => ({transform: [{scale: isNaN(parseFloat(scale)) ? 0 : parseFloat(scale)}]}),  
}