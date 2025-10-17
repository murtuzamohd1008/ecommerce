import React, { useState } from 'react'
import { createContext } from 'react'
export const contextData=createContext();
const ContextApi = ({children}) => {
    const [showSearch,setShowSearch]=useState(false);
    const [input,setInput]=useState('');
    const [showForm,setShowForm]=useState(false);
    const value={
      showSearch,setShowSearch,input,setInput,showForm,setShowForm
    }
  return (
    <div>
          <contextData.Provider value={value}>
            {children}
          </contextData.Provider>
    </div>
  )
}

export default ContextApi