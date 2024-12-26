
import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    const firstName: string = "Muhammad"
    const lastName: string = "Wasif"
    const age: number = 19
  return (
   <div >
    <h1>
        Parent Component
    </h1>
    <br  />
     <div>
      <ChildComponent firstName={firstName} lastName={lastName} age={age} />
    </div>
   </div>
  )
}
