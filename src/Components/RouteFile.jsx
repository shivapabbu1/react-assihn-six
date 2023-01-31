import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import Home from "./Home"
import Students from './Students'

import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'
import { DataContext } from './Context'
import Contactus from './Contactus'




const RouteFile = () => {

  var list=[
    {id:1,name:'Shiva',age:18,course:"MERN",batch:"september" },
    {id:2,name:'deepthi',age:22,course:"MERN",batch:"october"},
    {id:3,name:'pravalika',age:27,course:"MERN",batch:"November"},
    {id:4,name:'kiran',age:24,course:"MERN",batch:"December"},
];
  const [newstudent,setNewStudent]=useState(list)
 
 
  return (
    <div>
         <Routes>
            <Route path='/' element={<Navbar />}/>
            <Route index element={ <Home />} />
             
            <Route path='/student' element={<DataContext.Provider value={{entries:newstudent,updateFunction:setNewStudent}}>
              <Students/>
              </DataContext.Provider>} />
            <Route path='/contactus' element={ <Contactus />} />
            <Route path='/editstudent' element={
              <DataContext.Provider value={{entries:newstudent,updateFunction:setNewStudent}}>
                <EditStudent/>
              </DataContext.Provider>
            } />
            <Route path='/addnewstudent' element={<DataContext.Provider value={{entries:newstudent,updateFunction:setNewStudent}}>
              <AddNewStudent/>
            </DataContext.Provider> } /> 
        </Routes>
    </div>
  )
}

export default RouteFile