import React from 'react'

const Child = React.memo(function Child({increment}) {
    console.log ("child rendered")
  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  )

})
export default Child;
