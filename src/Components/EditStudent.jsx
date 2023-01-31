import React from 'react'
import { useContext } from 'react'

import { useLocation,useNavigate} from 'react-router-dom'

import { DataContext } from './Context'
import { Link } from 'react-router-dom'
 
 const EditStudent = () => {
 const context=useContext(DataContext)
console.log(context);
const location=useLocation();
console.log(location);
const navigate=useNavigate();
const index=(location.state.newstudent);
const newObj={
        name:context.entries[index].name,
        age:context.entries[index].age,
        course:context.entries[index].course,
        batch:context.entries[index].batch,
    }
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       console.log(newObj);     
    }

   const handlesubmit = (event) =>{
       console.log(context.entries[index])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj) 
        }
       );
       navigate('/');
    }
    const cancel=()=>{
        navigate('/student')
    }
   return (
    
 <div className='editbox'>
    <div className='update'>
        <div >
        <label htmlFor="name">Name:</label> <br/>
         <input type="text" name="name" required="required" onChange={handleChange} placeholder={context.entries[index].name} /> <br/>
         </div>
         <div>
         <label htmlFor="age">Age:</label><br/>
         <input type="text" name="age" onChange={handleChange} placeholder={context.entries[index].age}/> <br/>
         </div>
         <div>
         <label htmlFor="batch">Batch:</label><br/>
         <input type="text" name="batch" onChange={handleChange} placeholder={context.entries[index].batch} /> <br/>
         </div>
         <div>
         <label htmlFor="course">Course:</label><br/>
         <input type="text" name="course" onChange={handleChange} placeholder={context.entries[index].course} /> <br/>
         </div>
         </div>
         <div className='btndiv'>
       <Link to="/student">  <button  className='updatebutton' onClick={handlesubmit} >Update</button> </Link>
        <Link to="/student"> <button  className='cancelbtn' onClick={cancel}>Cancel</button></Link>
         </div>
         </div>
   )
 }
  

export default EditStudent