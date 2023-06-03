import React from 'react'

function Ds() {
  let obj1 = {
    floorName: '1st Floor',
    builtUpArea:400,
    fromData:'2022-01-05'
  }
  let obj2 = {
    floorName: '2nd Floor',
    builtUpArea:500,
    fromData:'2022-01-05'
  }

  const map = new Map()

  // THIS WILL SET obj1 AND obj2 IN ARRAY
  map.set('obj1', obj1)
  map.set('obj2', obj2)
  console.log('Map printed...',map)
  return (
    <div>Ds</div>
  )
}

export default Ds