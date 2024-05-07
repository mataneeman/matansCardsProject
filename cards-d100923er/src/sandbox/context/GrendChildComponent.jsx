import React from 'react'
import {  useData } from './DataProvider'

export default function GrendChildComponent() {
    const context =useData()
    console.log(context);
  return (
    <div>GrendChildComponent data1 = {context.data1}, data2= {context.data2}</div>
  )
}
