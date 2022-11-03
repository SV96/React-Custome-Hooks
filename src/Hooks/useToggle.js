import React, { useState, useCallback } from 'react'

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState((state) => !state), [])
  return [state, toggle]
}

const UseToggleCompoment = () => {
  const [stateValue, toggler] = useToggle()
  return (
    <button onClick={toggler}>
      {stateValue ? 'Toggled' : 'Click to Toggle'}
    </button>
  )
}

export default UseToggleCompoment
