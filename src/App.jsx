import { useState } from 'react'
import './App.css'
import ContextAPI from './ContexAPI/contextAPI'
import UseRef from './UseRef/UseRef'
import UseMemo from './UseMemo/UseMemo'
import UseCallback from './UseCallback/UseCallback'
import UseReducerHook from './UseReducerHook/UseReducerHook'
function App() {

  return (
    <>
    <ContextAPI/>
    <UseRef/>
    <UseMemo/>
    <UseCallback/>
    <UseReducerHook/>
    </>
  )
}

export default App
