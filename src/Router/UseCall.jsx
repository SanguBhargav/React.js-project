import React from 'react'
import { useState, useCallback } from 'react'
import UseCallBackList from './UseCallBackList'

export default function UseCall() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#111' : '#1a76b8',
    color: dark ? '#fff' : '#da1414',
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle The Theme
      </button>

      {/*<UseCallBackList getItems={getItems} />*/}
    </div>
  )
}
