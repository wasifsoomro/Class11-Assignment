import React from 'react'

export default function ChildComponent({firstName, lastName, age}:any) {
  return (
    <div>
       <h1>
        Child Component
       </h1>
       <div >
         First Name: {firstName}
         <br />
         Last Name: {lastName}
         <br />
         Age: {age}
       </div>
    </div>
  )
}