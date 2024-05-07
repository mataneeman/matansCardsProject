import React, { createContext, useContext } from 'react'

//create context
const MyContext = createContext()

//create provider - handle the global data
export default function DataProvider({children}) {
  const data ={data1:100,data2:"hello"}
  return ( 
  <MyContext.Provider value={data}>
    {children}
  </MyContext.Provider>
  )
}

// custom hook to use the context and handle error situations
export const useData=()=>{
    const context =useContext(MyContext)
    if(!context) throw new Error("useData must be withing a Provider")
    return context
}