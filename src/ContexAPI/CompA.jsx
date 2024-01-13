import React from 'react'
import CompB from './CompB'
import { userDetail } from '../GlobalContext/GlobalContext'

const CompA = () => {
  return (
    <userDetail.Provider value={{fname:"Bhuvan", lname:"Sen"}}>
        <div><CompB/></div>
    </userDetail.Provider>
  )
}

export default CompA