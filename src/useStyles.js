import { useEffect, useState } from 'react'
import utilities from './utilities'

function useStyles(style) {

  const [styleState, setStyleState] = useState({})

  useEffect(() => {
    if(style) {
      if(typeof style === 'string') {
        setStyleState(transformString(style))
      } else if(Array.isArray(style)) {
        setStyleState(transformArray(style))
      }
    } else {
      setStyleState({})
    }
  }, [style])

  function transformString(style) {
    return style.split(' ').reduce((carry, item) => {
      const [prefix, ...other] = item.split('-')
      if(utilities[prefix]) {
        if(typeof utilities[prefix] === 'function') {
          carry = {...carry, ...utilities[prefix](other)}
        }
        if(typeof utilities[prefix] === 'object') {
          const test = other.reduce((carry, param) => {
            if(carry === "") {
              carry = utilities[prefix][param]
            } else {
              carry = carry[param]
            }
            return carry;
          }, "")
          carry = {...carry, ...test}
        }
      }
      return carry
    }, {})
  }

  function transformArray(style) {
    return style.reduce((carry, item) => {
      if(typeof item === 'string') {
        carry = {...carry, ...transformString(item)}
      } else if(typeof item === 'object') {
        carry = {...carry, ...item}
      }
      return carry
    }, {})
  }
  return styleState
}

export default useStyles