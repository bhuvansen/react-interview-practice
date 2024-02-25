import React, { useContext } from 'react'
import CompC from './CompC'
import { userDetail } from '../GlobalContext/GlobalContext'

const CompB = () => {
    let {fname} = useContext(userDetail)
    return (
    <div>
        <div>{`This is from middle component ${fname} using useContext`}</div>
        <CompC/>
    </div>
    )
}

export default CompB