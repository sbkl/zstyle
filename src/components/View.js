import React from 'react'
import {View as RNView} from 'react-native';
import useStyles from '../useStyles'

const View = React.forwardRef(({children, style, ...props}, ref) => {
  
  const styles = useStyles(style)

  return <RNView ref={ref} style={styles} {...props}>
    {children}
  </RNView>
})

export default View