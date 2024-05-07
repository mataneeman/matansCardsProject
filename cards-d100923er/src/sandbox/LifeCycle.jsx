import React, { useEffect } from 'react'

export default function LifeCycle() {

useEffect(()=>{
    console.log("has mount");

    return()=>{
        console.log('has Unmount');
    }
},[])


  return (
    <div>LifeCycle</div>
  )
}
