import { useState } from 'react'
import './App.css'
import ContextAPI from './ContexAPI/contextAPI'
import UseRef from './UseRef/UseRef'
import UseMemo from './UseMemo/UseMemo'
import UseCallback from './UseCallback/UseCallback'
import UseReducerHook from './UseReducerHook/UseReducerHook'
import ReduxToolkit from './ReduxToolkit/ReduxToolkit'
function App() {

  return (
    <>
    <ContextAPI/>
    <UseRef/>
    <UseMemo/>
    <UseCallback/>
    <UseReducerHook/>
    <ReduxToolkit/>
    </>
  )
}

export default App
