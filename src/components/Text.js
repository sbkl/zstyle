import React from 'react'
import {Text as RNText} from 'react-native';
import useStyles from '../useStyles'

const Text = React.forwardRef(({children, style, ...props}, ref) => {
  
  const styles = useStyles(style)

  return <RNText ref={ref} style={styles} {...props}>
    {children}
  </RNText>
})

export default Text