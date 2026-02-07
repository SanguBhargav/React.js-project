import React from 'react'
import { useState, useEffect } from 'react'

export default function UseCallBackList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return (
    <div>
      <h3>UseCallBack LIST</h3>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
