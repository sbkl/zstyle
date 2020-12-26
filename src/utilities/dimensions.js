export default {
  h: ([height]) => ({
    height: parseFloat(height)
  }),
  w: ([width]) => ({
    width: width === 'full' ? '100%' : isNaN(parseFloat(width)) ? 0 : parseFloat(width)
  }),
}