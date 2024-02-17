import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Contact from './component/Contact'
import Header from './component/Header'
import AddContact from './component/AddContact'
import ConactList from './component/ConactList'
export default function App() {
  return (
//     <Routes>
// <Route path='/' element={<Header/>}/>
// <Route path='/contact' element={<Contact/>}/>

//     </Routes>
<div>
  <Header/>
  <AddContact/>
  <ConactList/>
</div>
  )
}
