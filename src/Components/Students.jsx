import React from 'react'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import "../App.css";
import { DataContext } from './Context';


const Students = () => {

    const addHandler=()=>{
        console.log("add called");
    }
const context=useContext(DataContext)
console.log(context)



  return (
    <div className='main'>
      <div className='container'> 
      <h2>Student Details</h2>
        <Link to='/addnewstudent' onClick={addHandler}><button>Add New Student</button></Link>
      </div>
   
<div className='tablebox'>

<table className='innertable'>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
          <th>Course</th>
          <th>Edit</th>
        </thead>
        <tfoot>
            {
             context.entries.map((i,index)=>(
              
                 
              <tr key={index}>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.batch}</td>
              <td>{i.course}</td>
              <td>
              {" "}
                    
                    <Link to='/editstudent' state={{newstudent:index}}> 
                   <a href='/editstudent' className='changebutton'>Edit</a> </Link>
              </td>
            </tr>
              ))}
          
            </tfoot>
            
          
            
          
      </table>
      </div>

    </div>
  )
}

export default Students