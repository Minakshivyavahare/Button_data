import React from 'react'
import SubChild from './SubChild'

const Child1 = (props) => {
  return (
    <div>
        <h1>Child1</h1>
        <SubChild subval={props.val}/>
    </div>
  )
}

export default Child1