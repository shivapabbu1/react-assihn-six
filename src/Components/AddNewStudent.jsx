import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { DataContext } from './Context'
// import { useState } from 'react'
import { useLocation } from 'react-router-dom'



const AddNewStudent = () => {
const context=useContext(DataContext)
console.log(context);

const navigate=useNavigate();
// const index=(location.state.newstudent)
const newObj={
    name:"",
    age:"",
    course:"",
    batch:"",
}
const addHandler=(e)=>{
    newObj[e.target.name] = e.target.value;
    console.log(newObj);
}
const handlesubmit=(e)=>{
    e.preventDefault();
    console.log('add operation called')
    context.updateFunction((prevObj)=>{prevObj.push(newObj); return prevObj})
    navigate('/student');
}
const deleted=()=>{
    navigate('/student')
}

  
  return (
    
 <div className='addnewstudentform'>
        <form>
            <h2>Add New Student</h2>
            <div className="input-container ic1">
            
                
                <label htmlFor='name'className="placeholder">Name</label>
                <input name='name'className="input" type="text" placeholder=" " onChange={addHandler}/>
                
            </div>
            <div className="input-container ic2">
                
               
                <label htmlFor="lastname" className="placeholder">Age</label>
                <input name='age'className="input" type="number" placeholder=" " onChange={addHandler}/>
            </div>
            <div className="input-container ic3">
                
               
                <label htmlFor="course" className="placeholder">Course</label>
                <input name="course"  className="input" type="text" placeholder=" "onChange={addHandler}/>
            </div>
            <div className="input-container ic4">
                
             
                <label htmlFor="batch" className="placeholder">Batch</label> <br />
                <input name="batch" className="input" type="text" placeholder=" "onChange={addHandler}/>
                
            </div>
           <button className="submit-btn" type='submit' onClick={handlesubmit}>submit</button>
           <button  className="cancel-btn" type='cancel' onClick={deleted} >Cancel</button>
        </form>
 </div>
  )
}

export default AddNewStudent


