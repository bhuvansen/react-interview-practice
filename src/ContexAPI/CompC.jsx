import React from 'react'
import { userDetail } from '../GlobalContext/GlobalContext'

const CompC = () => {
  return (
    <userDetail.Consumer>{
        (detail)=>{
            return (<div>{`This is grandchild component with name ${detail.fname} ${detail.lname} using React Context Consumer`}</div>)
        }
    }
        
    </userDetail.Consumer>
  )
}

export default CompC